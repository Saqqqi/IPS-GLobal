import { Layout, Search, Code2, ShieldCheck } from "lucide-react";

export default function CoreServicesSection() {
    return (
        <section id="services" className="bg-gray-50 py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0d3553] mb-2">
                        Our Core Service Pillars
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                        End-to-end solutions built with modern tech stacks.  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                    {/* Web & App Development */}
                    <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                        <div className="mb-4 text-blue-600 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg">
                            <Code2 size={24} />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-[#0d3553] mb-2">
                            Custom Web & App Development
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                            Tailored software built for scale. From high converting e-commerce sites to bespoke enterprise applications, we ensure your tech grows with you.        </p>
                        <ul className="text-xs text-gray-500 space-y-1.5">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                React, Next.js & Node.js
                            </li>

                        </ul>
                    </div>

                    {/* Strategic SEO */}
                    <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                        <div className="mb-4 text-blue-600 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg">
                            <Search size={24} />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-[#0d3553] mb-2">
                            Strategic SEO & Growth
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                            Drive organic traffic that converts. Our data-led strategies focus on ROI, ensuring your business is found by the right customers at the right time.    </p>
                        <ul className="text-xs text-gray-500 space-y-1.5">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                Technical SEO Audits
                            </li>

                        </ul>
                    </div>

                    {/* UI/UX Redesign */}
                    <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                        <div className="mb-4 text-blue-600 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg">
                            <Layout size={24} />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-[#0d3553] mb-2">
                            UI/UX Design & Branding
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                            Bridging the gap between aesthetics and functionality. We create premium digital experiences designed to maximize user retention and conversions.   </p>
                        <ul className="text-xs text-gray-500 space-y-1.5">

                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                Conversion focused UI
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}