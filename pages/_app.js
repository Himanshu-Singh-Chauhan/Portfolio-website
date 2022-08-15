import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../components/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'

// My custom styles
// for some reason we have to imprort css files in this file only.
import '../styles/round_scribble_underline.scss'
import '../styles/daynight_themebtn.scss' 

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website