import React from 'react'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light p-0">
    <div className="container-fluid">
      <div className="ssk-logo ">
        <a className="navbar-brands pl-4" href="/">
          <img src="./assets/images/image_footer_logo.webp" className="main-logo" alt="S S K"
            style={{maxWidth:"124px", margin: "0px 20px"}}></img>
        </a>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
        <span className="navbar-toggler-icon"></span>
         <img src="./assets/images/bars.svg" alt=""></img>
      </button>

      <div className="d-none d-lg-flex">
        <input className="form-control  bg-light" type="search" placeholder=" Search" id="head-search" aria-label="Search"></input>
        <div className="search-icons d-none d-lg-flex">
          <img src="./assets/images/search.svg" className="pt-1" alt=""></img>
        </div>
      </div>

      <div className="collapse navbar-collapse " id="navbar">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/" id="home-activ">HOME</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" aria-current="page" href="./auction">AUCTION</a>

        </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="./contact">CONTACT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="./help">HELP</a>
          </li>


          <li className="nav-item d-block d-lg-none">
            <a className="nav-link" aria-current="page" href="./signup.html">REGISTER</a>
          </li>
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link" aria-current="page" href="./login.html">LOGIN</a>
          </li>




        </ul>
      </div>
      <div className="header-buttons d-flex justify-content-end w-100">
        <a className="btn-header-controls" href="">Switch To Selling</a>
        <a className="btn-header-upgrade" href="">Upgrade</a>

      </div>



       <div className="user-img pr-5">
          <a href="./login.html">
  <img 
    src="./assets/images/users.webp" 
    style={{ 
      maxWidth: "46px", 
      border: "2px solid #f15d4c", 
      borderRadius: "50%" 
    }}
    alt=""
  />
</a>

         </div>


    </div>
    <nav className="navbar navbar-expand-sm pr-4">
      <div className="collapse navbar-collapse" id="navbar-list-4">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="./assets/images/users.webp" width="40" height="40" className="rounded-circle"></img>
            </a>
            <div className="dropdown-menu" style={{left: "-64px"}} aria-labelledby="navbarDropdownMenuLink">

              <div className="subscription-icons">

                <a className="dropdown-item" href="./login.html">Login</a>
              </div>

              <div className="subscription-icons">

                <a className="dropdown-item" href="./signup.html">Sign Up</a>
              </div>
              <div className="subscription-icons">

                <a className="dropdown-item" href="./admin-page.html">Dashbord</a>
              </div>
            </div>

          </li>

        </ul>
      </div>
    </nav>
  </nav>
    </>
  )
}

export default Header