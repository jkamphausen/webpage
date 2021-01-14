import Image from 'next/image'
import Link from 'next/link';

export default function ProjectCard({ title, description, href, imgageUrl }) {
    return (
        <Link href={href}>
            <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4 hover:shadow mb-4">
                {
                    imgageUrl && <div className="ml-4 mr-4">
                        <Image
                            alt={`J. Kamphausen | ${title}`}
                            width={512}
                            height={512}
                            src={imgageUrl}
                            //className="object-contain h-48 w-full"
                            className="object-cover h-48 w-full"
                        />
                    </div>
                }
                <div>
                    <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        {title}
                    </h4>
                    <p className="leading-5 text-gray-700 dark:text-gray-300">
                        {description}
                    </p>
                </div>
            </div>
        </Link >
    );
}