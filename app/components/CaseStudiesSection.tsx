export default function CaseStudiesSection() {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold text-[#0d3553]">
                    Case Studies: Real Results, Real Impact
                </h2>

                <p className="text-gray-600 mt-3 mb-12 text-sm">
                    Discover how we’ve helped different businesses achieve their goals
                </p>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white p-8 rounded-lg shadow border">
                        <h3 className="font-semibold text-lg mb-4">
                            Curbstand
                        </h3>
                        <p className="text-sm text-gray-600">
                            Reduced manual ops by
                        </p>
                        <h2 className="text-4xl font-bold text-[#0d3553] my-2">
                            60%
                        </h2>
                        <p className="text-sm text-gray-500">
                            using monday CRM + task automation
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow border">
                        <h3 className="font-semibold text-lg mb-4">
                            Found&Chosen
                        </h3>
                        <p className="text-sm text-gray-600">
                            Built a
                        </p>
                        <h2 className="text-2xl font-bold text-[#0d3553] my-2">
                            Fully Customized
                        </h2>
                        <p className="text-sm text-gray-500">
                            project tracker for remote scaling
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow border">
                        <h3 className="font-semibold text-lg mb-4">
                            Ambiance Hotel
                        </h3>
                        <p className="text-sm text-gray-600">
                            Migrated from spreadsheets to automated workflow
                        </p>
                        <h2 className="text-3xl font-bold text-[#0d3553] my-2">
                            3 weeks
                        </h2>
                    </div>

                </div>

                <button className="mt-10 bg-[#0d3553] text-white px-8 py-3 rounded-full">
                    Explore Case Studies
                </button>

            </div>
        </section>
    );
}