import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from './Blog.module.css'

const EditorRendererProvider = dynamic(() => import('react-editorjs-renderer'), { ssr: false });

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default function Blog({ data }) {
  return (
    <div className={styles.blog__inner}>
      <EditorRendererProvider
        style={{
          header: {
            disable: true,
          },
          paragraph: {
            disable: true,
          },
          list: {
            disable: true,
          },
          quote: {
            disable: true,
          },
        }}
        data={data}
      />
    </div>
  );
}