import FilterGroup from "../FilterGroup/FilterGroup";
import "./FilterBy.css";

export default function FilterBy() {
  const opt = [
    { text: "20%" , value:"20"},
    { text: "30%" , value:"30"},
    { text: "40%" , value:"40"},
    { text: "50%" , value:"50"},
  ];
  return (
    <>
      <div className="filter-body">
        <h2>Filtrar por</h2>
        <hr />
        <div className="filter-tittle">
          <FilterGroup tittle={"Desconto"} options={opt}></FilterGroup>
        </div>
      </div>
    </>
  );
}
