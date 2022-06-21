import {Card} from "react-bootstrap";


function GitHubCards({date, commit, cardSize, setDisplayed, index}) {

  function onClickHandler(){
    setDisplayed(index)
  }

  return (
    <Card style={styles.main[cardSize]} onClick={onClickHandler}>
      <Card.Body>
        <Card.Title>{`Date: ${date}`}</Card.Title>
        <Card.Text>
          {commit}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default GitHubCards;

const styles = {
  main: {
    0: {
      width: '20rem',
      height: '30rem',
      padding: ".5em",
      margin: ".5em"
    },
    1: {
      width: '15rem',
      height: '20rem',
      padding: ".5em",
      margin: ".5em"
    },
    2: {
      width: '10rem',
      height: '15rem',
      padding: ".5em",
      margin: ".5em"
    }
  }
}
