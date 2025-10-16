import ItemList from './items/ItemList';

function App() {
  return (
    <>
      <div className='heading'>
        <h1 className="header-title">BidSphere</h1>
        <nav>
          <ul>
            <li><a href="#home">TBD</a></li>
            <li><a href="#about">TBD</a></li>
            <li><a href="#contact">TBD</a></li>
          </ul>
        </nav>
      </div>
      <ItemList />
    </>
  )
}

export default App;
