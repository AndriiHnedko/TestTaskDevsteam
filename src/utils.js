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