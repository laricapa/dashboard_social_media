import React from 'react'
import { 
    Switch,
    useColorMode,
    useColorModeValue,
    HStack,
    Text
 } from '@chakra-ui/react'


function Switcher(){
    const {colorMode, toggleColorMode} = useColorMode()
    const textToggle = useColorModeValue('wtLetterText','dtLetterText')
    return(
        <HStack spacing={[200,5]}>
            <Text
            color={textToggle}
            fontSize="sm"
            fontWeight="bold"
            >{colorMode == 'light' ? 'Dark Mode' : 'Light Mode'}</Text>
            <Switch onChange={toggleColorMode} colorScheme="bgToggle"/> 
        </HStack>
    )
}


export default Switcher