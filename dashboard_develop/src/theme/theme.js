import {
    extendTheme
} from '@chakra-ui/react'
import colors from './custom/colors'
import config from './custom/config'
import DashboardMain from '../components/main_dashboard'

const theme = extendTheme({
    components: {
        DashboardMain
    },
    colors,
    config,
    fonts: {
        body: 'Inter',
    }
})



export default theme