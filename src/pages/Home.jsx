import React, { useContext } from "react"
import { FavoritesContext } from "../components/FavoritesContext"

const Home = () => {
    const products = [
        {
            id: 1,
            name: "Producto 1",
            description: "Descripción del producto 1",
            Img: '../img/img1.jpg',
        },
        {
            id: 2,
            name: "Producto 2",
            description: "Descripción del producto 2",
            Img: '../img/img2.jpg',
        },
        {
            id: 3,
            name: "Producto 3",
            description: "Descripción del producto 3",
            Img: '../img/img3.jpg',
        },
        {
            id: 4,
            name: "Producto 4",
            description: "Descripción del producto 3",
            Img: '../img/img4.jpg',
        },
        {
            id: 5,
            name: "Producto 5",
            description: "Descripción del producto 3",
            Img: '../img/img5.jpg',
        },
        {
            id: 6,
            name: "Producto 6",
            description: "Descripción del producto 3",
            Img: '../img/img6.jpg',
        },
        {
            id: 7,
            name: "Producto 7",
            description: "Descripción del producto 3",
            Img: '../img/img7.jpg',
        },
        {
            id: 8,
            name: "Producto 8",
            description: "Descripción del producto 3",
            Img: '../img/img8.jpg',
        },
        {
            id: 9,
            name: "Producto 9",
            description: "Descripción del producto 3",
            Img: '../img/img9.jpg',
        },
        // más productos...
    ];
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    return (


        <div className="container" style={{ marginTop: "4rem" }}>
            <h1 className="pt-5">
                <span className="fw-bold text-success">Natural PIc</span>
            </h1>
            <div className="row row-cols-3 g-4">

                {products.map((product) => (
                    <div key={product.id} className="card mb-3" style={{ maxWidth: "540px" }}>

                        <div className="card-body" style={{ border: 'none', position: 'relative' }}>
                            <button
                                className={`btn btn-${favorites.find((fav) => fav.id === product.id) ? "secondary" : "primary"} border-0`}
                                onClick={() =>
                                    favorites.find((fav) => fav.id === product.id)
                                        ? removeFavorite(product.id)
                                        : addFavorite(product)
                                }
                                style={{ position: 'absolute', top: '16%', left: '95%', transform: 'translate(-50%, -50%)', borderColor: 'transparent' }}
                            >   <div className="sinborde">
                                    {favorites.find((fav) => fav.id === product.id) ? <img src="./img/corazonrojo.jpg" className="TamCor" style={{ border: 'none' }} alt="Corazón rojo"></img> : <img src="./img/corazonsincolor.jpg" className="TamCor" style={{ border: 'none' }} alt="Corazón sin color"></img>}
                                </div>
                            </button>
                            <img src={product.Img} className="tamimg" alt="Producto"></img>
                        </div>
                    </div>


                ))}

            </div>
        </div>
    )
}
export default Home