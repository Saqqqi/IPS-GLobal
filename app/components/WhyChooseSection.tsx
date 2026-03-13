export default function WhyChooseSection() {
    return (
        <section className="bg-[#0d3553] text-white py-20">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Choose IPSGlobal Consultants?
                </h2>

                <div className="grid md:grid-cols-4 gap-6">

                    <div className="border border-white rounded-lg p-6">
                        <p className="text-sm">Trusted by</p>
                        <h3 className="text-3xl font-bold mt-2">200+</h3>
                        <p className="text-sm mt-1">
                            startups, SMBs and enterprises
                        </p>
                    </div>

                    <div className="border border-white rounded-lg p-6">
                        <p className="text-sm">Achieve over</p>
                        <h3 className="text-3xl font-bold mt-2">40%</h3>
                        <p className="text-sm mt-1">
                            Improvement in operational efficiency
                        </p>
                    </div>

                    <div className="border border-white rounded-lg p-6">
                        <h3 className="text-xl font-semibold">
                            Smooth Transition
                        </h3>
                        <p className="text-sm mt-2">
                            from legacy systems to automated workflows
                        </p>
                    </div>

                    <div className="border border-white rounded-lg p-6">
                        <h3 className="text-xl font-semibold">
                            Customized Project Roadmaps
                        </h3>
                        <p className="text-sm mt-2">
                            roadmaps aligned with your growth phase
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}