import ExternalLink from '@/components/ExternalLink'

export default function Footer() {
    return (
        <footer className="flex flex-col items-center mb-8">
            <div className="flex space-x-4 mb-4">
                <ExternalLink href="https://de.linkedin.com/in/jkamphausen/en-us">LinkedIn</ExternalLink>
                <ExternalLink href="https://github.com/jkamphausen">GitHub</ExternalLink>
            </div>
            <div className="mb-4 leading-6">
                <p>Build with <a className="underline" href="https://nextjs.org" target="_blank">Next.js </a> and <a className="underline" href="https://tailwindcss.com" target="_blank">tailwindcss</a> by Julian Kamphausen. Hosted on <a className="underline" href="https://vercel.com" target="_blank">Vercel</a></p>
            </div>
        </footer>
    )
}
