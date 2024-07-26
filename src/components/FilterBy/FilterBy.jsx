import FilterGroup from "../FilterGroup/FilterGroup";
import "./FilterBy.css";

export default function FilterBy() {
  const opt = { text: "Adidas", text2: "nike" };
  return (
    <>
      <div className="filter-body">
        <h2>Filtrar por</h2>
        <hr />
        <div className="filter-tittle">
          <FilterGroup tittle={"Marca"} options={opt}></FilterGroup>
        </div>
      </div>
    </>
  );
}
