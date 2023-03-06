import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import HelloWorld from "./Labs/A6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {

  return (

    <div className="App">
        <BrowserRouter>
        <div className="container">
                        <Routes>
                          <Route index
                                 element={<Labs/>}/>
                          <Route path="/hello"
                                 element={<HelloWorld/>}/>
                          <Route path="/tuiter"
                                 element={<Tuiter/>}/>
                        </Routes>
            </div>
             </BrowserRouter>
    </div>

  );

}

export default App;


/*
    <div className="App">
      <header className="App-header">
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
        <BrowserRouter>
        <div className="container">
                        <Routes>
                          <Route index
                                 element={<Labs/>}/>
                          <Route path="/hello"
                                 element={<HelloWorld/>}/>
                          <Route path="/tuiter"
                                 element={<Tuiter/>}/>
                        </Routes>
            </div>
             </BrowserRouter>
    </div>
    */