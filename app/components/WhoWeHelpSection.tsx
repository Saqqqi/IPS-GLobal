export default function WhoWeHelpSection() {
    return (
        <section className="bg-[#1f4762] text-white py-20">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center">
                    Who We Help & Why
                </h2>

                <p className="text-center text-sm mt-3 mb-12 text-gray-200">
                    IPSGlobal partners with small and medium-sized businesses (SMBs) and enterprises to help them:
                </p>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="border border-white rounded-lg p-6 flex gap-4 items-center">
                        <span className="border border-white w-10 h-10 flex items-center justify-center rounded-full">
                            01
                        </span>
                        <p>Streamline Workflows and Eliminate Repetitive Tasks</p>
                    </div>

                    <div className="border border-white rounded-lg p-6 flex gap-4 items-center">
                        <span className="border border-white w-10 h-10 flex items-center justify-center rounded-full">
                            02
                        </span>
                        <p>Develop custom software to meet their unique needs</p>
                    </div>

                    <div className="border border-white rounded-lg p-6 flex gap-4 items-center">
                        <span className="border border-white w-10 h-10 flex items-center justify-center rounded-full">
                            03
                        </span>
                        <p>Replacing Outdated Systems with Scalable Custom Business Applications</p>
                    </div>

                    <div className="border border-white rounded-lg p-6 flex gap-4 items-center">
                        <span className="border border-white w-10 h-10 flex items-center justify-center rounded-full">
                            04
                        </span>
                        <p>Overcome IT Staffing Challenges with Pre-vetted Professionals</p>
                    </div>

                </div>

                <div className="flex justify-center mt-8">
                    <div className="border border-white rounded-lg px-10 py-6 flex gap-4 items-center">
                        <span className="border border-white w-10 h-10 flex items-center justify-center rounded-full">
                            05
                        </span>
                        <p>Migrate to Cloud Solutions for Increased Agility & Security</p>
                    </div>
                </div>

                <p className="text-center text-sm mt-12 text-gray-200">
                    We're in the business of making things possible for you with just the right solution.
                </p>

            </div>

        </section>
    );
}