import Head from 'next/head'
import { PostCard, PostWidget, Categories } from './components';
const posts =[
  { title: 'Daily News', excerpt:'Premier League Team of the Season so far' },
  { title: 'Transfer', excerpt:"Janaunary tranfer news"},
];

export default function Home () {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>GoalKickPodcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 text-white'>
          {posts.map((post) => <PostCard post={post} key={post.title}/>)}
      </div>
      <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
              </div>    
      </div>
    </div>
  )
}