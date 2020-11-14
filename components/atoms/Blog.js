import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './Blog.module.css'

const EditorRendererProvider = dynamic(
  () => import('react-editorjs-renderer'),
  { ssr: false },
)

Blog.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
}

export default function Blog({ data, loading, ...props }) {
  return (
    <section className={styles.blog} {...props}>
      <div className={styles.blog__inner}>
        {loading ? (
          <div>
            <div style={{ marginBottom: '25px' }}>
              <Skeleton count={5} />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <Skeleton count={10} />
            </div>
            <div>
              <Skeleton count={3} />
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  )
}
