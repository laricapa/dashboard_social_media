import React from 'react'
import {
    Box, Heading, useColorModeValue
} from '@chakra-ui/react'
import OverviewMain from './main_overview'


function Overview(props){
    const textOverview = useColorModeValue('wtLetterText', 'dtWhiteText')
    return(
        <Box>
            <Heading
            color={textOverview}
            fontWeight="black"
            fontSize="xl"
            mb={5}
            >Overview - Today</Heading>
            <OverviewMain dataItems={props.dataItems}/>
        </Box>
    )
}

export default Overview