import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, Link, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, thumbnail, title }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          loading="lazy"
        ></Image>

        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>

        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
  live,
  livetext,
  github,
  openInSameTab
}) => {

  let newTab = '_blank'; // by default, open in new tab.

  if (openInSameTab === true) {
    newTab = ''
  }

  return (
    <Box w="100%" align="center">
      {/* <NextLink href={live ? live : '/not-found'}> */}
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        ></Image>

        <LinkOverlay href={live} target={newTab}></LinkOverlay>

        <Text mt={2} fontSize={20}>
          {title}
          {live ? <Text display="inline"> - &nbsp;</Text> : null}
          {live ? (
            <NextLink href={live} passHref={true}>
              <Link target={newTab}>{livetext}</Link>
            </NextLink>
          ) : null}
          {github ? <Text display="inline">&nbsp; - &nbsp;</Text> : null}
          {github ? (
            <NextLink href={github} passHref={true}>
              <Link target={newTab}>Github</Link>
            </NextLink>
          ) : null}
        </Text>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
      {/* </NextLink> */}
    </Box>
  )
}

export const GridItemStyle = () => {
  return (
    <Global
      styles={`.grid-item-thumbnail {
            border-radius: 12px;
        }`}
    />
  )
}
