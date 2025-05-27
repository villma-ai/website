import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-2xl italic">
          Turn Website Visitors into Engaged Customers with AI-Powered
          Conversations
        </h1>
      </header>

      {/* Advantages Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-8 text-center">
          AI Multi-Agent Development Agency
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group h-[300px] perspective">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front of card */}
              <div className="absolute inset-0 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-center mb-4 text-orange-600">
                  From Browsing to Buying
                </h3>
                <div className="h-[200px] bg-orange-50 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/advantages-10.png"
                    alt="Browsing to Buying"
                    className=" text-orange-600"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              {/* Back of card */}
              <div className="absolute inset-0 h-full w-full rounded-lg bg-white p-6 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col h-full justify-top">
                  <h3 className="text-xl font-semibold text-center mb-4 text-orange-600">
                    AI-Powered Sales Conversations
                  </h3>
                  <p className="text-gray-700">
                    Make your site capable of converting many more users thanks
                    to an intelligent dialogue available 24 hours a day
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group h-[300px] perspective">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front of card */}
              <div className="absolute inset-0 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-center mb-4 text-purple-600">
                  AI Sales Team that never sleeps
                </h3>
                <div className="h-[200px] bg-purple-50 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/advantages-20.png"
                    alt="AI Sales Team"
                    className="h-[200px] text-purple-600"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              {/* Back of card */}
              <div className="absolute inset-0 h-full w-full rounded-lg bg-white p-6 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col h-full justify-top">
                  <h3 className="text-xl font-semibold text-center mb-4 text-purple-600">
                    Scale Your Sales Team
                  </h3>
                  <p className="text-gray-700">
                    Turn Website visitors into Engaged Customers with AI-Powered
                    Conversations.
                    <br />
                    <strong>
                      Scale Your Sales Team Without Scaling Costs!
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group h-[300px] perspective">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front of card */}
              <div className="absolute inset-0 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-center mb-4 text-sky-700">
                  Never Miss a Lead
                </h3>
                <div className="h-[200px] bg-sky-50 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/advantages-30.png"
                    alt="Never Miss a Lead"
                    className=" text-sky-700"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              {/* Back of card */}
              <div className="absolute inset-0 h-full w-full rounded-lg bg-white p-6 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col h-full justify-top">
                  <h3 className="text-xl font-semibold text-center mb-4 text-sky-700">
                    AI Agents That Sell While You Sleep!
                  </h3>
                  <p className="text-gray-700">
                    Transform Website Traffic into Sales with AI Conversations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Intelligence & Proactivity
            </h3>
            <p className="text-gray-700 text-justify">
              Transform your sales strategy from reactive to proactive with AI
              multi-agents.
              <br />
              Our system identifies high-value prospects before your
              competitors, ensuring every engagement is timely and tailored.
              <br />
              With real-time insights and predictive analytics, your team can
              focus on building meaningful relationships with prospects most
              likely to convert.
              <br />
              Stay ahead of the competition with a dynamic, data-driven sales
              engine.
            </p>
            <Image
              src="/images/Intelligence-Proactivity.webp"
              alt="Features 1"
              className="my-4 w-full"
              width={300}
              height={300}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Secure and Trusted Data
            </h3>
            <p className="text-gray-700 text-justify">
              Your data security is our priority.
              <br />
              Our AI multi-agent system is built with your data at its core,
              ensuring complete privacy and protection.
              <br />
              We leverage your data ethically to provide personalized insights
              and recommendations, enhancing your sales strategies while
              maintaining the highest security standards. Focus on growing your
              business with confidence, knowing your data is in safe hands.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Sync with your internal software
            </h3>
            <p className="text-gray-700 text-justify">
              Seamlessly integrate our AI multi-agent system with your existing
              tools and knowledge base.
              <br />
              Access real-time data, historical insights, and company-specific
              knowledge to enhance decision-making and improve customer
              interactions.
              <br />
              Leverage the full power of AI without disrupting your current
              operations, saving time and resources while making your sales
              processes more efficient.
            </p>
          </div>
          {/* Add more features as needed */}
        </div>
      </section>

      {/* Testimonials Section */}
      {/*<section className="mb-16 bg-gray-100 p-12 rounded-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-4">
              &quot;Testimonial 1 from a satisfied client about Villma.ai&apos;s
              impact.&quot;
            </p>
            <p className="text-gray-800 font-semibold">
              - Client Name 1, Company A
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-4">
              &quot;Testimonial 2 highlighting the benefits of Villma.ai&apos;s
              solution.&quot;
            </p>
            <p className="text-gray-800 font-semibold">
              - Client Name 2, Company B
            </p>
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Transform Your Engagement?
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Contact us today to learn how Villma.ai can help your business.
        </p>
        <Link
          href="/contacts"
          className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-pink-600 transition-colors"
        >
          Get in Touch
        </Link>
      </section>

      {/* Footer will go here */}
    </div>
  );
}
