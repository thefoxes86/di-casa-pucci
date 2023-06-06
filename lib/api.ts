const API_URL = process.env.WORDPRESS_API_URL
import {ctpDobermannFieldsFragment, dobMadreFieldsFragment, dobPadreFieldsFragment, schedaDobermanFieldsFragment} from './fragments'

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}

export async function getContacts(preview) {
  const data = await fetchAPI(`
  {
    page(id: 221, idType: DATABASE_ID) {
      content(format: RENDERED)
      title(format: RENDERED)
      slug
    }
  }
  `)
  return data?.page
}

export async function getAbout(preview) {
  const data = await fetchAPI(`
  {
    page(id: 385, idType: DATABASE_ID) {
      content(format: RENDERED)
      title(format: RENDERED)
      slug
    }
  }
  `)
  return data?.page
}

export async function getAllevamento(preview) {
  const data = await fetchAPI(`
  {
    page(id: 4033, idType: DATABASE_ID) {
      content(format: RENDERED)
      title(format: RENDERED)
      slug
    }
  }
  `)
  return data?.page
}

export async function getAddestramento(preview) {
  const data = await fetchAPI(`
  {
    page(id: 480, idType: DATABASE_ID) {
      content(format: RENDERED)
      title(format: RENDERED)
      slug
    }
  }
  `)
  return data?.page
}

export async function getAccoppiamento(preview) {
  const data = await fetchAPI(`
  {
    page(id: 489, idType: DATABASE_ID) {
      content(format: RENDERED)
      title(format: RENDERED)
      slug
    }
  }
  `)
  return data?.page
}


export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getAllDobermansWithSlug() {
  const data = await fetchAPI(`
    {
      ctpDobermanns(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.ctpDobermanns
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

export async function getAllDobermann(preview) {
  const data = await fetchAPI(
    `
    query AllDobermans {
      ctpDobermanns(where: {orderby: {field: DATE, order: DESC}}, first: 1000) {
        edges {
          node {
            title
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            schedaDobermann {
              dobNome
              dobAllevatore
              dobRiconoscimenti
              dobSex {
                name
                sessoId
                slug
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.ctpDobermanns
}

export async function getAllDobermansForHome(preview) {
  const data = await fetchAPI(
    `
    query AllDobermans {
      ctpDobermanns(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.ctpDobermanns
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ''
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data
}


export async function getDobermanAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.ctpDobermann
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    ${ctpDobermannFieldsFragment}
    ${dobMadreFieldsFragment}
    ${dobPadreFieldsFragment}
    ${schedaDobermanFieldsFragment}
    query DobermanBySlug($id: ID!, $idType: Ctp_dobermannIdType!) {
      ctpDobermann(id: $id, idType: $idType) {
        ...ctpDobermannFields
        ...schedaDobermanFields
        content
      }
      
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.ctpDobermann.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.ctpDobermann.revisions) {
    const revision = data.ctpDobermann.revisions.edges[0]?.node

    if (revision) Object.assign(data.ctpDobermann, revision)
    delete data.ctpDobermann.revisions
  }






  return data
}
