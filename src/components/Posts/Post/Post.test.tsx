import { render } from '@testing-library/react'
import Post from './Post'
import { IPost } from './Post.interface'

it('renders without crashing', () => {
  const mockPost: IPost = {
    id: 'afcawfu349814t3nkijd',
    postTitle: 'The first fake post',
    postBody:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum, dolorem placeat, enim hic dolore dicta eum possimus, mollitia ullam sunt labore voluptates totam. Expedita facere repellat ad placeat.',
    createdAt: Date.now(),
    topics: ['development', 'css'],
    createdBy: 'userId1',
  }

  render(<Post {...mockPost} />)
})