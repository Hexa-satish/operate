import {useContext} from 'react';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../component/BlogPostForm';

const EditScreen = ({route, navigation}) => {
  // Access the id parameter from route.params
  const {state, editBlogPost} = useContext(Context);
  const id = route.params?.id;
  const blogPost = state.find(blogPost => blogPost?.id === id);
  return (
    <BlogPostForm
      initialValues={{title: blogPost?.title, content: blogPost?.content}}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;
