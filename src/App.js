import logo from './logo.svg';
import './App.css';
import {Button, Card} from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Body, Footer, Header} from "./Components";
import {colors, testData} from "./Utils";


function App() {
  return (
    <div className={"app"} style={styles.main}>
      <Header/>
      <Body commitData={testData}/>
      <Footer/>
    </div>

  );
}

export default App;

const styles = {
  main: {
    height: "100vh",
    width: "100vw",
    backgroundColor: colors.primary,
    display: "flex",
    flexDirection: "column"
  }
}
