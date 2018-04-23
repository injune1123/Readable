import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';
const uuidv1 = require('uuid/v1');


class App extends Component {
  addPost = () => {
    this.props.addPost(
        uuidv1(),
        Date.now(),
        this.title.value,
        "body",
        "author",
        "category"
    )
  }
  render() {
          console.log("Props", this.props)

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
          <button onClick={this.addPost}>Submit</button>
        </div>
         <p>new title post: {this.props.posts && this.props.posts[this.props.posts.length - 1]["title"]}</p>

      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost : ( id,timestamp,title,body, author,category) => dispatch(addPost(id,timestamp,title,body, author,category))
  }
}

function mapStateToProps ( {categories, posts, comments}) {
  return {
    posts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
