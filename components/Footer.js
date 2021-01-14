import ExternalLink from '@/components/ExternalLink'

export default function Footer() {
    return (
        <footer className="flex flex-col items-center mb-8">
            <p>© Julian Kamphausen</p>
            <div className="flex space-x-4 mb-4">
                <ExternalLink href="#">LinkedIn</ExternalLink>
                <ExternalLink href="#">GitHub</ExternalLink>
                <ExternalLink href="#">Twitter</ExternalLink>
            </div>
        </footer>
    )
}
