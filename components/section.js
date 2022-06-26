import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from '@chakra-ui/react' 

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        // should forward prop determines whether the props should be passed down to wrapped component or not.
        // it does not determine whether it is Chakra prop.
        // default shouldForwardProp will return false if its chakra prop (obviously it should not be passed down then.)
        // and it return true if its NOT a chakra prop.
        // so we negate it to determine if the prop is a chakra prop or not.
        // don't forward Chakra's props
        // const isChakraProp = !shouldForwardProp(prop)
        // if (isChakraProp) return false

        return shouldForwardProp(prop) || prop === 'transition'
    }
    })


const Section = ({ children, delay = 0}) => (
    <StyledDiv
    initial= {{y:10, opacity:0}}
    animate={{y:0, opacity: 1}}
    transition={{duration: 0.6, delay}}
    mb={6}
    >
        {children}
    </StyledDiv>
)

export default Section