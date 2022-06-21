import React from 'react'

import { useState, useEffect, useRef } from 'react'

function SearchProducts() {
  const [products, setproducts] = useState([])
  let keyword = useRef()

  useEffect(() => {
    fetch('http://localhost:3020/api/products/')
      .then((res) => res.json())
      .then((res) => {
      })
  })

  function sumbitForm(e) {
    e.preventDefault()
    console.log(keyword.current.value)

    fetch(
      'http://localhost:3020/api/products/search?keyword=' +
        keyword.current.value,
    )
      .then((res) => res.json())
      .then((res) => {
        setproducts(res.data)
      })
  }

  return (
    <div className="container-fluid">
      {
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <form method="GET" onSubmit={sumbitForm}>
                <div className="form-group">
                  <label htmlFor="">Find for name:</label>
                  <input
                    type="text"
                    className="form-control"
                    ref={keyword}
                    placeholder="Adidas"
                  />
                </div>
                <button className="btn btn-info">Search</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Results:</h2>
            </div>
            {/* Listado de películas */}
            {Array.isArray(products) &&
              products.map((movie, i) => {
                console.log(movie.pathImg)
                return (
                  <div className="col-sm-12 col-md-6 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {movie.productName}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={movie.pathImg}
                            alt={movie.productName}
                            style={{
                              width: '90%',
                              height: '400px',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                        <p>${movie.price}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
          {Array.isArray(products) && products.length === 0 && (
            <div className="alert alert-warning text-center">
              No results found
            </div>
          )}
        </>
      }
    </div>
  )
}

export default SearchProducts
