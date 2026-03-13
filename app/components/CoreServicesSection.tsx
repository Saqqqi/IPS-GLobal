import { Zap, BarChart3, Globe2, Code2 } from "lucide-react";

export default function CoreServicesSection() {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-[#0d3553] mb-12">
                    Our Core Services
                </h2>

                <div className="grid md:grid-cols-2 gap-12">

                    <div>
                        <div className="mb-4 text-[#0d3553]">
                            <Zap size={48} />
                        </div>
                        <h3 className="text-xl font-semibold text-[#0d3553] mb-2">
                            Digital Transformation
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            We help you digitally transform your business by modernizing key systems,
                            accelerating innovation, and providing a personalized customer experience.
                        </p>
                        <button className="bg-[#0d3553] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
                            Learn More
                        </button>
                    </div>

                    <div>
                        <div className="mb-4 text-[#0d3553]">
                            <BarChart3 size={48} />
                        </div>
                        <h3 className="text-xl font-semibold text-[#0d3553] mb-2">
                            Finance & Accounting
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            We simplify finance for businesses with precision-driven services
                            including bookkeeping, forecasting, and detailed financial reporting.
                        </p>
                        <button className="bg-[#0d3553] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
                            Learn More
                        </button>
                    </div>

                    <div>
                        <div className="mb-4 text-[#0d3553]">
                            <Globe2 size={48} />
                        </div>
                        <h3 className="text-xl font-semibold text-[#0d3553] mb-2">
                            BPO Services
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            We serve as a scalable back-office partner for U.S. and Canadian enterprises,
                            delivering skilled professionals across multiple roles.
                        </p>
                        <button className="bg-[#0d3553] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
                            Learn More
                        </button>
                    </div>

                    <div>
                        <div className="mb-4 text-[#0d3553]">
                            <Code2 size={48} />
                        </div>
                        <h3 className="text-xl font-semibold text-[#0d3553] mb-2">
                            Software Development
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            We engineer reliable software solutions including custom in-house tools,
                            mobile apps, and engaging web applications.
                        </p>
                        <button className="bg-[#0d3553] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
                            Learn More
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}