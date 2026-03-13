import { PoundSterling, Clock, Code2, Map, Zap } from "lucide-react";

export default function WhyChooseSection() {
    const features = [
        {
            icon: <PoundSterling size={24} />,
            title: "Market Affordability",
            description: "Premium quality digital solutions at rates significantly lower than the UK market average. High end results, sensible pricing."
        },
        {
            icon: <Clock size={24} />,
            title: "Extended Support",
            description: "Every new build includes 2 months of complimentary post launch maintenance to ensure a smooth transition and peak performance."
        },
        {
            icon: <Code2 size={24} />,
            title: "Technical Versatility",
            description: "From ground up builds to legacy code rescue. We fix bugs, scale features, and breathe life into existing platforms."
        },
        {
            icon: <Map size={24} />,
            title: "Customized Project Roadmaps",
            description: "Roadmaps aligned with your growth phase."
        }
    ];

    return (
        <section className="bg-[#0D3553] text-white py-12 md:py-16 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <div className="text-center mb-10 md:mb-12">

                    <h2 className="text-2xl md:text-4xl font-bold mb-3">
                        Why Choose IPS Global?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        We bridge the gap between high end London expertise and accessible market rates,
                        delivering high energy solutions for ambitious brands.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-blue-300 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}