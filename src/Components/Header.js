import {Button, Card} from "react-bootstrap";
import {colors} from "../Utils";

function Header(){
  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Commit Hub</h1>
    </div>
  )
}

export default Header;

const styles = {
  main: {
    width: "100%",
    margin: "1em",
    padding: "1em",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 0,
  },
  title: {
    color: colors.tertiary
  }
}
