import Logo from './logo'
import NextLink from 'next/link'
import { useState, useEffect } from 'react'

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
// import ThemeToggleButton from './theme-toggle-button'
import ThemeToggleButton from './daynight-theme-btn'
import SvgUnderline from '../styles/svg_round_scribble_underline'


// ------------------------------------------

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bgColor={active ? 'teal.200' : undefined}
        borderRadius= {10}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

// ------------------------------------------


const LinkItemSvgHoverAnim = ({ href, path, children }) => {
  return (
    <NextLink href={href} passHref={true}>
      <Link
        p={3}
        pb={0}
        // bg={active ? 'glassTeal' : undefined}
        color={useColorModeValue('gray200', 'whiteAlpha.900')}
        className="round_scribble_underline"
        style={{ textDecoration: 'none' }}
        target="_blank"
      >
        {children}
        <SvgUnderline />
      </Link>
    </NextLink>
  )
}


// ------------------------------------------


const Navbar = props => {
  const { path } = props

  const [clientready, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true)
  }, [])

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          align="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>

          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>

          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>

          <Box pb={3}>
            <LinkItemSvgHoverAnim href="https://github.com/Himanshu-Singh-Chauhan/Portfolio-website">
              Source
            </LinkItemSvgHoverAnim>
          </Box>
        </Stack>

        <Box flex={1} align="right">
          {/* <ThemeToggleButton /> */}
          {clientready ? <ThemeToggleButton/> : null}
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                // variant = 'outline'
                aria-label="Options"
              />

              <MenuList>
                <NextLink href="/">
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/works">
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts">
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>

                <MenuItem
                  as={Link}
                  href="https://github.com/Himanshu-Singh-Chauhan/Portfolio-website"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
