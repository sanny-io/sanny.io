import type { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import type { Post } from '../../types'
import React from 'react'
import blogQuery from '../../queries/blog.graphql'
import graphql from '../../graphql'

type Props = {
  children: Post[],
}

export default function Blog({ children: posts }: Props) {
  return (
    <div className="">

    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const data = await graphql.request<{ posts: Post[] }>(blogQuery)

  return {
    props: {
      children: data.posts,
    }
  }
}