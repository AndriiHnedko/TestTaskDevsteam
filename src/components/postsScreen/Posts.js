import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import FetchPost from './FetchPost'


const Posts = ({ navigation }) => (
    <ScrollView>
    <View style={styles.container}>
        <FetchPost navigation={navigation} />
    </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Posts