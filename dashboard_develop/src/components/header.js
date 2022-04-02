import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react'

function Header(props){
    return(
        <Box
        as= 'div'
        w="full"
        h="150px"
        border="1px"
        display="flex"
        direction="inline-flex"
        justifyContent="space-between">
            <Box
            pt={8}>
                <Text
                fontWeight='700'
                fontSize="xl"
                mb={2}>Social Media Dashboard</Text>
                <Text
                color="gray.400"
                fontSize="sm">Total Followers: 23,004</Text>
            </Box>
        </Box>
    )
}


export default Header