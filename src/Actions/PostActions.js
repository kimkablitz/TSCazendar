import { database } from '../fbConfig';
export const FETCH_POSTS = 'fetch_posts';
export const POST_STATUS = 'post_status';
export const NEW_POST = 'new_post';
export const CREATE_PROJECT = 'create-project'
export const getPosts= () => dispatch=> {
  console.log('fetching')
    dispatch({
      type: POST_STATUS,
      payload: true
    });
    database.on('value', snapshot => {
      console.log('retrieved')
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
      dispatch({
        type: POST_STATUS,
        payload: false
      });
    }, () => {
      dispatch({
        type: POST_STATUS,
        payload: -1
      });
    });
}

export function savePost(post, uid) {
  return dispatch => database.push({ ...post, uid });
}

export function deletePost(id) {
  return dispatch => database.child(id).remove();
}

export function saveComment(comment, id, uid) {
  return dispatch => database.child(id).child('comments').push({ content: comment.content, uid })
}

export function deleteComment(postId, commentId) {
  return dispatch => database.child(postId).child('comments').child(commentId).remove();
}

export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async call to db //takes time //return a promise
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'ramesh',
      authorLastName: 'Lee',
      authorId: 123456,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project})
    }).catch((err)=> {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err})
    })
  }
}