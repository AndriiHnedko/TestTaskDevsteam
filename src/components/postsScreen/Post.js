import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native'

export default ({ post, navigation }) => {
    return (
    <View style={ styles.itemContainer }>
        <TouchableNativeFeedback
            style={ styles.iconPicture }
            onPress={() => navigation.navigate('Image', {
                    imageUrl: post.image,
                    width: post.width,
                    height: post.height,
                })}
        >
            <Image
                source={ {uri: post.iconImage} }
                style={ styles.iconPicture }
            />
        </TouchableNativeFeedback>
        <View style={ styles.textInfo }>
            <Text style={ styles.author }>{ post.authorName }</Text>
            <Text style={ styles.descriptionParagraph }>{ post.description }</Text>
        </View>
    </View>
)}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        height: 100,
    },
    iconPicture: {
        flex: 4,
    },
    textInfo: {
        flex: 8,
        marginLeft: 5,
        marginRight: 10
    },
    author: {
        flex: 1,
        fontSize: 30,
    },
    descriptionParagraph: {
        flex: 2,
        fontSize: 15,
    }
})


