import { Wrench, Zap, TrendingUp, Search } from "lucide-react";

export default function WebsiteRescueSection() {
    return (
        <section id="Maintenance-&-Support" className="bg-white py-16 md:py-20 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Content Header */}
                <div className="space-y-4 max-w-4xl mx-auto mb-12">
                    <div>
                        <span className="text-[#0d3553] font-bold tracking-wider uppercase text-xs">Maintenance & Support</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-[#0d3553] mt-1 leading-tight">
                            Professional <span className="text-[#0d3553] underline decoration-blue-200 decoration-4 underline-offset-8">Maintenance & Support</span> & Optimization
                        </h2>
                    </div>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                        Is your current website slow, buggy, or failing to scale? We specialize in technical interventions for existing digital assets. Our high energy team handles everything from critical bug fixes to full feature modernization.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12">
                    <div className="space-y-3 bg-gray-50 p-5 md:p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="w-10 h-10 bg-[#0d3553]/10 text-[#0d3553] rounded-lg flex items-center justify-center mx-auto">
                            <Wrench size={20} />
                        </div>
                        <h4 className="font-bold text-[#0d3553] text-base md:text-lg">Bug Fixing</h4>
                        <p className="text-xs md:text-sm text-gray-500">Eliminating persistent errors and stabilizing your core system.</p>
                    </div>

                    <div className="space-y-3 bg-gray-50 p-5 md:p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="w-10 h-10 bg-[#0d3553]/10 text-[#0d3553] rounded-lg flex items-center justify-center mx-auto">
                            <Zap size={20} />
                        </div>
                        <h4 className="font-bold text-[#0d3553] text-base md:text-lg">Speed Optimization</h4>
                        <p className="text-xs md:text-sm text-gray-500">Radically improving load times and Core Web Vitals.</p>
                    </div>

                    <div className="space-y-3 bg-gray-50 p-5 md:p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="w-10 h-10 bg-[#0d3553]/10 text-[#0d3553] rounded-lg flex items-center justify-center mx-auto">
                            <TrendingUp size={20} />
                        </div>
                        <h4 className="font-bold text-[#0d3553] text-base md:text-lg">Feature Scaling</h4>
                        <p className="text-xs md:text-sm text-gray-500">Adding new capabilities to your existing legacy platform.</p>
                    </div>

                    <div className="space-y-3 bg-gray-50 p-5 md:p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="w-10 h-10 bg-[#0d3553]/10 text-[#0d3553] rounded-lg flex items-center justify-center mx-auto">
                            <Search size={20} />
                        </div>
                        <h4 className="font-bold text-[#0d3553] text-base md:text-lg">Security Updates</h4>
                        <p className="text-xs md:text-sm text-gray-500">Hardening legacy code against modern security threats.</p>
                    </div>
                </div>

                {/* CTA */}
                <div>
                    <a href="#contact" className="inline-block bg-[#0d3553] text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-900 transition-all text-sm shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5">
                        Need Help? Contact Now
                    </a>
                </div>

            </div>
        </section>
    );
}