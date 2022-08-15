import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={6}
          textColor={useColorModeValue('blackAlpha.900', 'whiteAlpha.900')}
          textAlign="center"
        >
          Add social media links here.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading
              as="h2"
              variant="page-title"
              paddingTop={3}
              color="teal.500"
              letterSpacing={1}
            >
              Himanshu Chauhan
            </Heading>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            {/* I'm a computer science student passionate about programming and design. pursuing my B.tech degree.
          <br/>
          <br/> */}
            Hello, I am Himansu, a guy who loves programming, designing, and 3D. Final year CS student studying in Banglore!
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Works
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <BioSection>
            <BioYear>2019 - 2023</BioYear>
            B.Tech (CSE) - Ramaiah University - <BioYear>8.05 CGPA</BioYear>

          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear> 12th Standard - 76% (CBSE)
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear> 10th Standard - 8.6 CGPA (CBSE)
          </BioSection>
        </Section>
      </Container>
      
    </Layout>
  )
}

export default Page
