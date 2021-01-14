const title = 'Julian Kamphausen – Web Developer';
const description =
    'Web Developer, .';

const SEO = {
    title,
    description,
    canonical: 'https://jkamphausen.io',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://jkamphausen.io',
        title,
        description,
        images: [
            {
                url: 'https://jkamphausen.io/static/images/cover.jpg',
                alt: title,
                width: 1280,
                height: 720
            }
        ]
    },
    twitter: {
        handle: '@leeerob',
        site: '@leeerob',
        cardType: 'summary_large_image'
    }
};

export default SEO;