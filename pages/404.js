import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container mt={32}>
            <Heading as="h3" fontSize={32}>No outsider is allowed to enter forbidden grounds of Wandagore</Heading>
            <Text></Text>
            <Divider my={6}></Divider>
            <Text my={4}>kidding 😅</Text>
            <Heading as="h3" fontSize={20}>Not Found - 404</Heading>
            <Text>The page you are looking for was not found.</Text>
            <Divider my={6}></Divider>

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound
