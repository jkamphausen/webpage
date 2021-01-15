import Link from 'next/link';
import Image from 'next/image'

import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import ExternalLink from '@/components/ExternalLink';

const projectData = {
    title: 'Buchscanner',
    tagline: 'Speeding up the WebLibrarian Workflow',
    text: `The projects goal was to speed up the registration for new bought books of the IDHs collection. Maintaining an independend library the institute faced the challenge to keep track of all copies. An installation of WebLibrarian was used for that purpose. However the stored data was neither complete nor corret due to mostly just quick manual inputs done for added copies.
User interviews showed that time was the critical point. Batches of new books needed to be registered on the side of other work. Still they had to be done correct. <br/> 
We came up with the solution of importing the books corresponding data from public apis in by scanning the isbn. Therefore a simple script was written in PHP and provided with an simple interface for editing. Conducted basic research with end users through brainstorming sessions and storyboards which finally concluded in our protoype.`,
    roles: 'Developer and Researcher',
    extLink: '',
    repo: 'https://github.com/StudyBucket/BuchScanner',
    time: '',
    url: '/projects/buchscanner',
    imageUrl: '/static/images/projects/buchscanner/buchscanner.png'
}


export default function Buchscanner() {
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
                        <Link href="/projects" className="tracking-tight text-gray-600 dark:text-gray-400"><a>Projects →</a></Link> <span className="tracking-tight text-black dark:text-white">{projectData.title}</span>
                    </div>
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                        {projectData.title}
                    </h1>
                    <h2 className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">{projectData.tagline}</h2>
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
                                <h5 className="mb-2 font-bold">Time</h5>
                                <p className="mb-4 prose leading-6 text-gray-600 dark:text-gray-400 text-justify">{projectData.time}</p>
                            </>
                        )
                    }
                    {
                        projectData.roles && (
                            <>
                                <h5 className="mb-2 font-bold">Roles</h5>
                                <p className="mb-4 prose leading-6 text-gray-600 dark:text-gray-400 text-justify">{projectData.roles}</p>
                            </>
                        )
                    }
                    {
                        projectData.extLink && (
                            <ExternalLink href={projectData.extLink}>
                                <h5 className="mb-2 font-bold">→ Course</h5>
                            </ExternalLink>
                        )
                    }
                    {
                        projectData.repo && (
                            <ExternalLink href={projectData.repo}>
                                <h5 className="mb-2 font-bold">→ Repository</h5>
                            </ExternalLink>
                        )
                    }
                </div>

                <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400 text-justify">
                    <div dangerouslySetInnerHTML={{ __html: projectData.text }} />
                </div>
            </div>
        </Container>
    );
}