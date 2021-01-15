import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';


const projects = [
    {
        title: 'Shakespeare VR',
        description: 'A student project around transmedial theatre in VR. Implemented with Angular 2 and A-Frame.',
        href: '/projects/shakespeare-vr',
        imageUrl: '/static/images/projects/misc/shakespeare-vr-project2.png'
    },
    {
        title: 'WoMS',
        description: 'Web development, research and design as part of my work at the Institute of Digital Humanities in Cologne and beyond.',
        href: '/projects/woms',
        imageUrl: '/static/images/projects/misc/woms-project.png'
    },
    {
        title: 'Buchscanner',
        description: 'Prototypical development of a frontend for WebLibrarian to improve the workflow.',
        href: '/projects/buchscanner',
        imageUrl: '/static/images/projects/buchscanner/buchscanner-mac.png'
    }
]

export default function Projects() {
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
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-gray-800 dark:text-gray-200">
                    Projects
                </h1>
                <section className="mb-16 prose leading-6 text-gray-600 dark:text-gray-400">
                    {
                        projects.map((p) =>
                            <div className="mb-8">
                                <ProjectCard key={p.title} title={p.title} description={p.description} href={p.href} imgageUrl={p.imageUrl} />
                            </div>
                        )
                    }
                </section>
                <section className="mb-16 prose leading-6 text-gray-600 dark:text-gray-400">
                    <h2>Further Projects</h2>

                </section>
                <section className="mb-16 prose leading-6 text-gray-600 dark:text-gray-400">
                    <h3>Game Development and VR</h3>
                    <h4>OtterSpace - Student Project</h4>
                    <p>Against the backdrop of the growing mobile gaming market, the course project aimed to design and implement an 'addictive' game to pass the time. Our game tells the story of an otter who is lost in outer space and collects parts for a new spaceship. This is done through winning mini games. While creating vectorized game graphics and interface elements, I got to know how to use Adobe Illustrator and dealt with color design. In addition, I participated in the design of the basic story. The OtterSpace was published in <a href="https://play.google.com/store/apps/details?id=com.TeamOtterSpace.Otterspace" target="_blank">Google Playstore</a></p>
                    <p>I contributed to UI Design and storywriting.</p>
                    <hr />
                    <h4>Hopping Kölsch - Student Project</h4>
                    <p>The course project aimed to recreate a common known game in the flavor of Colognes local colors. The development was oriented toward agile principles. I was accountable for researching the interest of our end users with questionnaires in the early project stage. This was done as well online and offline. I participated in the conception of the visual design as well as in producing particular textures und models for the end product.</p>
                    <p>I was involved as Contributer to UI Design, User Researcher, User Tester and Project Manager.</p>
                    <hr />
                    <h4>Animal Farm - Student Project</h4>
                    <p>Based on George Orwell's classic 'Animal Farm', with elements from 1984, we developed the VR implementation of an emotional scene in Unity: the pickup of Boxer by the knacker.  For this, we created 3D models and visually recreated the farm from Orwell's book. Sound effects underline the scenery. In the context of the project I developed for the first time with C#.</p>
                    <p>Developer and Contributer to Storytelling.</p>
                </section>
                <section className="mb-16 prose leading-6 text-gray-600 dark:text-gray-400">
                    <h2>Participations and attended courses</h2>

                </section>
                <section className="mb-16 prose leading-6 text-gray-600 dark:text-gray-400">
                    <h4>Late Summer School 'Machine Learning for Language Analysis'</h4>
                    <p>Participation in the introduction to Machine Learning and Data Annotation by Dr. Nils Reiter and in the workshop 'Deep Learning with Text Data'. <a href="https://complexsystems.uni-koeln.de/summerschool2018">→ more</a></p>
                    <hr />
                    <h4>Conference</h4>
                    <p>In the run-up to the 2018 conference 'Digital Humanities in the German-speaking world' (#dhd18), I participated in the submission of a paper with Andreas Gálffy, Jan Wieners, and Simone Kronenwett on the topic of 'Research data management and long-term preservation'. In it, we outlined the rough idea of a research data network. <a href="https://twitter.com/s_kronenwett/status/967155371411419147?s=20">→ twitter</a></p>

                </section>
            </div>
        </Container >
    );
}