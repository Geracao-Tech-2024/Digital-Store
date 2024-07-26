import "./FilterGroup.css";

export default function FilterGroup({ tittle, options }) {
  return (
    <>
      <div className="tittle-options">{tittle}</div>

      <div className="filter-itens mt-3">
        {options.map(option => (
          <div className='d-flex mt-1 '>
            <input type="checkbox" value={options.value} name={option.title} id={option.text} />
            <label htmlFor={option.text}>{option.text}</label>
          </div>
        ))}
      </div>
    </>
  );
}
