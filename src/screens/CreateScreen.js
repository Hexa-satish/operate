import {useContext} from 'react';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../component/BlogPostForm';

const CreateScreen = ({navigation}) => {
  const {adBlogPost} = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        adBlogPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

export default CreateScreen;
