import './App.css';
import downloadComp from './Components/downloadComp';
import { Route, Link} from 'react-router-dom'  
import about from './Components/about';
function App() {
  return (
    <div className="App">
      <h1>React Router Example</h1>
      <ul>  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to="/about">About</Link>  
        </li>  
        <li>  
          <Link to="/contact">Download</Link>  
        </li>  
      </ul>    
      <Route path="/" component={App} />  
      <Route path="/about" component={about} />  
      <Route path="/contact" component={downloadComp} />  
    </div>
  );
}

export default App;
