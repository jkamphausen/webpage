import Head from 'next/head'
import Link from 'next/link'
import Container from '@/components/Container'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">

        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">Hey, I'm Julian! 👨🏻‍💻</h1>
        <h2 className="text-gray-600 dark:text-gray-400 mb-16">Web Developer × Student × Currently living in Budapest × <br />Co-Founder of Alumniverein.eu × Coffee Drinker × <br /> Hobby Cook </h2>

        <div className=" prose leading-6">
          <p>Welcome to my personal website. Here I will share something about my <Link href="/projects"><a>projects</a></Link> and my engagenments and <Link href="/about"><a>me</a></Link>.</p>
        </div>
      </div>
    </Container>
  )
}
