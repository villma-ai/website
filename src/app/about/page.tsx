import styles from './about.module.css';
import content from '@/data/about/content.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  openGraph: {
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    images: [content.seo.ogImage]
  },
  twitter: {
    card: 'summary_large_image',
    title: content.seo.twitterTitle,
    description: content.seo.twitterDescription,
    images: [content.seo.ogImage]
  }
};

export default function About() {
  return (
    <>
      <main className="max-w-5xl mx-auto p-4 py-8 sm:p-6 lg:p-8">
        <section
          id="home"
          className="py-8 md:py-12 flex flex-col justify-center items-center text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-700 mb-6">
            {content.home.title}
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-600 mb-6">
            {content.home.subtitle}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl">
            {content.home.description}
          </p>
          <div className="text-5xl text-slate-400 mb-12">👤 👤 👤</div>
          <a
            href={content.home.cta.link}
            className="px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 transition-colors text-lg"
          >
            {content.home.cta.text}
          </a>
        </section>

        <section
          id="foundation"
          className="py-8 md:py-12 bg-slate-100 rounded-xl my-8"
        >
          <div className="container mx-auto px-4">
            <h3 className={styles['section-title']}>
              {content.foundation.title}
            </h3>
            <p className={styles['section-subtitle']}>
              {content.foundation.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                  Decades of Insight
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {content.foundation.experience.text}
                </p>
              </div>
              <div className="text-center">
                <span className="text-8xl font-bold text-sky-300">
                  {content.foundation.experience.years}
                </span>
                <p className="text-xl text-slate-500">
                  {content.foundation.experience.description}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
                Our Collective Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.foundation.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`${styles['skill-card']} text-center ${
                      !skill.description
                        ? 'flex flex-col justify-center items-center'
                        : ''
                    }`}
                  >
                    <div className="text-4xl mb-3 text-sky-500">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-1">
                      {skill.title}
                    </h4>
                    {skill.description && (
                      <p className="text-sm text-slate-500">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="passion" className="py-8 md:py-12 my-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className={styles['section-title']}>{content.passion.title}</h2>
            <p className={styles['section-subtitle']}>
              {content.passion.subtitle}
            </p>
            <div className="bg-white p-8 sm:p-12 rounded-xl shadow-xl max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                {content.passion.description}
              </p>
            </div>
          </div>
        </section>

        <section
          id="mission"
          className="py-8 md:py-12 bg-sky-700 text-white rounded-xl my-8"
        >
          <div className="container mx-auto px-4">
            <h2 className={styles['section-title'] + ' !text-white'}>
              {content.mission.title}
            </h2>
            <p className={styles['section-subtitle'] + ' !text-sky-100'}>
              {content.mission.subtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-sky-600 p-8 rounded-lg shadow-lg flex flex-col">
                <div className="text-4xl mb-4">
                  {content.mission.challenge.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  {content.mission.challenge.title}
                </h3>
                <p className="text-sky-50 leading-relaxed flex-grow">
                  {content.mission.challenge.description}
                </p>
              </div>
              <div className="bg-white text-slate-700 p-8 rounded-lg shadow-lg flex flex-col">
                <div className="text-4xl mb-4 text-sky-500">
                  {content.mission.solution.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-800">
                  {content.mission.solution.title}
                </h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {content.mission.solution.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
