import React from 'react'
import {
    Box,
    Text,
    useColorModeValue
} from '@chakra-ui/react'

import Switcher from './switcher'

function Header(props){
    const titleText = useColorModeValue('wtBlackText', 'dtWhiteText')
    const subTitleText = useColorModeValue('wtLetterText', 'dtLetterText')
    return(
        <Box
        as= 'div'
        w="full"
        h="130px"
        display="flex"
        flexDirection={{
            base: 'column',
            md: 'row'
        }}
        justifyContent={{
            base: 'center',
            md: 'space-between'
        }}
        mb={[5,0]}>
            <Box
            display="flex"
            flexFlow="column"
            justifyContent="center"
            borderBottom={{
                base: '1px solid',
                md: 0
            }}
            borderBottomColor={{
                base: subTitleText,
                md: 'none'
            }}
            mb={[5,0]}
            mt={[5,0]}
            >
                <Text
                fontWeight='black'
                fontSize="xl"
                color={titleText}
                mb={2}>Social Media Dashboard</Text>
                <Text
                color={subTitleText}
                fontSize="sm"
                fontWeight="bold"
                mb={[5,0]}>Total Followers: 23,004</Text>
            </Box>
            <Box 
            display="flex"
            flexFlow="row"
            justifyContent={{
                base: 'start',
                md: 'center'
            }}
            alignItems="center"
            >
                <Switcher />
            </Box>
        </Box>
    )
}


export default Header