import { combineReducers } from 'redux'

import {
  ADD_POST,
} from '../actions'

const initialPostsState = [
    {
        "id": "aaa0y6zwwwjabvozdd253nd",
        "timestamp": 1467166872624,
        "title": "My Initial Blog",
        "body": "Something interesting",
        "author": "Wonderwomen",
        "category": "tech",
        "voteScore": 6,
        "deleted": false,
        "commentCount": 2
    },
]

function categories (state = {}, action){
  switch (action.type){
    case "ADD_POST":
      console.log("in the categories reducer")
    default:
      return state
  }
}

function comments (state = {}, action){
  switch (action.type){
    case "ADD_COMMENT":
      console.log("in the comments reducer")
    default:
      return state
  }
}

function posts (state = initialPostsState, action ){

  console.log(action)
  const {id, timestamp, title, body, author, category, voteScore, deleted, commentCount} = action

  switch (action.type){
    case ADD_POST:
      let newPost = {id, timestamp, title, body, author, category, voteScore, deleted, commentCount}
      var newState = state.slice()
      newState.push(newPost);
      return newState;
    default:
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  comments,
})
