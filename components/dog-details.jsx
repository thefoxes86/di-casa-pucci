const DogDetails = ({ data }) => {
  return (
    <div className="dog__detail">
      <div className="dog__detail_general">
        <p>
          <span className="font-bold">Data di nascita</span>:{' '}
          <span
            dangerouslySetInnerHTML={{ __html: data?.dobDataNascita || 'N/A' }}
          />
        </p>
        <p>
          <span className="font-bold">Età</span>:
          <span dangerouslySetInnerHTML={{ __html: data?.dobEta || 'N/A' }} />
        </p>
        <p>
          <span className="font-bold">N° microchip</span>:{' '}
          <span
            dangerouslySetInnerHTML={{ __html: data?.dobMicrochip || 'N/A' }}
          />
        </p>

        <p>
          <span className="font-bold">N° pedigree</span>:{' '}
          <span
            dangerouslySetInnerHTML={{ __html: data?.dobPedigree || 'N/A' }}
          />
        </p>
        <p>
          <span className="font-bold">Salute</span>:{' '}
          <span
            dangerouslySetInnerHTML={{ __html: data?.dobSalute || 'N/A' }}
          />
        </p>

        <p>
          <span className="font-bold">Proprietario</span>:{' '}
          <span
            dangerouslySetInnerHTML={{ __html: data?.dobProprietario || 'N/A' }}
          />
        </p>
        <p>
          <span className="font-bold">Allevatore</span>:{' '}
          <span
            dangerouslySetInnerHTML={{ __html: data?.dobAllevatore || 'N/A' }}
          />
        </p>
      </div>
      <div className="dog__detail_score">
        <p>
          <span className="font-bold">Working Score</span>:{' '}
          <span
            dangerouslySetInnerHTML={{
              __html: data?.dobWorkingScores || 'N/A',
            }}
          />
        </p>
        <p>
          <span className="font-bold">Show Score</span>:{' '}
          <span
            dangerouslySetInnerHTML={{ __html: data?.dobShowScore || 'N/A' }}
          />
        </p>
        <p>
          <span className="font-bold">Working cert</span>:{' '}
          <span
            dangerouslySetInnerHTML={{ __html: data?.dobWorkingCert || 'N/A' }}
          />
        </p>
      </div>
    </div>
  )
}

export default DogDetails
