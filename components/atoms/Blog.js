import React from "react";
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from './Blog.module.css'
import UploadImageInput from "@components/organisms/UploadImageInput";

const EditorRendererProvider = dynamic(() => import('react-editorjs-renderer'), { ssr: false });

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default function Blog({ data, ...props }) {
  return (
    <section className={styles.blog} {...props}>
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
    </section>
  );
}
