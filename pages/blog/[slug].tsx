import type { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import type { Post as PostType } from '../../types'
import Head from 'next/head'
import React from 'react'
import blogQuery from '../../queries/blog.graphql'
import postQuery from '../../queries/post.graphql'
import graphql from '../../graphql'
import Markdown from '../../components/Markdown'
import { stringifyDate } from '../../util'

type Props = PostType

export default function Post({ title, publishedOn, children: content }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <article className="w-1/3 px-4 py-16 mx-auto text-white">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-black">{title}</h1>
          <span className="text-2xl text-gray-400">{stringifyDate(new Date(publishedOn))}</span>
        </div>

        <hr className="my-8 border-b-4 border-primary" />

        <Markdown>{content}</Markdown>
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const data = await graphql.request<{ post: PostType[] }>(postQuery, { slug: context.params!.slug })

  return {
    props: data.post[0],
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await graphql.request<{ posts: PostType[] }>(blogQuery)

  return {
    paths: data.posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}