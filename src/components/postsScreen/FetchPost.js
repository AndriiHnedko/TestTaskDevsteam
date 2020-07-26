import React from 'react'
import Post from './Post'
import {useSelector} from 'react-redux'
import Loader from '../Loader'


export default ({ navigation }) => {
    const posts = useSelector(state => state.posts.posts[0])
    if (posts) {
        return posts.map((post, index) => <Post post={post} key={index} navigation={navigation} />)
    } else {
        return (
            <Loader/>
        )
    }
}