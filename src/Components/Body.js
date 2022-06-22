import {Button, Card, Carousel} from "react-bootstrap";
import {colors} from "../Utils";
import {GitHubCards} from "./index";
import {useState} from "react";


function Body({commitData}) {

  // if the length of data is less than 5, display them in a row
  const [totalData] = useState(commitData.length - 1);
  const [center, setCenter] = useState(1);
  const [displayedIndexes] = useState(commitData.map((d, i) => i))

  function renderCarousel() {

    return displayedIndexes.map((index) => {
      let size = Math.abs(center - index);

      let render = false;
      if (Math.abs(index - center) < 2) render = true;
      if (render) {
        let date = new Date(commitData[index].commit.committer.date)
        return <GitHubCards
          cardSize={size}
          index={index}
          date={date.toLocaleString()}
          commit={commitData[index].commit.message}
          setDisplayed={setCenter}
          totalData={totalData}
        />
      }
    })
  }


  return (
    <div style={styles.main}>
      <div style={styles.carouselContainer}>
        {totalData < 5 ?
          commitData.map((data, key) => {
            return <GitHubCards cardSize={2} key={key} date={data.date} commit={data.commit}/>
          })
          :
          renderCarousel()
        }
      </div>
      <div style={styles.counterDiv}>
        <h2 style={{color: colors.primary}}>{`${center + 1}/${totalData + 1}`}</h2>
      </div>
    </div>
  )
}

export default Body;

const styles = {
  carouselContainer: {
    color: colors.tertiary,
    backgroundColor: colors.tertiary,
    height: "90%",
    width: "100%",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  counterDiv: {
    backgroundColor: colors.tertiary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  main: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column"
  }

}
