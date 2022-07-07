import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import pie_menus_thumbnail from '../public/images/pie_menus_thumbnail.png'
import project2 from '../public/images/pie_menus_thumbnail.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {/* project 1 */}
          <Section>
            <WorkGridItem
              id="pie_menus"
              title="Pie Menus"
              thumbnail={pie_menus_thumbnail}
            >
              A Circular radial menu.
            </WorkGridItem>
          </Section>

          {/* project 2 */}
          <Section>
            <WorkGridItem id="project2" title="Project 2" thumbnail={project2}>
              description for project 2.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section>
          <Divider my={6} />
          <Heading as="h3" fontSize={20}>
            Other heading style
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}></SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
