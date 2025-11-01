import { client } from '@/sanity.client.js'

async function getPosts() {
  const query = `*[_type == "post"]{title, slug, body}`
  return await client.fetch(query)
}

export default async function Home() {
  const posts = await getPosts()

  console.log("POSTS " + posts[0].body)

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Pictureware</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug.current}>
            <h2 className="text-xl">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  )
} 