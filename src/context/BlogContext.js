import CreateDataContext from './CreateDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'remove_post':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_post':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};
const adBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({type: 'add_post', payload: {title, content}});
    if (callback){
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({type: 'remove_post', payload: id});
  };
};

const editBlogPost = dispatch => {
  return (id , title, content,callback) => {
    dispatch({type: 'edit_post', 
    payload: { id, title, content}});
    if (callback){
      callback();
    }    
  };
};

export const {Context, Provider} = CreateDataContext(
  blogReducer,
  {adBlogPost, deleteBlogPost, editBlogPost},
  [{title: 'TEST POST', content: 'TEST CONTENT', id: 1}],
);
