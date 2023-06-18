import React, { useContext } from 'react';
import { FavoritesContext } from '../components/FavoritesContext';
const Favorites = () => {
    const { favorites } = useContext(FavoritesContext);
    return (
        <div className="container" style={{ marginTop: "4rem" }}>
             <h1 className="pt-5">
                <span className="fw-bold text-success">Fotos Favoritas</span>
                
            </h1>
            <div className="row row-cols-3 g-4">
                {favorites.map((product) => (

                    <div className="card-body" >
                        <div key={product.id}>
                            <img src={product.Img} className="tamimg" alt={product.name} />
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
export default Favorites