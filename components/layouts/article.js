import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      //   style={{ position: 'relative' }}
    >
      <>
        {/* Following changes the title, title is show on the browser tab 
       - I decided not to do it, as then the tab will always
       have my name, and it will be easier to find in a lots of tabs.*/}

        {/* {title && (
          <Head>
            <title>{title} - Himanshu Chauhan</title>
          </Head>
        )} */}
        {children}

        {/* grid item style enable the rounded corners in 
        elements with class grid-item-thumbnail.
        it is emotion styled css, so to apply, we have to 
        use it like so. */}
        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
