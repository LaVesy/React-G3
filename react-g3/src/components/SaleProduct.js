import React from 'react';
import { useState, useEffect } from 'react'
/* SE PODRIA MANDAR PROPS DESDE CONTENTROWCENTER */
function SaleProduct(){
          const [products, setProducts] = useState([])
          const getProducts = () => {
            fetch('http://localhost:3020/api/products') 
              .then((response) => response.json())
              .then((products) => setProducts(products.data))
          }
          useEffect(() => {
            getProducts()
          }, [])
    

    let orderProducts = products.sort(function(a, b){
          return a.price - b.price
          });
    let sale = orderProducts[0]  
    console.log(sale)

    return (

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3 card-prodSelect" >
                    <h5 className="m-0 font-weight-bold text-blue-800">Producto mas barato: {sale?.name || "loading..."}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} src={sale?.pathImg || "loading..."} alt={sale?.productName || "loading..."}/>
                    </div>
                    <p>{sale?.description || "loading..."}</p>
                </div>
            </div>
        </div>
    )
}

export default SaleProduct;

/* Filtra por precio  */