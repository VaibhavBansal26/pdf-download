import React from 'react';
import './App.css';
import DownloadComp from './Components/downloadComp';
import { Route, Link,Routes} from 'react-router-dom'  
import About from './Components/about';
function App() {
  return (
    <div className="App">
      <h1>@react-pdf/renderer with Webpack Example</h1>
      <ul>  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to="/about">About</Link>  
        </li>  
        <li>  
          <Link to="/download">Download</Link>  
        </li>  
      </ul>
      <Routes>
      <Route path="/" />  
      <Route path="/about" element={<About/>} />  
      <Route path="/download" element={<DownloadComp/>} />
      </Routes>    
    </div>
  );
}

export default App;
