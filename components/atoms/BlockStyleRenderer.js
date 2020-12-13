import PropTypes from 'prop-types'
import EditorRendererProvider from 'react-editorjs-renderer'
import Skeleton from 'react-loading-skeleton'
import styles from './BlockStyleRenderer.module.css'

BlockStyleRenderer.propTypes = {
  data: PropTypes.object,
  ornate: PropTypes.bool,
  loading: PropTypes.bool,
}

export default function BlockStyleRenderer({
  data,
  ornate = true,
  loading,
  ...props
}) {
  return (
    <section className={styles.blog} {...props}>
      <div className={styles.blog__inner} aria-selected={ornate}>
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
              table: {
                disable: true,
              },
            }}
            data={data}
            aria-selected="true"
          />
        )}
      </div>
    </section>
  )
}
