  import React from 'react'
  import SmallCard from './SmallCard'
  import { useEffect, useState } from 'react'

  function ContentRowCategories() {
    //! ingresar por props products y users
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])

    const getUsers = () => {
      fetch('http://localhost:3020/api/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
    }
    useEffect(() => {
      getUsers()
    }, [])

    const getProducts = () => {
       fetch('http://localhost:3020/api/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }
    useEffect(() => {
      getProducts()
    }, [])

    let productCount = {
      title: 'Total de productos',
      color: 'primary',
      cuantity: products.count || "loading...",
      icon: 'fas fa-gift',
    }

    /* <!-- Total awards --> */

    let userCount = {
      title: 'Total de usuarios',
      color: 'success',
      cuantity: users.count || 3,
      icon: 'fas fa-user',
    }
    /* <!-- Actors quantity --> */

    

  let cartProps = [productCount, userCount]

  console.log(/* prods.countByCategory.length */)

  return (
    <div className="row">
      {cartProps.map((carts, i) => {
        return <SmallCard {...carts} key={i} />
      })}
    </div>
  )
}

export default ContentRowCategories
