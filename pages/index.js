import Layout from "@components/atoms/Layout";
import LandingInfo from "@components/organisms/LandingInfo";

import mockStories from '../mockStories'

export default function Home() {
  return (
    <Layout>
      <LandingInfo highlightedStories={mockStories} />
    </Layout>
  )
}
