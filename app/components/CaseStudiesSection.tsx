import { ArrowUpRight, TrendingUp, Wrench, Globe } from "lucide-react";

export default function CaseStudiesSection() {
    return (
        <section id="case-studies" className="bg-gray-50 py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#0d3553] leading-tight">
                        Case Studies<span className="underline decoration-[#0d3553]/20 decoration-4 md:decoration-8 underline-offset-4"></span>
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        From technical rescue missions to ground up strategic builds, we deliver results that move the needle for UK businesses.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5 md:gap-6">

                    {/* Case Study 1 */}
                    <div className="group bg-white p-6 md:p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-10 h-10 bg-[#0d3553]/10 text-[#0d3553] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0d3553] group-hover:text-white transition-colors">
                            <TrendingUp size={20} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0d3553] mb-2">
                            London Realty Group
                        </h3>
                        <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest font-semibold">Integrated SEO & UI Overhaul</p>
                        <div className="text-3xl md:text-4xl font-black text-[#0d3553] mb-1">+150%</div>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-5">
                            Organic lead generation increased within 3 months of launching their new responsive platform and strategic SEO campaign.
                        </p>
                        <button className="flex items-center gap-1.5 text-[#0d3553] font-bold text-xs md:text-sm hover:gap-2.5 transition-all group/btn">
                            View Project <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>

                    {/* Case Study 2 */}
                    <div className="group bg-white p-6 md:p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-10 h-10 bg-[#0d3553]/10 text-[#0d3553] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0d3553] group-hover:text-white transition-colors">
                            <Wrench size={20} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0d3553] mb-2">
                            Swift Logistics UK
                        </h3>
                        <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest font-semibold">Legacy System Rescue</p>
                        <div className="text-3xl md:text-4xl font-black text-[#0d3553] mb-1">40%</div>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-5">
                            Speed optimization and critical bug fixes for an outdated booking engine, preventing churn and increasing daily efficiency.
                        </p>
                        <button className="flex items-center gap-1.5 text-[#0d3553] font-bold text-xs md:text-sm hover:gap-2.5 transition-all group/btn">
                            View Project <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>

                    {/* Case Study 3 */}
                    <div className="group bg-white p-6 md:p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-10 h-10 bg-[#0d3553]/10 text-[#0d3553] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0d3553] group-hover:text-white transition-colors">
                            <Globe size={20} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0d3553] mb-2">
                            Elite Retailers
                        </h3>
                        <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest font-semibold">Custom E-commerce Build</p>
                        <div className="text-3xl md:text-4xl font-black text-[#0d3553] mb-1">8 Weeks</div>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-5">
                            Ground-up development of a premium e-commerce platform with specialized product configuration and high conversion rates.
                        </p>
                        <button className="flex items-center gap-1.5 text-[#0d3553] font-bold text-xs md:text-sm hover:gap-2.5 transition-all group/btn">
                            View Project <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>

                </div>

                <div className="text-center mt-10 md:mt-12">
                    <a href="#contact" className="inline-block bg-[#0d3553] text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-900 transition-all text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        Need a Custom Solution? Contact Now
                    </a>
                </div>

            </div>
        </section>
    );
}