import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import { useColorModeValue } from '@chakra-ui/react'

import pie_menus_thumbnail from '../public/images/pie_menus_thumbnail.png'
import urlshortner from '../public/images/urlshortner.png'
import portfoliowebsitelight from '../public/images/portfoliowebsitelight.png'
import portfoliowebsitedark from '../public/images/portfoliowebsitedark.png'
import tempthumb from '../public/images/pie_menus_thumbnail.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          {/* project 1 */}
          <Section>
            <WorkGridItem
              id="url_shortner"
              title="URL Shortner"
              thumbnail={urlshortner}
              live="https://shortner-url.herokuapp.com/"
              livetext="Live"
              github="https://github.com/Himanshu-Singh-Chauhan/"
            >
              A URL shortener service creates a short url/aliases/tiny url
              against a long url. The tiny url, then redirects to the original
              url.
            </WorkGridItem>
          </Section>

          {/* project 2 */}
          <Section>
            <WorkGridItem
              id="portfolio"
              title="Portfolio Website"
              thumbnail={useColorModeValue(
                portfoliowebsitedark,
                portfoliowebsitelight
              )}
              live='/'
              livetext='you are looking on the live'
              github='https://github.com/Himanshu-Singh-Chauhan/Portfolio-website'
              openInSameTab={true}
            >
              Next JS + Chakra UI + Three JS
            </WorkGridItem>
          </Section>

          {/* Project 3 */}

          <Section>
            <WorkGridItem
              id="pie_menus"
              title="Pie Menus"
              thumbnail={pie_menus_thumbnail}
              live='https://github.com/himanshu-singh-chauhan/pie-menus/releases'
              livetext='Try out'
              github='https://github.com/himanshu-singh-chauhan/pie-menus'
            >
              A pie menu is a menu where the items are placed in a circle around
              the cursor, or around a fixed position. - Compared to traditional
              menus, a pie menu has a shorter seeking time and lower error rate.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        {/* <Section>
          <Divider my={6} />
          <Heading as="h3" fontSize={20}>
            Old Works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}></SimpleGrid> */}
      </Container>
    </Layout>
  )
}

export default Works
