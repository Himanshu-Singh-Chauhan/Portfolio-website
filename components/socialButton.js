import { Box, Text, Link} from '@chakra-ui/react'
import Image from 'next/image'

const SocialButton = ({ imgscr, link, alt, children }) => {
  
  if (!alt) {
    alt = 'socialLink'
  }

  return (
    <Box className="bd-focus-item">
      <Link href={link} target='_blank'>
        <Image src={imgscr} alt={alt} placeholder="blur"></Image>
        {/* <Text className='title' fontFamily='Gilroy Extrabold' letterSpacing={2}>Instagram</Text> */}
      </Link>
    </Box>
  )
}

export default SocialButton
