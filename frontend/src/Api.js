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

  static fetchPost(postId) {
    const headers = {
      'Accept': 'application/json',
      'Authorization': Api.token()
    }

    const url = `http://localhost:3001/posts/${postId}`
    const options = {headers}
    return(fetch(url, options)
      .then(result => result.json())
    )
  }

  static fetchComments(postId) {
    const headers = {
      'Accept': 'application/json',
      'Authorization': Api.token()
    }

    const url = `http://localhost:3001/posts/${postId}/comments`
    const options = {headers}
    return(fetch(url, options)
      .then(result => result.json())
    )
  }

  static postVote(postId, vote) {
    const headers = {
      'Authorization': Api.token(),
      'Content-Type': 'application/json',
    }

    const url = `http://localhost:3001/posts/${postId}`
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify({ option: vote })
    }

    return(fetch(url, options)
      .then(result => result.json())
    )
  }

  static commentVote(commentId, vote) {
    const headers = {
      'Authorization': Api.token(),
      'Content-Type': 'application/json',
    }

    const url = `http://localhost:3001/comments/${commentId}`
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify({ option: vote })
    }

    return(fetch(url, options)
      .then(result => result.json())
    )
  }
}

export default Api;