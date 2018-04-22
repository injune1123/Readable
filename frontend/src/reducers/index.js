import {
  ADD_POST,
} from '../actions'

const initialPostsState = [
    {
        "id": "aaa0y6zwwwjabvozdd253nd",
        "timestamp": 1467166872624,
        "title": "My Blog",
        "body": "Something interesting",
        "author": "Wonderwomen",
        "category": "tech",
        "voteScore": 6,
        "deleted": false,
        "commentCount": 2
    },
]

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

export default posts