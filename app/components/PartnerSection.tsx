export default function PartnerSection() {
    return (
        <section className="bg-[#0d3553] text-white py-20">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-12">
                    Partner with Us to
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="border border-white rounded-lg p-6 flex gap-4 items-center">
                        <span className="border border-white w-10 h-10 flex items-center justify-center rounded-full">
                            01
                        </span>
                        <p>Automate and Optimize Business Processes</p>
                    </div>

                    <div className="border border-white rounded-lg p-6 flex gap-4 items-center">
                        <span className="border border-white w-10 h-10 flex items-center justify-center rounded-full">
                            03
                        </span>
                        <p>Develop Custom Software solutions</p>
                    </div>

                    <div className="border border-white rounded-lg p-6 flex gap-4 items-center">
                        <span className="border border-white w-10 h-10 flex items-center justify-center rounded-full">
                            02
                        </span>
                        <p>Access Top-tier IT talent and BPO services</p>
                    </div>

                    <div className="border border-white rounded-lg p-6 flex gap-4 items-center">
                        <span className="border border-white w-10 h-10 flex items-center justify-center rounded-full">
                            04
                        </span>
                        <p>
                            Drive Digital Transformation with Scalable Cloud Solutions
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}