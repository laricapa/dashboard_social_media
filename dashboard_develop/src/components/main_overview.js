import React from 'react'
import {
    SimpleGrid,
    Box,
    Flex,
    Image,
    Text,
    useColorModeValue
} from '@chakra-ui/react'

function OverviewMain(props){
    const bgCardColor = useColorModeValue('wtCardBg','dtCardBg')
    const oneTextCard = useColorModeValue('wtBlackText','dtWhiteText')
    const twoTextCard = useColorModeValue('wtLetterText','dtLetterText')
    const dataItems = props.dataItems;
    const dataItem = dataItems.map((sm, index)=>{
        return(
            <Box
            h="100px"
            key={index}
            bgColor={bgCardColor}
            p={5}
            >
                <Flex
                direction="row"
                justify="space-between"
                mb={4}
                >
                    <Text
                    color={twoTextCard}
                    fontSize="sm"
                    fontWeight="bold"
                    >{sm.action_sm}</Text>
                    <Image src={sm.logo_sm} alt="social media"/>
                </Flex>
                <Flex
                direction="row"
                justify="space-between">
                    <Text
                    color={oneTextCard}
                    fontSize="xl"
                    fontWeight="black"
                    >{sm.num_action}</Text>
                    <Flex
                    direction="row"
                    align="center">
                        <Image src={sm.icon} alt="social media" h="5px"mr={2}/>
                        <Text
                        color={sm.icon_color}
                        fontSize="12px"
                        fontWeight="bold"
                        >{sm.percent}</Text>
                    </Flex>
                </Flex>
            </Box>
        )
    })
    return(
        <SimpleGrid columns={[1,4]} spacing={[5,10]}>
            {dataItem}
        </SimpleGrid>
    )
}

export default OverviewMain;