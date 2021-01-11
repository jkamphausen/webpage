import { CMS_NAME, PAGE_NAME } from '../lib/constants'
import Link from 'next/link'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <span className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {PAGE_NAME}
      </span>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {/* A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}. */}

        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
        <span> | </span>
        <Link href="/about">
          <a className="hover:underline">About</a>
        </Link>
        <span> | </span>
        <Link href="/projects">
          <a className="hover:underline">Projects</a>
        </Link>
      </h4>
    </section>
  )
}

export default Intro
