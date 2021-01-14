import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function About() {
    return (
        <Container>
            <NextSeo
                title="About Me – Julian Kamphausen"
                canonical="https://jkamphausen.io/about"
                openGraph={{
                    url: 'https://jkamphausen.io/about',
                    title: 'About Me – Julian Kamphausen'
                }}
            />
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    About Me
                </h1>
                <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
                    <p>
                        Hey, I’m Lee. I'm a developer, writer, and the creator of&nbsp;
                        <a
                            href="https://masteringnextjs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mastering Next.js
                        </a>
                        &nbsp;and&nbsp;
                        <a
                            href="https://react2025.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React 2025.
                        </a>
                        &nbsp;I work at ▲Vercel as a Solutions Architect.
                    </p>
                    <p>
                        I grew up in small-town Iowa and went to school at Iowa State,
                        graduating with a degree in Computer Engineering. I spend my free
                        time playing music, creating videos, and enjoying time with friends
                        and family in Des Moines, IA.
                    </p>
                </div>
                <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
                    Lorem
                </h2>
            </div>
        </Container>
    );
}