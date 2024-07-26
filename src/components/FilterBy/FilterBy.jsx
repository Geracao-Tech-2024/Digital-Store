import FilterGroup from "../FilterGroup/FilterGroup";
import "./FilterBy.css";

export default function FilterBy() {
  const opt1 = [
    { text: "Addidas" , value:"20"},
    { text: "Calenciaga" , value:"30"},
    { text: "K-Swiss" , value:"40"},
    { text: "Nike" , value:"50"},
    { text: "Puma" , value:"50"},
  ];
  const opt2 = [
    { text: "Esporte e Lazer" , value:"20"},
    { text: "Casual" , value:"30"},
    { text: "Utilitario" , value:"40"},
    { text: "Corrida" , value:"50"},
  ];
  const opt3 = [
    { text: "Masculino" , value:"20"},
    { text: "Feminino" , value:"30"},
    { text: "Unisex" , value:"40"},

  ];
  const opt4 = [
    { text: "Novo" , value:"20"},
    { text: "Usado" , value:"30"},
  ];
  return (
    <>
      <div className="filter-body">
        <h2>Filtrar por</h2>
        <hr />
        <div className="filter-tittle">
          <FilterGroup tittle={"Marca"} typeInp="checkbox" options={opt1}></FilterGroup>
          <FilterGroup tittle={"Categoria"} typeInp="checkbox" options={opt2}></FilterGroup>
          <FilterGroup tittle={"Genero"} typeInp="checkbox" options={opt3}></FilterGroup>
          <FilterGroup tittle={"Estado"} typeInp="radio" options={opt4}></FilterGroup>
        </div>
      </div>
    </>
  );
}
