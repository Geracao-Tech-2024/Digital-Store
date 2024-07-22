/* eslint-disable react/no-unescaped-entities */
export default function FilterOrdenate() {
  return (
    <>
      <div className="container">
        <div className="resultado">
          <h4>
            Resultados para "Tenis" - <span>389 produtos</span>
          </h4>
        </div>

        <div className="ordenacao">
          <form action="#">
            <label htmlFor="teste">Ordenar por:</label>
            <select name="teste" id="teste">
              <option value="MaiorPreco">maior preço</option>
              <option value="MenorPreco">menor preço</option>
              <option value="relevantes">mais relevantes</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
}
