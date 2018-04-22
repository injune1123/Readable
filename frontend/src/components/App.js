import React, { Component } from 'react';
import { addPost } from '../actions'

class App extends Component {
  state = {
    posts: null
  }
  componentDidMount () {
    const { store } = this.props

    store.subscribe(()=> {
      this.setState(()=> ({
        posts: store.getState()
      }))
    })
  }
  submitPost = () => {
    this.props.store.dispatch(addPost(
      "id",
      "timestamp",
      this.title.value,
      "body",
      "author",
      "category"
    ))
    this.title.value=""
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to Readable</h1>
        <div className="form add-post">
          <h2>Create New Post</h2>
          <input
            type="text"
            ref={(title) => this.title = title}
            placeholder="New Post Title"
          />
          <button onClick={this.submitPost}>Submit</button>
        </div>
         <p>new title post: {this.state.posts && this.state.posts[this.state.posts.length - 1]["title"]}</p>
      </div>
    );
  }
}

export default App;
