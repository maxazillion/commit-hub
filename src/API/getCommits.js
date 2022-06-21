const axios = require("axios");


function getCommits(setLoading, setRepos){
  setLoading(true);
  axios({
    method: "get",
    url: "https://api.github.com/repos/maxazillion/commit-hub/commits",
  }).then(res=> {
    setLoading(false);
    setRepos(res.data)
  })
}


export default getCommits;
