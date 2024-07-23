/* eslint-disable react/no-unescaped-entities */
import "./FilterOrdenate.css";
export default function FilterOrdenate() {
  return (
    <>
      <div className="container">
        <div className="resultado">
          <h4>
            Resultados para "Tênis" - <span>389 produtos</span>
          </h4>
        </div>

        <div className="ordenacao">
          <form action="#">
            <label htmlFor="ordenate">Ordernar por:</label>
            <select id="ordenate">
              <option value="relevantes">mais relevantes</option>
              <option value="MaiorPreco">maior preço</option>
              <option value="MenorPreco">menor preço</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
}
