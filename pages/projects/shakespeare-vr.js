import Link from 'next/link';
import Image from 'next/image'

import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import ExternalLink from '@/components/ExternalLink';

const projectData = {
    title: 'Shakespeare VR',
    tagline: 'Creating a virtual performance using WebVR',
    text: `The course 'Media Transformation' wanted to make theater a virtual reality (VR) experience. We used Angular 2 and Aframe WebVR to recreate a scene from Romeo and Juliet. A recreated theater hall offers different seats. But the user can not only passively participate in the performance, but also intervene in the action: controls allow changes to the scene. For example, Romeo and Juliet can completely change their roles. Including different settings and variable visual appearances. Our approach tries to play with the role models of the traditional story and invite interaction.<br/>The application was designed to be experienced using Google Cardboard and a cell phone. The conclusion of the course was marked by a symposium with the projects of all student working groups.`,
    roles: 'Developer and Contributer to Interaction Design',
    extLink: 'https://lehre.idh.uni-koeln.de/lehrveranstaltungen/sosem17/media-transformation-ii-social-vr-and-interactive-storytelling-in-virtual-reality/',
    repo: 'https://github.com/StudyBucket/shakespeare-vr',
    time: 'Summer Term 2017 | University of Cologne',
    url: '/projects/buchscanner',
    imageUrl: '/static/images/projects/misc/shakespeare-vr-project.png'
}


export default function Shakespeare() {
    return (
        <Container>
            <NextSeo
                title={`${projectData.title} – Julian Kamphausen`}
                canonical={`https://jkamphausen.io/about${projectData.url}`}
                openGraph={{
                    url: `https://jkamphausen.io/about${projectData.url}`,
                    title: `${projectData.title} – Julian Kamphausen`
                }}
            />
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <div>
                    <div className="mb-4">
                        <Link href="/projects" className="tracking-tight text-gray-800 dark:text-gray-200"><a>Projects →</a></Link> <span className="tracking-tight text-black dark:text-white">{projectData.title}</span>
                    </div>
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                        {projectData.title}
                    </h1>
                    <h2 className="mb-8 text-black dark:text-white">{projectData.tagline}</h2>
                    <Image
                        src={projectData.imageUrl}
                        alt={`J. Kamphausen | ${projectData.title}`}
                        width={512}
                        height={256}
                        className="object-contain h-48 w-full mb-8"
                    />
                </div>
                <div className="mb-8">
                    {
                        projectData.time && (
                            <>
                                <h5 className="tracking-tight mb-2 text-black dark:text-white">Time</h5>
                                <p className="mb-4 prose text-justify leading-6 text-gray-800 dark:text-gray-200">{projectData.time}</p>
                            </>
                        )
                    }
                    {
                        projectData.roles && (
                            <>
                                <h5 className="tracking-tight mb-2 text-black dark:text-white">Roles</h5>
                                <p className="mb-4 prose text-justify leading-6 text-gray-800 dark:text-gray-200">{projectData.roles}</p>
                            </>
                        )
                    }
                    {
                        projectData.extLink && (
                            <ExternalLink href={projectData.extLink}>
                                <h5 className="tracking-tight mb-2 text-black dark:text-white">→ Course</h5>
                            </ExternalLink>
                        )
                    }
                    {
                        projectData.repo && (
                            <ExternalLink href={projectData.repo}>
                                <h5 className="tracking-tight mb-2 text-black dark:text-white">→ Repository</h5>
                            </ExternalLink>
                        )
                    }
                </div>

                <div className="mb-8 prose text-justify leading-6 text-gray-800 dark:text-gray-200">
                    <div dangerouslySetInnerHTML={{ __html: projectData.text }} />
                </div>
            </div>
        </Container >
    );
}