import React from 'react'
import {View, Image} from 'react-native'

export default ({ image, width, height }) => {
    const imageSize = () => {
        let proportions = Math.floor(height/width * 10) / 10
        if (proportions < 1) {
            let h = (1-proportions)*100
            return {width: `100%`, height: `${h}%`}
        } else {
            return {width: '100%', height: '100%'}
        }
    }
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
                source={{uri: image}}
                style={imageSize()}
            />
        </View>
    )
}

