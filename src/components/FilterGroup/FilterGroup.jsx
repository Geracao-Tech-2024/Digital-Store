import "./FilterGroup.css";

export default function FilterGroup({ tittle, options, typeInp }) {
  return (
    <div className="mt-2">
      <div className="tittle-options">{tittle}</div>

      <div className="filter-itens mt-3">
        {options.map(option => (
          <div className='d-flex mt-1 '>
            <input type={typeInp} value={options.value} name={typeInp == 'radio'? tittle : option.text} id={option.text} />
            <label htmlFor={option.text}>{option.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
