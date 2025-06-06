function Contact() {
    return (
        <section className="bg-gray-950" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <p className="text-base font-semibold uppercase tracking-wide text-indigo-400">
                            Contact
                        </p>
                        <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-300">In hac habitasse platea dictumst
                        </p>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-300">
                                We’d love to hear from you! Whether you have a question, need support, or want to explore our elevator solutions, we’re just a message away. Get in touch with us today—we’re here to help, every step of the way.
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-600 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path
                                                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-white">Our Address
                                        </h3>
                                        <p className="text-gray-300">23/2 nochikuppam light house Mylapore </p>
                                        <p className="text-gray-300">Chennai 600004</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-600 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path
                                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                            </path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-white">Contact
                                        </h3>
                                        <p className="text-gray-300">Mobile: +91 6384571852 , +91 7448381781</p>
                                        <p className="text-gray-300">Mail: sriksmelevator32@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-600 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-white">Working
                                            hours</h3>
                                        <p className="text-gray-300">Monday - Friday: 08:00 - 17:00</p>
                                        <p className="text-gray-300">Saturday &amp; Sunday: 08:00 - 12:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card h-fit max-w-6xl p-5 md:p-12 bg-gray-900" id="form">
                            <h2 className="mb-4 text-2xl font-bold text-white">Any questions?</h2>
                            <form id="contactForm">
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-700 py-2 pl-2 pr-4 shadow-md bg-gray-800 text-gray-200 sm:mb-0" name="name" />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-700 py-2 pl-2 pr-4 shadow-md bg-gray-800 text-gray-200 sm:mb-0" name="email" />
                                        </div>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-700 py-2 pl-2 pr-4 shadow-md bg-gray-800 text-gray-200 sm:mb-0"></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="w-full bg-indigo-600 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
