import React from 'react'
import {MdLightMode} from 'react-icons/md'
import { Switch } from '@chakra-ui/react'
import {
    Icon
} from '@chakra-ui/react'


function Switcher(){
    return(
        <Switch onChange={()=>{alert('hola mundo')}} />
    )
}

export default Switcher