import { RouterProvider } from 'react-router-dom';
import { router } from "./router";

function App() {

  return (
    <>
      <RouterProvider router={router}/>
      {/* <div className='heading'>
        <h1 className="header-title">BidSphere</h1>
        <a className='hamburger' onClick={toggleNav}>
          <i className="fa-solid fa-bars"></i>
        </a>
        <nav className={isNavOpen ? 'nav-open' : ''}>
          <ul>
            <li><a href="#home">TBD</a></li>
            <li><a href="#about">TBD</a></li>
            <li><a href="#contact">TBD</a></li>
          </ul>
        </nav>
      </div>
      <ItemList /> */}
    </>
  )
}

export default App;
