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
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={6}
        textColor="white"
        textAlign="center"
      >
        Hello, I&apos;m final year CS student studying in Banglore!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" paddingTop={3} color="teal.500">
            Himanshu Chauhan
          </Heading>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Works
        </Heading>
        <Paragraph>
          {/* I'm a computer science student passionate about programming and design. pursuing my B.tech degree.
          <br/>
          <br/> */}
          Here's a list of works showcasing my skills.
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
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
