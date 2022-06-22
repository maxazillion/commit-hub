import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Body, Footer, Header} from "./Components";
import {colors} from "./Utils";
import {useState} from "react";
import getCommits from "./API/getCommits";


function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  if(repos.length === 0 && loading === false)getCommits(setLoading, setRepos);

  console.log(repos)

  return (
    <div className={"app"} style={styles.main}>
      <Header/>
      {repos.length !== 0 ? <Body commitData={repos}/> : null}

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
