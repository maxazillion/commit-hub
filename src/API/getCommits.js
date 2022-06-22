const axios = require("axios");


function getCommits(setLoading, setRepos){
  setLoading(true);
  axios({
    method: "get",
    url: "https://api.github.com/repos/maxazillion/commit-hub/commits",
  }).then(res=> {
    setLoading(false);
    // reverse to get into chronological order
    setRepos(res.data.reverse())
  })
}


export default getCommits;
