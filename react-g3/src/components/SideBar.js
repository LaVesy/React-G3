import React from 'react'
import image from '../assets/images/logoPiolon.png'
import ContentWrapper from './ContentWrapper'
import Catalog from './Catalog'
import LastProduct from './LastProduct'
import ContactUs from './ContactUs'
import NotFound from './NotFound'
import { Link, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ContentRowCategories from './ContentRowCategories'

function SideBar() {
  let [products, setProducts] = useState([])
  let [users, setUsers] = useState([])

  let getUsers = async () => {
    await fetch('http://localhost:3020/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }
  useEffect(() => {
    getUsers()
  }, [])

  let getProducts = async () => {
    await fetch('http://localhost:3020/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav  sidebar sidebar-dark accordion  fondo-sidebar"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Sport Shoes" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Woof!</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/Catalog">
            <i className="fas fa-fw fa-folder"></i>
            <span>Catalogo</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/LastProduct">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Ultimo producto</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/ContactUs">
            <i className="fas fa-fw fa-table"></i>
            <span>Contactanos</span>
          </Link>
        </li>

        {/*<!-- Nav Item - ContentRowCategories  -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/ContentRowCategories">
            <i className="fas fa-fw fa-table"></i>
            <span>Categorias</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/Catalog">
          <Catalog products={products} />
        </Route>
        <Route path="/LastProduct">
          <LastProduct />
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
        <Route path="/ContentRowCategories">
          <ContentRowCategories products={products} users={users} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  )
}
export default SideBar
