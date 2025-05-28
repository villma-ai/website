import styles from './about.module.css';

export default function About() {
  return (
    <>
      <main className="max-w-5xl mx-auto p-4 py-8 sm:p-6 lg:p-8">
        <section
          id="home"
          className="py-8 md:py-12 flex flex-col justify-center items-center text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-700 mb-6">
            AI multi-agents
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-600 mb-6">
            Innovating the Future of Work.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl">
            We are a team of three passionate founders, united by a shared
            vision to revolutionize how businesses operate and empower their
            teams.
          </p>
          <div className="text-5xl text-slate-400 mb-12">👤 👤 👤</div>
          <a
            href="#foundation"
            className="px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 transition-colors text-lg"
          >
            Discover Our Story
          </a>
        </section>

        <section
          id="foundation"
          className="py-8 md:py-12 bg-slate-100 rounded-xl my-8"
        >
          <div className="container mx-auto px-4">
            <h3 className={styles['section-title']}>
              From Core Expertise to AI Multi-Agent Innovation
            </h3>
            <p className={styles['section-subtitle']}>
              Before landing in the AI ​​world, we have built our careers on
              decades of experience and a diverse set of technical capabilities,
              we bring a robust foundation to every challenge.
            </p>

            <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                  Decades of Insight
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  With a combined wealth of experience, our most seasoned
                  founder has been navigating the dynamic tech industry
                  landscape since{' '}
                  <span className="font-bold text-sky-600">2000</span>, bringing
                  over two decades of invaluable insight and a deep
                  understanding of technological evolution.
                </p>
              </div>
              <div className="text-center">
                <span className="text-8xl font-bold text-sky-300">20+</span>
                <p className="text-xl text-slate-500">
                  Years of Combined Core Experience
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
                Our Collective Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className={styles['skill-card'] + ' text-center'}>
                  <div className="text-4xl mb-3 text-sky-500">⚙️</div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-1">
                    Project Management
                  </h4>
                  <p className="text-sm text-slate-500">
                    Ensuring projects are delivered efficiently and effectively.
                  </p>
                </div>
                <div className={styles['skill-card'] + ' text-center'}>
                  <div className="text-4xl mb-3 text-sky-500">💻</div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-1">
                    Backend Development
                  </h4>
                  <p className="text-sm text-slate-500">
                    Building robust and scalable server-side solutions.
                  </p>
                </div>
                <div className={styles['skill-card'] + ' text-center'}>
                  <div className="text-4xl mb-3 text-sky-500">🎨</div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-1">
                    Frontend Development
                  </h4>
                  <p className="text-sm text-slate-500">
                    Creating intuitive and engaging user interfaces.
                  </p>
                </div>
                <div className={styles['skill-card'] + ' text-center'}>
                  <div className="text-4xl mb-3 text-sky-500">🗃️</div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-1">
                    Database Architecture
                  </h4>
                  <p className="text-sm text-slate-500">
                    Designing efficient and secure data storage systems.
                  </p>
                </div>
                <div className={styles['skill-card'] + ' text-center'}>
                  <div className="text-4xl mb-3 text-sky-500">🚀</div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-1">
                    DevOps Practices
                  </h4>
                  <p className="text-sm text-slate-500">
                    Streamlining development and operational workflows.
                  </p>
                </div>
                <div
                  className={
                    styles['skill-card'] +
                    ' text-center flex flex-col justify-center items-center'
                  }
                >
                  <div className="text-4xl mb-3 text-sky-500">💡</div>
                  <h4 className="text-xl font-semibold text-slate-700">
                    And More...
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="passion" className="py-8 md:py-12 my-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className={styles['section-title']}>Our Driving Passion</h2>
            <p className={styles['section-subtitle']}>
              At the heart of our innovation lies a deep fascination with the
              potential of Artificial Intelligence.
            </p>
            <div className="bg-white p-8 sm:p-12 rounded-xl shadow-xl max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                What truly drives us is our profound passion for{' '}
                <span className={styles['highlight-ai']}>
                  Artificial Intelligence
                </span>
                . We are particularly fascinated by its transformative power to{' '}
                <span className="font-semibold">
                  simplify, reduce, and accelerate
                </span>{' '}
                countless processes across office management, sales, and various
                other automatable functions. We see AI not just as a technology,
                but as a fundamental catalyst for positive change.
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
              Our Mission: Empowering Your Potential
            </h2>
            <p className={styles['section-subtitle'] + ' !text-sky-100'}>
              We are dedicated to tackling critical business challenges and
              unlocking new levels of productivity and well-being for your
              teams.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-sky-600 p-8 rounded-lg shadow-lg flex flex-col">
                <div className="text-4xl mb-4">😩</div>
                <h3 className="text-2xl font-semibold mb-3">
                  The Challenge: Employee Overload
                </h3>
                <p className="text-sky-50 leading-relaxed flex-grow">
                  We understand the pervasive challenge of employee overload in
                  today&apos;s fast-paced environments. It impacts morale,
                  stifles creativity, and hinders growth.
                </p>
              </div>
              <div className="bg-white text-slate-700 p-8 rounded-lg shadow-lg flex flex-col">
                <div className="text-4xl mb-4 text-sky-500">✨</div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-800">
                  Our AI-Powered Solution
                </h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  We believe in empowering businesses to alleviate this burden.
                  Our mission is to leverage{' '}
                  <span className={styles['highlight-ai']}>AI</span> to create
                  smarter, more efficient workflows. This allows your team to
                  focus on what truly matters while automated systems handle
                  repetitive tasks, injecting productivity even when employees
                  aren&apos;t actively at their desks, ultimately driving{' '}
                  <span className="font-semibold">growth and well-being</span>{' '}
                  simultaneously.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
