export default function CTASection() {
    return (
        <section className="bg-gray-200 py-14">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <h2 className="text-2xl font-semibold text-[#0d3553]">
                    Ready to Digitalize Your Business
                </h2>

                <div className="text-center md:text-right">
                    <button className="bg-[#0d3553] text-white px-8 py-3 rounded-full text-sm">
                        Request a Free Project Estimate
                    </button>

                    <p className="text-xs text-gray-600 mt-2">
                        Get in touch with IPSGlobal Consultants to help you scale your business to success.
                    </p>
                </div>

            </div>
        </section>
    );
}