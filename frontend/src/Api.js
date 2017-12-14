class Api {
  static token() {
    let token = localStorage.token

    if (!token)
      token = localStorage.token = Math.random().toString(36).substr(-8)

    return token;
  }

  static fetchPosts() {
    const headers = {
      'Accept': 'application/json',
      'Authorization': Api.token()
    }

    const url = "http://localhost:3001/posts"
    const options = {headers}
    return(fetch(url, options)
      .then(result => result.json())
    )
  }

  static upVote(postId) {
    const headers = {
      'Authorization': Api.token(),
      'Content-Type': 'application/json',
    }

    const url = `http://localhost:3001/posts/${postId}`
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify({ option: "upVote" })
    }

    return(fetch(url, options)
      .then(result => result.json())
    )
  }
}

export default Api;