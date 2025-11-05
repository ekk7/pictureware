import { client } from '@/sanity.client.js'
import GalleryWrapper from './components/Gallery/GalleryWrapper'

async function getPosts() {
  const query = `*[_type == "post"]{title, slug, body}`
  return await client.fetch(query)
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <main className="wrapper">
      <GalleryWrapper query={'*[_type == "gallery"][0]'} />

      {/* <ul>
        {posts.map(post => (
          <li key={post.slug.current}>
            <h2 className="text-xl">{post.title}</h2>
            <p>{post.body}</p>

          </li>
        ))}
      </ul> */}
    </main>
  )
} 