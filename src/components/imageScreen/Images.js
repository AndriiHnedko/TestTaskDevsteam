import React from 'react'
import {ScrollView, View} from 'react-native'
import FetchImage from './FetchImage'
import ImageFull from "./ImageFull";


const Images = ({ route }) => {
    const image = route.params['imageUrl']
    const width = route.params['width']
    const height = route.params['height']
    return <ImageFull image={image} width={width} height={height} />
}

export default Images