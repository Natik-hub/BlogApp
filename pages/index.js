import Head from 'next/head'

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
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          {posts.map((post, index) => (
            <div className='lg:col-span-8 col-span-1'>
              {post.title}
              {post.excerpt}
            </div>
          ))}
      </div>
      <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'></div>    
      </div>
    </div>
  )
}