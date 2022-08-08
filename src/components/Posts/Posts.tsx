import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import Post from './Post/Post'
import PostForm from '../PostForm/PostForm'

import { VStack } from '@chakra-ui/react'

const Posts = () => {
  const posts = useSelector(selectAllPosts)

  return (
    <VStack alignItems="flex-start">
      <PostForm />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </VStack>
  )
}

export default Posts
