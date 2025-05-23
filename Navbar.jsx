import { useState } from 'react';

export default function Navbar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <header className="py-4 bg-gray-950 sm:py-6 sticky top-0 z-50">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="shrink-0">
                        <a href="#" title="" className="flex">
                            <img className="w-auto h-9" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg" alt="" />
                        </a>
                    </div>

                    <div className="flex md:hidden">
                        <button type="button" className="text-indigo-400" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                            {!expanded && (
                                <span aria-hidden="true">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </span>
                            )}

                            {expanded && (
                                <span aria-hidden="true">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            )}
                        </button>
                    </div>

                    <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
                        <a href="#home" className="text-base font-normal text-gray-300 transition-all duration-200 hover:text-indigo-400">Home</a>
                        <a href="#services" className="text-base font-normal text-gray-300 transition-all duration-200 hover:text-indigo-400">Services</a>
                        <a href="#work" className="text-base font-normal text-gray-300 transition-all duration-200 hover:text-indigo-400">Work</a>
                        <a href="#contact" className="text-base font-normal text-gray-300 transition-all duration-200 hover:text-indigo-400">Contact</a>
                    </nav>
                </div>

                {expanded && (
                    <nav>
                        <div className="flex flex-col pt-8 pb-4 space-y-6">
                            <a href="#home" className="text-base font-normal text-gray-300 transition-all duration-200 hover:text-indigo-400">Home</a>
                            <a href="#services" className="text-base font-normal text-gray-300 transition-all duration-200 hover:text-indigo-400">Services</a>
                            <a href="#work" className="text-base font-normal text-gray-300 transition-all duration-200 hover:text-indigo-400">Work</a>
                            <a href="#contact" className="text-base font-normal text-gray-300 transition-all duration-200 hover:text-indigo-400">Contact</a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}