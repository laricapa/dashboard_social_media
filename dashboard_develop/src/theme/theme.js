import {
    extendTheme
} from '@chakra-ui/react'
import colors from './custom/colors'
import config from './custom/config'

const theme = extendTheme({
    colors,
    config,
    fonts: {
        body: 'Inter',
    }
})



export default theme