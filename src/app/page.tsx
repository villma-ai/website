import Image from 'next/image';
import Link from 'next/link';
import content from '@/data/hp/content.json';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-16">
        <h1 className="text-2xl sm:text-4xl italic text-sky-600">
          {content.header.title_1}
          <br />
          {content.header.title_2}
        </h1>
      </header>

      {/* Advantages Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.advantages.cards.map((card, index) => (
            <div key={index} className="group h-[300px] perspective">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of card */}
                <div className="absolute inset-0 bg-white p-6 rounded-lg shadow-md">
                  <h3
                    className={`text-xl font-semibold text-center mb-4
                      ${card.front['title-color']}`}
                  >
                    {card.front.title}
                  </h3>
                  <div className="h-[200px] rounded-lg flex items-center justify-center">
                    <Image
                      src={card.front.image}
                      alt={card.front.title}
                      className={card.front['title-color']}
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 h-full w-full rounded-lg bg-white p-6 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col h-full justify-top">
                    <h3
                      className={`text-xl font-semibold text-center mb-4 ${card.back['title-color']}`}
                    >
                      {card.back.title}
                    </h3>
                    <p className="text-gray-700">{card.back.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          {content.features.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.items.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3 text-sky-600">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-justify">
                  {feature.description.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
              <div className="my-4 transition-transform duration-300 hover:scale-110">
                <Image
                  src={feature.image}
                  alt={feature['image-alt']}
                  className="w-full"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          ))}
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
        <h2 className="text-3xl font-semibold mb-6">{content.cta.title}</h2>
        <p className="text-xl text-gray-700 mb-8">{content.cta.description}</p>
        <Link
          href={content.cta.button.link}
          className={`${content.cta.button.style} text-white font-bold py-3 px-8 rounded-full text-lg transition-colors`}
        >
          {content.cta.button.text}
        </Link>
      </section>

      {/* Footer will go here */}
    </div>
  );
}
