import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (

    <Container>
      
      <Box
        borderRadius="lg"
        bg="red"
        p={6}
        textColor="white"
        textAlign="center"
      >
        Hello, I&apos;m 4th year CS student studing in Banglore!
      </Box>


      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" paddingTop={3} color="teal.500">
            Himanshu Chauhan
          </Heading>
        </Box>
      </Box>

    </Container>

  )
}

export default Page
