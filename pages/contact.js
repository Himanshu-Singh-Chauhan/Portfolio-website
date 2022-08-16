import { Box, Link, Heading, HStack } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import SocialButton from '../components/socialButton'
import instagram from '../public/images/social/instagram.png'

import twitter from '../public/images/social/twitter.png'
import linkedin from '../public/images/social/linkedin.png'
const Contact = () => {
  return (
    <Box p={6}>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={6}
        textColor={useColorModeValue('blackAlpha.900', 'whiteAlpha.900')}
        textAlign="center"
      >
        <Heading
          as="h2"
          variant="page-title"
          color="teal.500"
          size="lg"
          fontFamily="Gilroy Light"
          letterSpacing={2}
        >
          him.speedo@gmail.com
          {/* a button to copy email to clipboard. */}
        </Heading>
      </Box>

      <SimpleGrid columns={[3, 3, 3]} gap={2} mt={6} maxWidth='300px'>
        <Section>
          <SocialButton
            imgscr={twitter}
            link="https://twitter.com/HimSpeedo"
          ></SocialButton>
        </Section>
        <Section>
          <SocialButton
            imgscr={linkedin}
            link="https://www.linkedin.com/in/himanshu-singh--chauhan"
          ></SocialButton>
        </Section>
        <Section>
          <SocialButton
            imgscr={instagram}
            link="https://www.instagram.com/him.speedo/"
          ></SocialButton>
        </Section>
      </SimpleGrid>

      <HStack align="center"></HStack>
    </Box>
  )
}

export default Contact
