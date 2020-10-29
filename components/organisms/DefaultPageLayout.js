import PropTypes from 'prop-types';
import Blog from '@components/atoms/Blog';
import Header from '@components/molecules/Header';
import CardStory from '@components/molecules/CardStory';
import styles from "@components/organisms/DefaultPageLayout.module.css";

DefaultPageLayout.propTypes = {
  variant: PropTypes.oneOf(['page', 'story']).isRequired,
  meta: PropTypes.object.isRequired,
  data: PropTypes.object,
}

export default function DefaultPageLayout({ variant, meta, data }) {
  return (
    <>
      <Header variant={variant} meta={meta} />
      <section className={styles.blog}>
        <Blog data={data} />
      </section>
      {variant === 'story' && (
        <section className={styles.suggestedStories}>
          <div className={styles.suggestedStories__inner}>
            <div className={styles.suggestedStories__inner__box}>
              <h1 className={styles.suggestedStories__title}>
                Continuer de lire ...
              </h1>
              <div className={styles.suggestedStories__cards}>
                {meta.suggestedStories.map((story) => (
                  <CardStory
                    key={story.id}
                    id={story.id}
                    title={story.title}
                    image={story.images[0].src}
                    author={story.name}
                    categories={story.tags}
                    date={story.date}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}