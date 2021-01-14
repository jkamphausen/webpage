import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function About() {
    return (
        <Container>
            <NextSeo
                title="Projects – Julian Kamphausen"
                canonical="https://jkamphausen.io/about"
                openGraph={{
                    url: 'https://jkamphausen.io/about',
                    title: 'Projects – Julian Kamphausen'
                }}
            />
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Projects
                </h1>
                <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">

                </div>
                <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
                    Lorem
                </h2>
            </div>
        </Container>
    );
}