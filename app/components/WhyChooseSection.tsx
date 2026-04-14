import { ArrowRight } from "lucide-react";

export default function WhyChooseSection() {
    const helpPoints = [
        {
            number: "01",
            title: "Streamline Workflows and Eliminate Repetitive Tasks"
        },
        {
            number: "02",
            title: "Develop custom software to meet their unique needs"
        },
        {
            number: "03",
            title: "Replacing Outdated Systems with Scalable Custom Business Applications"
        },
        {
            number: "04",
            title: "Overcome IT Staffing Challenges with Pre-vetted Professionals"
        }
    ];

    const fifthPoint = {
        number: "05",
        title: "Migrate to Cloud Solutions for Increased Agility & Security"
    };

    return (
        <section className="bg-[#0d3553] py-16 md:py-20">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12 md:mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Who We Help & Why
                    </h2>
                    <p className="text-white text-sm md:text-base max-w-2xl mx-auto opacity-70">
                        IPS Global partners with small and medium sized businesses and enterprises to help them:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-5">
                    {helpPoints.map((point, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <span className="text-blue-300 font-bold text-base md:text-lg min-w-[40px]">
                                {point.number}
                            </span>
                            <span className="text-white text-sm md:text-base leading-relaxed">
                                {point.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 5th item - Full width, centered horizontally */}
                <div className="mb-12">
                    <div className="flex items-center justify-center gap-3 md:gap-4 p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 max-w-2xl mx-auto">
                        <span className="text-blue-300 font-bold text-base md:text-lg min-w-[40px]">
                            {fifthPoint.number}
                        </span>
                        <span className="text-white text-sm md:text-base leading-relaxed text-center">
                            {fifthPoint.title}
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}