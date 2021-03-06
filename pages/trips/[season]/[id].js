import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { fr } from 'date-fns/locale'
import { getDate, getMonth, getYear } from 'date-fns'
import Layout from '@components/atoms/Layout'
import SplitBackgroundOverlay from '@components/atoms/SplitBackgroundOverlay'
import StoryHeader from '@components/molecules/StoryHeader'
import Blog from '@components/atoms/Blog'

const mockTrip = {
  id: '62c6689a-adc5-4a8a-bddc-93f69895ff8c',
  title: "Goulotte Zia et traversée d'arête !",
  location: 'Hier sur amby ',
  supervisors: ['Pierre', 'Maud'],
  activity: 'Escalade grande voie ',
  content: {
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Editor.js',
          level: 2,
        },
      },
      {
        type: 'paragraph',
        data: {
          text:
            'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
        },
      },
      {
        type: 'header',
        data: {
          text: 'Key features',
          level: 3,
        },
      },
      {
        type: 'list',
        data: {
          style: 'unordered',
          items: [
            'It is a block-styled editor',
            'It returns clean data output in JSON',
            'Designed to be extendable and pluggable with a simple API',
          ],
        },
      },
      {
        type: 'header',
        data: {
          text: 'What does it mean «block-styled editor»',
          level: 3,
        },
      },
      {
        type: 'paragraph',
        data: {
          text:
            "There are dozens of <a href='https://github.com/editor-js'>ready-to-use Blocks</a> and the <a href='https://editorjs.io/creating-a-block-tool'>simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.",
        },
      },
      {
        type: 'header',
        data: {
          text: 'What does it mean clean data output',
          level: 3,
        },
      },
      {
        type: 'paragraph',
        data: {
          text:
            'Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below',
        },
      },
    ],
    version: '2.19.0',
  },
}

Trip.propTypes = {
  story: PropTypes.object,
  suggestedStories: PropTypes.array,
}

export default function Trip() {
  const { isFallback: loading } = useRouter()

  if (loading) {
    console.log(
      '[router] this page is loading, its content will be generated statically',
    )
  }

  return (
    <Layout>
      <SplitBackgroundOverlay padding="96px 0 64px 0" topHalfHeight={100}>
        {loading ? (
          <StoryHeader loading={true} />
        ) : (
          <StoryHeader
            tag={mockTrip.activity}
            title={mockTrip.title}
            author={
              !!mockTrip.supervisors.length
                ? `Encadré par : ${mockTrip.supervisors.join(', ')}`
                : "Pas d'encadrants"
            }
            date={`${getDate(new Date())} ${fr.localize.month(
              getMonth(new Date()),
            )} ${getYear(new Date())}`}
          />
        )}
      </SplitBackgroundOverlay>

      {loading ? (
        <Blog loading={true} />
      ) : (
        <Blog data={mockTrip.content} style={{ marginTop: 64 }} />
      )}
    </Layout>
  )
}
