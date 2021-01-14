import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import Footer from '@/components/Footer'

export default function Container({ children }) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    return (
        <div className="bg-white dark:bg-black">
            <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-100">
                <div>
                    <Link href="/">
                        <a>Julian Kamphausen</a>
                    </Link>
                </div>
                <div>
                    <Link href="/about">
                        <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">About</a>
                    </Link>
                    <Link href="/">
                        <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
                    </Link>
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="bg-gray-50 dark:bg-gray-800 rounded p-3 h-10 w-10 static"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        {mounted && (
                            <svg
                                id="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                                stroke="currentColor"
                                className="h-4 w-4 text-gray-800 dark:text-gray-200">
                                <rect x="11" y="24" width="10" height="2" />
                                <rect x="13" y="28" width="6" height="2" />
                                <path d="M16,2A10,10,0,0,0,6,12a9.19,9.19,0,0,0,3.46,7.62c1,.93,1.54,1.46,1.54,2.38h2c0-1.84-1.11-2.87-2.19-3.86A7.2,7.2,0,0,1,8,12a8,8,0,0,1,16,0,7.2,7.2,0,0,1-2.82,6.14c-1.07,1-2.18,2-2.18,3.86h2c0-.92.53-1.45,1.54-2.39A9.18,9.18,0,0,0,26,12,10,10,0,0,0,16,2Z" transform="translate(0 0)" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
            <main className="flex flex-col justify-center bg-white dark:bg-black px-8">
                {children}
                <Footer />
            </main>
        </div>
    );
}