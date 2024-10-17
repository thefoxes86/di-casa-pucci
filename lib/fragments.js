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
    tipoDiCucciolo
    dobSex {
      name
    }
  }
}
`;

export const ctpPastoreFieldsFragment = `
fragment ctpPastoreFields on Ctp_pastore {
  title
  slug
  date
  content
  featuredImage {
    node {
      sourceUrl
    }
  }
  schedaPastore {
    pasAllevatore
    pasNome
    pasSex {
      name
    }
  }
}
`;

export const ctpCuccioliFieldsFragment = `
fragment cptCuccioliFields on Cpt_cuccioli {
  title
  slug
  date
  content
  featuredImage {
    node {
      sourceUrl
    }
  }
}
`;

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
`;

export const pasParentsFieldsFragment = `
fragment pasParentsFields on Ctp_pastore {
  ... on Ctp_pastore {
    ...ctpPastoreFields
    schedaPastore {
      pasMadre {
        ... on Ctp_pastore {
          ...ctpPastoreFields
          schedaPastore {
            pasMadre {
              ... on Ctp_pastore {
                ...ctpPastoreFields
              }
            }
            pasPadre {
              ... on Ctp_pastore {
                ...ctpPastoreFields
              }
            }
          }
        }
      }
      pasPadre {
        ... on Ctp_pastore {
          ...ctpPastoreFields
          schedaPastore {
            pasMadre {
              ... on Ctp_pastore {
                ...ctpPastoreFields
              }
            }
            pasPadre {
              ... on Ctp_pastore {
                ...ctpPastoreFields
              }
            }
          }
        }
      }
    }
  }
}
`;

export const schedaDobermanFieldsFragment = `
fragment schedaDobermanFields on Ctp_dobermann {
  schedaDobermann {
    dobAllevatore
    dobDob
    tipoDiCucciolo
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
`;

export const schedaPastoreFieldsFragment = `
fragment schedaPastoreFields on Ctp_pastore {
  schedaPastore {
    pasAllevatore
    pasDob
    pasMadre {
      ... on Ctp_pastore {
        ...pasParentsFields
      }
    }
    pasPadre {
      ... on Ctp_pastore {
        ...pasParentsFields
      }
    }
    pasNome
    pasMicrochip
    pasPedigree
    pasPropietario
    pasRiconoscimenti
    pasSalute
    pasShowScore
    pasSuffisso
    pasVisibile
    pasWorkingCert
    pasWorkingScore
    pasSex {
      name
      sessoId
      slug
    }
  }
}
`;

export const schedaCuccioliFieldsFragment = `
fragment schedaDobermanFields on Cpt_cuccioli {
  schedaDobermann {
    dobAllevatore
    dobDob
    tipoDiCucciolo
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
`;
