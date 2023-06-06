const FilteringButtons = ({ active, handleClick }) => {
  const items = ['TUTTI', 'Maschio', 'Femmina']

  return (
    <div className="filtering__buttons" style={{ marginBottom: '1rem' }}>
      {items.map(item => (
        <button
          className={active === item.toLowerCase() && 'active'}
          onClick={() => handleClick(item.toLowerCase())}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default FilteringButtons
