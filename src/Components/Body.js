import {Button, Card, Carousel} from "react-bootstrap";
import {colors} from "../Utils";
import {GitHubCards} from "./index";
import {useState} from "react";
import {map, tail, times, uniq} from 'lodash';


function Body({commitData}) {

  // if the length of data is less than 5, display them in a row

  const [totalData] = useState(commitData.length - 1);
  const [center, setCenter] = useState(2);
  const [displayedIndexes] = useState(commitData.map((d, i)=> i))

  function renderCarousel(){

    return displayedIndexes.map((index) => {

      let size = Math.abs(center - index);

      let render = false;
      if(Math.abs(index - center) < 3) render = true;
      if(render) {
        return <GitHubCards
          cardSize={size}
          index={index}
          date={commitData[index].date}
          commit={commitData[index].commit}
          setDisplayed={setCenter}
          totalData={totalData}
        />
      }
    })
  }


  return (
    <div style={styles.main}>
      {totalData < 5 ?
        commitData.map((data, key) => {
          return <GitHubCards cardSize={2} key={key} date={data.date} commit={data.commit}/>
        })
        :
        renderCarousel()
      }
    </div>
  )
}

export default Body;

const styles = {
  main: {
    color: colors.tertiary,
    backgroundColor: colors.tertiary,
    height: "90%",
    width: "90%",
    alignSelf: "center",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"

  },
  carousel: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "center",
    backgroundColor: colors.tertiary,
  },
  caption: {
    color: colors.primary
  },
  item: {

    color: colors.primary,
    backgroundColor: "blue"
  },
}
