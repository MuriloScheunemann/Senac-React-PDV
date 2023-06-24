// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* NAV-BAR CABEÇALHO */}
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="../public/icone.png"
              alt="Logo"
              width="100"
              height="90"
              className="ms-2"
            />
            <span className="ms-5 fs-2 fw-semibold fst-italic text-white">
              Ponto de Vendas (PDV)
            </span>
          </a>
        </div>
      </nav>

      {/* ****** TUDO ******* */}
      <div className="row">
        {/* FORMULARIOS --> col-md-5*/}
        <div className="col-md-5 m-5 border border-2 border-primary-subtle p-5 rounded">
          <form>
            <div className="mb-3 me-5">
              <label htmlForfor="codProduto" className="form-label fw-bold">Código do Produto:</label>
              <input type="text" className="form-control" id="codigo" />
              <div id="codigo" className="form-text">Ex: MI771</div>
            </div>
            <div className="row row-cols-lg-auto g-3 align-items-center">
              <div className="mb-3 me-2">
                <label htmlForfor="quantidade" className="form-label fw-bold">Quantidade:</label>
                <input type="number" className="form-control" id="quant" />
              </div>
              <div className="mb-3 me-2">
                <label htmlForfor="valorUn" className="form-label fw-bold">Valor unitário:</label>
                <input type="number" className="form-control" id="valorUn" />
              </div>
              <div className="mb-3 me-2">
                <label htmlForfor="valorTot" className="form-label fw-bold">Valor total:</label>
                <input className="form-control" id="valorTot" />
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mt-5">
              <button type="submit" className="btn btn-primary btn-lg ps-5 pe-5">Incluir</button>
            </div>
          </form>
        </div>

        {/* LISTA E BOTOES --> col-md-6 + 2x row*/}
        <div className="col-md-6 mt-5">
          {/* TABELA*/}
          <div className="row ">
            <div className=" border border-2 border-primary-subtle rounded py-4">

              <table className="table p-2">
                <thead>
                  <tr>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Código</th>
                    <th scope="col">Produto</th>
                    <th scope="col">Valor Unitário</th>
                    <th scope="col">Valor Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>xxx</td>
                    <td>xxx</td>
                    <td>xxx</td>
                    <td>xxx</td>
                    <td>xxx</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="border border-2 border-primary-subtle rounded mb-5 mt-3 pt-2 ps-2">
            <p className="fs-2 p-1 fw-light">Subtotal: <span>R$</span></p>
          </div>

          {/* BOTOES */}
          <div className="row">
            <div className="col-sm-12 offset-md-6">
              <button className="btn btn-danger btn-lg px-5" type="submit">Cancelar</button>
              <button className="btn btn-success btn-lg ms-4 px-5" type="submit">Finalizar</button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
