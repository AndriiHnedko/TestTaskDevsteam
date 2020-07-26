import React from 'react'
import {useSelector} from 'react-redux'
import Loader from '../Loader'
import ImageFull from './ImageFull'

export default () => {
    const posts = useSelector(state => state.posts.posts[0])
    if (posts) {
        return posts.map((post, index) => <ImageFull image={post.image} key={index}/>)
    } else {
        return (
            <Loader/>
        )
    }
}