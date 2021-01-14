const ExternalLink = ({ href, children }) => (
    <a
        className="text-sm text-gray-400 hover:text-gray-600 transition"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
    >
        {children}
    </a>
);

export default ExternalLink