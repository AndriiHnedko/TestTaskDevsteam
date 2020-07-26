import React from 'react'
import {View, Image} from 'react-native'
import {imageSize} from '../../utils'

export default ({ image, width, height }) => {

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
                source={{uri: image}}
                style={imageSize(height, width)}
            />
        </View>
    )
}

