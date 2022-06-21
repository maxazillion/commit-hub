import {Card} from "react-bootstrap";


function GitHubCards({date, commit}){

  return(
  <Card style={{ width: '18rem', height: '25rem', padding: ".5em", margin: ".5em" }}>
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
