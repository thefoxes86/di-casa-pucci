import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
  ctpDobermannFieldsFragment,
  dobParentsFieldsFragment,
  schedaDobermanFieldsFragment,
  ctpPastoreFieldsFragment,
  pasParentsFieldsFragment,
  schedaPastoreFieldsFragment,
} from "./fragments";
const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
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
  );
  return data.post;
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
  `);
  return data?.page;
}

export async function getPage(id) {
  const data = await fetchAPI(
    `
    query Page($id: ID!) {
      page(id: $id, idType: DATABASE_ID) {
        content(format: RENDERED)
        title(format: RENDERED)
        slug
      }
    }`,
    {
      variables: {
        id,
      },
    }
  );

  return data?.page;
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
  `);
  return data?.page;
}

export async function getAddestramento(preview) {
  const data = await fetchAPI(`
  {
    page(id: 4043, idType: DATABASE_ID) {
      content(format: RENDERED)
      title(format: RENDERED)
      slug
    }
  }
  `);
  return data?.page;
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
  `);
  return data?.page;
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
  `);
  return data?.posts;
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
  `);
  return data?.ctpDobermanns;
}

export async function getAllPastoresWithSlug() {
  const data = await fetchAPI(`
    {
      ctpPastores(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.ctpPastores;
}

export async function getAllCuccioliWithSlug() {
  const data = await fetchAPI(`
    {
      cptCucciolis(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.cptCucciolis;
}

export async function getAllPosts(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts( where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl(size: THUMBNAIL)
              }
            }
            sezione {
              sezione
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
  );

  return data?.posts;
}

export async function getAllDobermann(preview) {
  const data = await fetchAPI(
    `
    query AllDobermans {
      page(id: "4199", idType: DATABASE_ID) {
        avvisi {
          avviso
          message
        }
      }
      ctpDobermanns(where: {orderby: {field: DATE, order: DESC}}, first: 1000) {
        edges {
          node {
            title
            slug
            date
            featuredImage {
              node {
                sourceUrl(size: THUMBNAIL)
              }
            }
            schedaDobermann {
              dobNome
              dobAllevatore
              dobRiconoscimenti
              tipoDiCucciolo
              dobSex {
                name
                sessoId
                slug
              }
              dobVisibile
            }
          }
        }
      }
      posts(first: 10) {
        edges {
          node {
            content
            title
            featuredImage {
              node {
                sourceUrl(size: MEDIUM)
              }
            }
            date
            excerpt
            slug
            sezione {
              sezione
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
  );

  return data;
}

export async function getAllPastori(preview) {
  const data = await fetchAPI(
    `
    query AllPastores {
      page(id: "4033", idType: DATABASE_ID) {
        avvisi {
          avviso
          message
        }
      }
      ctpPastores(where: {orderby: {field: DATE, order: DESC}}, first: 1000) {
        edges {
          node {
            title
            slug
            date
            featuredImage {
              node {
                sourceUrl(size: THUMBNAIL)
              }
            }
            schedaPastore {
              pasNome
              pasAllevatore
              pasRiconoscimenti
              pasSex {
                name
                sessoId
                slug
              }
              pasVisibile
            }
          }
        }
      }
      posts(first: 10) {
        edges {
          node {
            content
            title
            featuredImage {
              node {
                sourceUrl(size: MEDIUM)
              }
            }
            date
            excerpt
            slug
            sezione {
              sezione
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
  );

  return data;
}

export async function getAllCuccioli(preview) {
  const data = await fetchAPI(
    `
    query AllCucciolis {
      cptCucciolis(first: 1000) {
        edges {
          node {
            title
            slug
            date
            featuredImage {
              node {
                sourceUrl(size: THUMBNAIL)
              }
            }
            schedaDobermann {
              dobNome
              dobAllevatore
              tipoDiCucciolo
              dobRiconoscimenti
              dobSex {
                name
                slug
                sessoId
              }
              dobVisibile
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
  );

  return data?.cptCucciolis;
}

export async function getPostBySlug(slug) {
  const data = await fetchAPI(
    ` 
    query PostBySlug($id: ID = "", $idType: PostIdType = SLUG) {
      post(id: $id, idType: $idType) {
        title
        excerpt
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl(size: LARGE)
          }
        }
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );

  // Draft posts may not have an slug

  // Apply a revision (changes in a published post)
  return data;
}

export async function getDobermanAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.ctpDobermann;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
    ${ctpDobermannFieldsFragment}
    ${dobParentsFieldsFragment}
    ${schedaDobermanFieldsFragment}
    query DobermanBySlug($id: ID!, $idType: Ctp_dobermannIdType!) {
      ctpDobermann(id: $id, idType: $idType) {
        ...ctpDobermannFields
        ...schedaDobermanFields
        ...dobParentsFields
      }
      
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.ctpDobermann.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.ctpDobermann.revisions) {
    const revision = data.ctpDobermann.revisions.edges[0]?.node;

    if (revision) Object.assign(data.ctpDobermann, revision);
    delete data.ctpDobermann.revisions;
  }
  return data;
}

export async function getPastoreAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.ctpPastore;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
    ${ctpPastoreFieldsFragment}
    ${schedaPastoreFieldsFragment}
    ${pasParentsFieldsFragment}
    query PastoreBySlug($id: ID!, $idType: Ctp_pastoreIdType!) {
      ctpPastore(id: $id, idType: $idType) {
        ...ctpPastoreFields
        ...schedaPastoreFields
        ...pasParentsFields
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.ctpPastore.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.ctpPastore.revisions) {
    const revision = data.ctpPastore.revisions.edges[0]?.node;

    if (revision) Object.assign(data.ctpPastore, revision);
    delete data.ctpPastore.revisions;
  }
  return data;
}

export async function getCuccioliAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.cptCuccioli;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
    
    query CuccioliBySlug($id: ID!, $idType: Cpt_cuccioliIdType!) {
      cptCuccioli(id: $id, idType: $idType) {
        title
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        schedaDobermann {
          dobAllevatore
          dobDob
          dobNome
          dobMicrochip
          dobPedigree
          tipoDiCucciolo
          dobPropietario
          dobRiconoscimenti
          dobSalute
          dobShowScore
          dobSuffisso
          dobVisibile
          dobWorkingCert
          dobWorkingScore
          dobGalleria {
            sourceUrl(size: BLOCCO_GRIGLIA)
          }
          dobSex {
            name
            sessoId
            slug
          }
        }
        
      }
      
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.ctpDobermann.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.ctpDobermann.revisions) {
    const revision = data.ctpDobermann.revisions.edges[0]?.node;

    if (revision) Object.assign(data.ctpDobermann, revision);
    delete data.ctpDobermann.revisions;
  }
  return data;
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
                sourceUrl(size: THUMBNAIL)
              }
            }
          }
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl(size: THUMBNAIL)
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
  );

  return data;
}

export async function sendMail(subject, body, mutationId = "contact") {
  const fromAddress = "noreply@yourwebsite.com";
  const toAddress = "nicola.volpi86@gmail.com";
  const data = await fetchAPI(
    `
		mutation SendEmail($input: SendEmailInput!) {
			sendEmail(input: $input) {
				message
				origin
				sent
			}
		}
	`,
    {
      variables: {
        input: {
          clientMutationId: mutationId,
          from: fromAddress,
          to: toAddress,
          body: body,
          subject: subject,
        },
      },
    }
  );

  return data?.sendEmail;
}

export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
