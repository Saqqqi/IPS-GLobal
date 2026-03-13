export default function HowWeWorkSection() {
    return (
        <section className="bg-[#0d3553] text-white py-20">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-4">
                    How We Work
                </h2>

                <p className="text-center text-sm text-gray-300 mb-12">
                    Here at IPSGlobal, we turn operational challenges into growth drivers and ensure every project is efficient,
                    ROI-focused, and delivered on time.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    <div>
                        <span className="text-gray-300 text-sm">01</span>
                        <h3 className="text-lg font-semibold mt-1">
                            Discovery: Identify What’s Holding You Back
                        </h3>
                        <p className="text-sm text-gray-300 mt-2">
                            We start by understanding your current systems, team structure, and goals.
                            Our consultants uncover workflow bottlenecks and inefficiencies.
                        </p>
                    </div>

                    <div>
                        <span className="text-gray-300 text-sm">02</span>
                        <h3 className="text-lg font-semibold mt-1">
                            Strategy & Planning: Built Around Your Business
                        </h3>
                        <p className="text-sm text-gray-300 mt-2">
                            We define clear requirements and develop a tailored roadmap,
                            whether it’s automation, upgrading legacy systems, or deploying IT talent.
                        </p>
                    </div>

                    <div>
                        <span className="text-gray-300 text-sm">03</span>
                        <h3 className="text-lg font-semibold mt-1">
                            Clear Proposal: What You See is What You Get
                        </h3>
                        <p className="text-sm text-gray-300 mt-2">
                            We present a transparent, step-by-step plan that aligns with your
                            budget, timeline, and KPIs.
                        </p>
                    </div>

                    <div>
                        <span className="text-gray-300 text-sm">04</span>
                        <h3 className="text-lg font-semibold mt-1">
                            Execution: High-Performance Delivery
                        </h3>
                        <p className="text-sm text-gray-300 mt-2">
                            Our expert teams implement your solution using best practices,
                            clean code, and modern tech stacks.
                        </p>
                    </div>

                    <div>
                        <span className="text-gray-300 text-sm">05</span>
                        <h3 className="text-lg font-semibold mt-1">
                            Quality Control & Timely Launch
                        </h3>
                        <p className="text-sm text-gray-300 mt-2">
                            Every deployment undergoes rigorous testing and review
                            to ensure everything works perfectly before going live.
                        </p>
                    </div>

                    <div>
                        <span className="text-gray-300 text-sm">06</span>
                        <h3 className="text-lg font-semibold mt-1">
                            Post-Launch Support
                        </h3>
                        <p className="text-sm text-gray-300 mt-2">
                            We monitor performance, provide ongoing support,
                            and continuously optimize your setup to keep business growing.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}