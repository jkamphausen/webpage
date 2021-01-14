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
                        Hi, I'm Julian Kamphausen.
                    </p>
                    <p>
                        I am a web developer, dedicated to design and technology. I volunteer in the <Link href="https://alumniverein.eu"><a>Alumniverein der SchulBrücken</a></Link>, which I founded together with friends.
                    </p>
                    <p>
                        I grew up in Mönchengladbach and completed my Bachelor's degree in Media Studies / Media Computer Science at the University of Cologne. I am currently studying at the TH Lübeck.
                    </p>
                </div>
            </div>
        </Container>
    );
}