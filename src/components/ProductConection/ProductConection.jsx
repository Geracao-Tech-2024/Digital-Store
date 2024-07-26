// import "./banner.css"
import { Link } from "react-router-dom";
import "./productConection.css"



function ProductConection() {
    return (


        <div className="container-geral text-center">
            <div className="ProductConectionContainer">
                <div className="row d-flex justify-content-between">
                    <div className="  container-box">
                        <div className="content-text">
                            <div className="text-price">
                                <span>30% OFF</span>
                            </div>
                            <div className="text-title">
                                <h3>Novo drop Supreme</h3>
                            </div>
                            <div className="text-btn">
                                <Link to={'/Produto'}>
                                    <button>Comprar</button>
                                </Link>
                            </div>

                        </div>
                        <div className="img">

                        </div>
                    </div>
                    <div className=" container-box2">
                        <div className="content-text">
                            <div className="text-price">
                                <span>30% OFF</span>
                            </div>
                            <div className="text-title">
                                <h3>Coleção Adidas</h3>
                            </div>
                            <div className="text-btn">
                                <Link to={'/Produto'}>
                                    <button>Comprar</button>
                                </Link>
                            </div>

                        </div>
                        <div className="img2">

                        </div>
                    </div>
                    <div className=" container-box3">
                        <div className="content-text">
                            <div className="text-price">
                                <span>30% OFF</span>
                            </div>
                            <div className="text-title">
                                <h3>Novo Beats Bass</h3>
                            </div>
                            <div className="text-btn">
                                <Link to={'/Produto'}>
                                    <button>Comprar</button>
                                </Link>
                            </div>

                        </div>
                        <div className="img3">

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}
export default ProductConection;