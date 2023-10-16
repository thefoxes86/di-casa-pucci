export const ctpDobermannFieldsFragment = `
fragment ctpDobermannFields on Ctp_dobermann {
  title
  slug
  date
  content
  featuredImage {
    node {
      sourceUrl(size: THUMBNAIL)
    }
  }
  schedaDobermann {
    dobAllevatore
    dobNome
    dobSex {
      name
    }
  }
}
`

export const ctpCuccioliFieldsFragment = `
fragment cptCuccioliFields on Cpt_cuccioli {
  title
  slug
  date
  content
  featuredImage {
    node {
      sourceUrl(size: THUMBNAIL)
    }
  }
}
`

export const dobParentsFieldsFragment = `
fragment dobParentsFields on Ctp_dobermann {
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
            dobPadre {
              ... on Ctp_dobermann {
                ...ctpDobermannFields
              }
            }
          }
        }
      }
      dobPadre {
        ... on Ctp_dobermann {
          ...ctpDobermannFields
          schedaDobermann {
            dobMadre {
              ... on Ctp_dobermann {
                ...ctpDobermannFields
              }
            }
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
      ... on Ctp_dobermann {
        ...dobParentsFields
      }
    }
    dobPadre {
      ... on Ctp_dobermann {
        ...dobParentsFields
      }
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

export const schedaCuccioliFieldsFragment = `
fragment schedaDobermanFields on Cpt_cuccioli {
  schedaDobermann {
    dobAllevatore
    dobDob
    dobMadre {
      ... on Cpt_cuccioli {
        ...dobParentsFields
      }
    }
    dobPadre {
      ... on Cpt_cuccioli {
        ...dobParentsFields
      }
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
