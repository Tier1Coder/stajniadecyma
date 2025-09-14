import Image from 'next/image'
import { NEWS } from '../news'

export async function generateStaticParams() {
  return NEWS.map(n => ({ id: String(n.id) }))
}

export async function generateMetadata({ params }) {
  const id = Number(params.id)
  const post = NEWS.find(p => p.id === id)
  if (!post) return { title: 'Aktualność | Stajnia Decyma' }
  const desc = post.desc.replace(/<[^>]+>/g, '').slice(0, 160)
  return {
    title: `${post.title} | Stajnia Decyma`,
    description: desc,
    openGraph: {
      title: post.title,
      description: desc,
      images: [{ url: `https://stajniadecyma.pl${post.image}` }],
    },
  }
}

export default function NewsPostPage({ params }) {
  const id = Number(params.id)
  const post = NEWS.find(p => p.id === id)

  if (!post) {
    return (
      <div className="page-bg">
        <div className="wrap">
          <h1>Nie znaleziono artykułu</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="page-bg">
      <section className="card card--text">
        <div className="wrap">
          <h1>{post.title}</h1>
          <time>{post.date}</time>
          <div className="post-image">
            <Image src={post.image} alt={post.title} width={1200} height={800} />
          </div>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.desc }} />
        </div>
      </section>
    </div>
  )
}
