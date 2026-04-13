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
                        End-to-end digital solutions tailored to the UK market, delivering premium results without the premium price tag.
                    </p>
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
                            Tailored software solutions built with modern stacks. From high converting E-commerce sites to bespoke enterprise mobile applications, we build for scale and performance.
                        </p>
                        <ul className="text-xs text-gray-500 space-y-1.5">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                React, Next.js & Node.js
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                Native & Cross platform Apps
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
                            Dominate search rankings and drive organic traffic. Our data led SEO strategies focus on ROI, ensuring your business gets found by the right customers at the right time.
                        </p>
                        <ul className="text-xs text-gray-500 space-y-1.5">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                Technical SEO Audits
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                Content Strategy & Authority
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
                            User centric designs that bridge the gap between aesthetics and functionality. We create premium digital experiences that resonate with your brand and maximize conversions.
                        </p>
                        <ul className="text-xs text-gray-500 space-y-1.5">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                Interactive Prototyping
                            </li>
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