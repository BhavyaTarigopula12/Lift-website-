export default function Home() {
    return (
        <>
            <div className=""> {/* Changed class to className */}
                <section id="home" className="py-12 bg-gray-950 sm:pb-16 lg:pb-20 xl:pb-24"> {/* Changed class to className */}
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"> {/* Changed class to className */}
                        <div className="relative"> {/* Changed class to className */}
                            <div className="lg:w-2/3"> {/* Changed class to className */}
                                <p className="text-sm font-normal tracking-widest text-indigo-400 uppercase">A Hub for Designers, Developers & Marketers</p> {/* Changed class to className */}
                                <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl"> {/* Changed class to className */}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Unlimited Design</span> Inspiration {/* Changed class to className */}
                                </h1>
                                <p className="max-w-lg mt-4 text-xl font-normal text-gray-300 sm:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p> {/* Changed class to className */}
                                <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group"> {/* Changed class to className */}
                                    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:shadow-lg group-hover:shadow-indigo-400/50"></div> {/* Changed class to className */}
                                    <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-indigo-600 border border-transparent rounded-full" role="button"> Start Exploring Inspiration </a> {/* Changed class to className */}
                                </div>

                                <div>
                                    <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14"> {/* Changed class to className */}
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"> {/* Changed class to className and stroke-width to strokeWidth */}
                                            <path d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17" stroke="url(#a)" strokeLinecap="round" strokeLinejoin="round" /> {/* Changed stroke-linecap and stroke-linejoin */}
                                            <defs>
                                                <linearGradient id="a" x1="3" y1="7.00003" x2="22.2956" y2="12.0274" gradientUnits="userSpaceOnUse"> {/* Changed gradientUnits */}
                                                    <stop offset="0%" style={{ stopColor: 'var(--color-cyan-500)' }} /> {/* Corrected style attribute */}
                                                    <stop offset="100%" style={{ stopColor: 'var(--color-purple-500)' }} /> {/* Corrected style attribute */}
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <span className="ml-2 text-base font-normal text-gray-200"> 42 new design inspiration was added last week </span> {/* Changed class to className */}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0"> {/* Changed class to className */}
                                <img className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png" alt="" /> {/* Changed class to className */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}