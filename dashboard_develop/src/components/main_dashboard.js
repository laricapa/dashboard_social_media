import React from 'react'
import {
    SimpleGrid,
    Box,
    Text,
    Image,
    Flex,
    Spacer,
    useColorModeValue
} from '@chakra-ui/react'

function DashboardMain(props){

    const bgcard = useColorModeValue('wtCardBg', 'dtCardBg')
    const oneTextCard = useColorModeValue('wtBlackText','dtWhiteText')
    const twoTextCard = useColorModeValue('wtLetterText','dtLetterText')
    const dataItems = props.dataItems;
    const dataItem = dataItems.map((sm, index) =>{
        return(
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems="center"
            borderTop="5px solid"
            borderTopColor={sm.color_sm}
            h={[200, 180]}
            bgColor={bgcard}
            mb={[2,10]}
            key={index}>
                <Flex direction="row" mb={1}>
                    <Image src={sm.img_sm} alt="Facebbok" mr={2}/>
                    <Spacer />
                    <Text
                    color={twoTextCard}
                    fontSize="sm"
                    fontWeight="semibold"
                    >{sm.user_sm}</Text>
                </Flex>
                <Text
                fontWeight="black"
                fontSize="4xl"
                color={oneTextCard}
                >
                    {sm.followers_sm}
                </Text>
                <Text
                letterSpacing={4}
                color={twoTextCard}
                mb={[2,2]}
                textTransform="uppercase"
                fontSize="11px">
                    {sm.name_item}
                </Text>
                <Flex
                direction="row"
                align="center"
                mb={[0,2]}>
                    <Image src={sm.icon} h="5px" mr={2}/>
                    <Text
                    fontSize="12px"
                    color={sm.color_icon}
                    fontWeight="bold"
                    >{sm.days_sm}</Text>
                </Flex>
        </Box>)
    })
    return (
        <>
            <SimpleGrid columns={[1,4]} spacing={[5,10]}>
                {dataItem}
            </SimpleGrid>
        </>
    )
}

export default DashboardMain