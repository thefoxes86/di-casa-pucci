export const ctpDobermannFieldsFragment = `
  fragment ctpDobermannFields on Ctp_dobermann {
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
      dobNome
    }
  }
`

export const dobMadreFieldsFragment = `
  fragment dobMadreFields on Ctp_dobermann {
    ... on Ctp_dobermann {
      ...ctpDobermannFields
      schedaDobermann {
        dobMadre {
          ... on Ctp_dobermann {
            ...ctpDobermannFields
            schedaDobermann {
              dobMadre {
                ... on Ctp_dobermann {
                  ...ctpDobermannFields
                }
              }
            }
          }
        }
      }
    }
  }
`

export const dobPadreFieldsFragment = `
  fragment dobPadreFields on Ctp_dobermann {
    ... on Ctp_dobermann {
      ...ctpDobermannFields
      schedaDobermann {
        dobPadre {
          ... on Ctp_dobermann {
            ...ctpDobermannFields
            schedaDobermann {
              dobPadre {
                ... on Ctp_dobermann {
                  ...ctpDobermannFields
                }
              }
            }
          }
        }
      }
    }
  }
`

export const schedaDobermanFieldsFragment = `
  fragment schedaDobermanFields on Ctp_dobermann {
    schedaDobermann {
      dobAllevatore
      dobDob
      dobMadre {
        ...dobMadreFields
      }
      dobPadre {
        ...dobPadreFields
      }
      dobNome
      dobMicrochip
      dobPedigree
      dobPropietario
      dobRiconoscimenti
      dobSalute
      dobShowScore
      dobSuffisso
      dobVisibile
      dobWorkingCert
      dobWorkingScore
      dobSex {
        name
        sessoId
        slug
      }
    }
  }
`
