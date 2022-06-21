import logo from './logo.svg';
import './App.css';
import {Button, Card} from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Body, Footer, Header} from "./Components";


function App() {
  return (
    <div className={"app"}>
      <Header/>
      <Body/>
      <Footer/>
    </div>

  );
}

export default App;
