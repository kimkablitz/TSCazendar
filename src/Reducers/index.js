import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form'
import PostReducer from './PostReducer'
import UserReducer from './UserReducer';
// import LoadingReducer from './LoadingReducer';
// import projectReducer from './projectReducer';
// import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  // form: formReducer,
  posts: PostReducer,
  // project: projectReducer,
  // firestore: firestoreReducer,
  user: UserReducer,
  // loading: LoadingReducer
});

export default rootReducer;