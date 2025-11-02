require('dotenv').config()
const express = require('express')
const app = express()
const githubData = {
  "login": "Shashank-Bharti",
  "id": 171004517,
  "node_id": "U_kgDOCjFSZQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/171004517?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Shashank-Bharti",
  "html_url": "https://github.com/Shashank-Bharti",
  "followers_url": "https://api.github.com/users/Shashank-Bharti/followers",
  "following_url": "https://api.github.com/users/Shashank-Bharti/following{/other_user}",
  "gists_url": "https://api.github.com/users/Shashank-Bharti/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Shashank-Bharti/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Shashank-Bharti/subscriptions",
  "organizations_url": "https://api.github.com/users/Shashank-Bharti/orgs",
  "repos_url": "https://api.github.com/users/Shashank-Bharti/repos",
  "events_url": "https://api.github.com/users/Shashank-Bharti/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Shashank-Bharti/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Shashank Bharti",
  "company": "IIT Patna",
  "blog": "",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "Computer Science Student | Frontend Designer\r\n",
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 4,
  "following": 4,
  "created_at": "2024-05-28T05:41:12Z",
  "updated_at": "2025-10-30T12:41:53Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/github',(req,res)=>{
    res.send(`My Github Url : <a href=${process.env.GITHUB_URL} target='_blank' >Shashank-Bharti </a>`)
})
app.get('/api.github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port : http://localhost:${process.env.PORT}`)
})
