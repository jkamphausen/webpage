import Head from 'next/head'
import Link from 'next/link'
import Container from '@/components/Container'

const Interest = ({text, title}) => (
  <a className="text-sm p-1 hover:underline" title={title || text}>{text}</a>
)

export default function Home() {
  return (
    <div class="relative h-screen bg-blue-500">
      <Head>
        <title>Landing | JKΛMPHΛUSΞN</title>
      </Head>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="self-center text-4xl p-4">JKΛMPHΛUSΞN</h1>
        <div className="flex gap-2">
          <Interest text="IxD" title="Interaction Design"/>
          <Interest text="UXD" title="User Experience Design"/>
          <Interest text="WebDev" title="Development of Web Applications"/>
          <Interest text="Research"/>
          <Interest text="Edu" title="Extra Curricular Education"/>
          <Interest text="Communication" title="Communications & PR"/>
        </div>
        <div>
          <p className="pt-6 italic text-sm">Crafting a new webpage. Will be up soon. ⚒️</p>
        </div>
      </div>
    </div>
  )
}
