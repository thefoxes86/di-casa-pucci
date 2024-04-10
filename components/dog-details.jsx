const DogDetails = ({ data, type = 'dobermann' }) => {
  return (
    <div className="dog__detail">
      <div className="dog__detail_general">
        <p>
          <span className="font-bold">Data di nascita</span>:{' '}
          <span
            dangerouslySetInnerHTML={{
              __html:
                type === 'pastore'
                  ? data?.pasDataNascita
                  : data?.dobDataNascita || 'N/A',
            }}
          />
        </p>
        <p>
          <span className="font-bold">Età</span>:
          <span
            dangerouslySetInnerHTML={{
              __html: type === 'pastore' ? data?.pasEta : data?.dobEta || 'N/A',
            }}
          />
        </p>
        <p>
          <span className="font-bold">N° microchip</span>:{' '}
          <span
            dangerouslySetInnerHTML={{
              __html:
                type === 'pastore'
                  ? data?.pasMicrochip
                  : data?.dobMicrochip || 'N/A',
            }}
          />
        </p>

        <p>
          <span className="font-bold">N° pedigree</span>:{' '}
          <span
            dangerouslySetInnerHTML={{
              __html:
                type === 'pastore'
                  ? data?.pasPedigree
                  : data?.dobPedigree || 'N/A',
            }}
          />
        </p>
        <p>
          <span className="font-bold">Salute</span>:{' '}
          <span
            dangerouslySetInnerHTML={{
              __html:
                type === 'pastore' ? data?.pasSalute : data?.dobSalute || 'N/A',
            }}
          />
        </p>

        <p>
          <span className="font-bold">Proprietario</span>:{' '}
          <span
            dangerouslySetInnerHTML={{
              __html:
                type === 'pastore'
                  ? data?.pasProprietario
                  : data?.dobProprietario || 'N/A',
            }}
          />
        </p>
        <p>
          <span className="font-bold">Allevatore</span>:{' '}
          <span
            dangerouslySetInnerHTML={{
              __html:
                type === 'pastore'
                  ? data?.pasAllevatore
                  : data?.dodobAllevatorebEta || 'N/A',
            }}
          />
        </p>
      </div>
      <div className="dog__detail_score">
        <p>
          <span className="font-bold">Working Score</span>:{' '}
          <span
            dangerouslySetInnerHTML={{
              __html:
                type === 'pastore'
                  ? data?.pasWorkingScores
                  : data?.dobWorkingScores || 'N/A',
            }}
          />
        </p>
        <p>
          <span className="font-bold">Show Score</span>:{' '}
          <span
            dangerouslySetInnerHTML={{
              __html:
                type === 'pastore'
                  ? data?.pasShowScore
                  : data?.dobShowScore || 'N/A',
            }}
          />
        </p>
        <p>
          <span className="font-bold">Working cert</span>:{' '}
          <span
            dangerouslySetInnerHTML={{
              __html:
                type === 'pastore'
                  ? data?.pasWorkingCert
                  : data?.dobWorkingCert || 'N/A',
            }}
          />
        </p>
      </div>
    </div>
  )
}

export default DogDetails
