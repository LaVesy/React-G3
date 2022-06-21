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
      title: 'Total of Products',
      color: 'primary',
      cuantity: products.count || "loading...",
      icon: 'fas fa-gift',
    }

    /* <!-- Total awards --> */

    let userCount = {
      title: 'Total of Users',
      color: 'success',
      cuantity: users.count || 3,
      icon: 'fas fa-user',
    }
    /* <!-- Actors quantity --> */

    let CategoryCount = {
      title: 'Total of Categories',
      color: 'warning',
      cuantity: products.countByCategory?.length || 2, //! agregar total de categorías products.countByCategory.length
      icon: 'fas fa-restroom',
    }

  let cartProps = [productCount, userCount, CategoryCount]

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
