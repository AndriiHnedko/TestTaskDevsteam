import { Dimensions } from 'react-native'

export const sortRequestData = data => {
    let result = []
    data.forEach(item => {
        result.push({
            authorName: item['user'].name,
            description: item.description ? item.description : 'Description is missing.',
            image: item['urls'].regular,
            iconImage: item['urls'].thumb,
            width: item.width,
            height: item.height,
        })
    })
    return result
}

export const imageSize = (height, width) => {
    const windowWidth = Dimensions.get('window').width
    const correlationSize = width/windowWidth
    const adaptiveHeight = Math.floor(height/correlationSize)
    return {width: `100%`, height: adaptiveHeight}
}