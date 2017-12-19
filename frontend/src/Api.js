import uuidv1 from 'uuid/v1';
import config from './config';

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

    const url = `${config.api_origin}/posts`
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

    const url = `${config.api_origin}/posts/${postId}`
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

    const url = `${config.api_origin}/posts/${postId}/comments`
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

    const url = `${config.api_origin}/posts/${postId}`
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

    const url = `${config.api_origin}/comments/${commentId}`
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify({ option: vote })
    }

    return(fetch(url, options)
      .then(result => result.json())
    )
  }

  static fetchCategories() {
    const headers = {
      'Accept': 'application/json',
      'Authorization': Api.token()
    }

    const url = `${config.api_origin}/categories`
    const options = {headers}
    return(fetch(url, options)
      .then(result => result.json())
    )
  }

  static createPost(post) {
    const headers = {
      'Authorization': Api.token(),
      'Content-Type': 'application/json',
    }

    const url = `${config.api_origin}/posts`
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify({
        ...post,
        id: uuidv1(),
        timestamp: Date.now(),
      })
    }

    return(fetch(url, options)
      .then(result => result.json())
    )
  }

  static deletePost(postId) {
    const headers = {
      'Authorization': Api.token(),
      'Content-Type': 'application/json',
    }

    const url = `${config.api_origin}/posts/${postId}`
    const options = {
      headers,
      method: "DELETE",
    }

    return(fetch(url, options)
      .then(result => result.json())
    )
  }


  static deleteComment(commentId) {
    const headers = {
      'Authorization': Api.token(),
      'Content-Type': 'application/json',
    }

    const url = `${config.api_origin}/comments/${commentId}`
    const options = {
      headers,
      method: "DELETE",
    }

    return(fetch(url, options)
      .then(result => result.json())
    )
  }

  static createComment(comment) {
    const headers = {
      'Authorization': Api.token(),
      'Content-Type': 'application/json',
    }

    const url = `${config.api_origin}/comments`
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify({
        ...comment,
        id: uuidv1(),
        timestamp: Date.now(),
      })
    }

    return(fetch(url, options)
      .then(result => result.json())
    )
  }

  static updateComment(comment, commentId) {
    const headers = {
      'Authorization': Api.token(),
      'Content-Type': 'application/json',
    }

    const url = `${config.api_origin}/comments/${commentId}`
    const options = {
      headers,
      method: "PUT",
      body: JSON.stringify({
        ...comment,
        timestamp: Date.now(),
      })
    }

    return(fetch(url, options)
      .then(result => result.json())
    )
  }

  static updatePost(post, postId) {
    const headers = {
      'Authorization': Api.token(),
      'Content-Type': 'application/json',
    }

    const url = `${config.api_origin}/posts/${postId}`
    const options = {
      headers,
      method: "PUT",
      body: JSON.stringify({
        ...post,
        timestamp: Date.now(),
      })
    }

    return(fetch(url, options)
      .then(result => result.json())
    )
  }
}

export default Api;