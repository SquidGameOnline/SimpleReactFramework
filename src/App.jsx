import logo from './logo.svg';
import './App.scss';


function App() {
  return (
      <>
    <div className="App">


      <button className="button-basic">
        basic
      </button>

      <button className="button-report">
        report
      </button>

      <button className="button-submit">
        submit
      </button>


      <header className="App-header">







        <div className="myArticle">
          <p>myArticle</p>
        </div>

        <div className="myNotes">
          <p>myNotes</p>
        </div>


        <div className="danger">
          <p>look at you</p>
        </div>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Winner</a></li>
            <li><a href="">Partner</a></li>
            <li><a href="">About</a></li>
            {/*<li>2222</li>*/}
            {/*<li>333</li>*/}
            {/*<li>4444</li>*/}
          </ul>
        </nav>

        <h1>h1h1h1h1h1h1</h1>
        <h2>h2h2h2h2h2h2h</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      </>
  );

};

export default App;
