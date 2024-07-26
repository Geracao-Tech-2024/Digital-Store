import "./FilterGroup.css";

export default function FilterGroup({ tittle, options }) {
  return (
    <>
      <div className="tittle-options">{tittle}</div>

      <div className="filter-itens">
        <input type="checkbox" name={options.text} id={options.text} />
        <label htmlFor={options.text}>{options.text}</label>
      </div>
      <div className="filter-itens">
        <input type="checkbox" name={options.text2} id={options.text2} />
        <label htmlFor={options.text}>{options.text2}</label>
      </div>
    </>
  );
}
