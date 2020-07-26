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
    let proportions = Math.floor(height/width * 10) / 10
    if (proportions < 1) {
        let h = (1-proportions)*100
        return {width: `100%`, height: `${h}%`}
    } else {
        return {width: '100%', height: '100%'}
    }
}