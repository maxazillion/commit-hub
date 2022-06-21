import {Button, Card} from "react-bootstrap";
import {colors} from "../Utils";
import {GitHubCards} from "./index";

function Body({commitData}){


  return (
    <div style={styles.main}>
      {commitData.map((data, key)=>{
        return <GitHubCards commit={data.commit} date={data.date} key={key}/>
      })}
    </div>
  )
}

export default Body;

const styles = {
  main: {
    color: colors.tertiary,
    borderColor: "black",
    height: "90%",
    display: "flex",
    flexDirection: "row"
  }
}
