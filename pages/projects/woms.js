import Link from 'next/link';
import Image from 'next/image'

import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import ExternalLink from '@/components/ExternalLink';

const projectData = {
    title: 'WoMS',
    tagline: 'Maintenance. Refactoring. Redesign.',
    text: `The monolithic Workload Management System (WoMS) managed rogramming homework for many IDH courses since 2012. It required intensive maintenance, refactoring and enhancements to the functionality until it was discontinued. I was entrusted with these tasks as a student assistant. In order to improve the usability and user experience of the application in the long term, I conducted <strong>semi-structured interviews</strong> with different people involved and performed <strong>card sortings</strong>. For the enhancement of the functions I relied on <strong>user stories and personas</strong>, which were developed with a group of fellow students. 
            <br/>The software enhancements included, for example, new interfaces for parallel processing of multiple data sets, generators for evaluations, and administrative tools that were disregarded during the initial implementation.
            <br/>In the context of my bachelor thesis I dealt with a possible redesign of the software as a client-server application. For this I designed a Node backend with GraphQL api, as well as an Angular based front end.`,
    roles: 'Developer, Researcher and ',
    extLink: 'http://womsvm.hki.uni-koeln.de/',
    repo: 'https://github.com/jkamphausen/woms2',
    time: '2017 - 2019',
    url: '/projects/woms',
    imageUrl: '/static/images/projects/woms/woms-project.jpg'
}


export default function Woms() {
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
                <div className="mb-8">
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
                            <ExternalLink href="{projectData.extLink}">
                                <h5 className="mb-2 font-bold">→ Course</h5>
                            </ExternalLink>
                        )
                    }
                    {
                        projectData.repo && (
                            <ExternalLink href="{projectData.repo}">
                                <h5 className="mb-2 font-bold">→ Repository</h5>
                            </ExternalLink>
                        )
                    }
                </div>

                <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
                    <div dangerouslySetInnerHTML={{ __html: projectData.text }} />
                </div>
            </div>
        </Container>
    );
}