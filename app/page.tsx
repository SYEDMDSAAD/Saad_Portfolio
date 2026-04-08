import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />

        {/* About Section */}
        <section
          id="about"
          className="flex flex-col items-center justify-center py-20 px-6 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="max-w-[800px] text-gray-300 text-lg leading-relaxed text-center">
            I am a Full Stack Developer specializing in React, Node.js, and Spring Boot, with hands-on experience in designing and developing scalable web applications and RESTful APIs. I have a strong foundation in both frontend and backend technologies, enabling me to build efficient, end-to-end solutions.

            <br /><br />

            I actively contribute to open-source projects, including Elasticsearch, where I have worked on debugging issues, improving test stability, and gaining exposure to large-scale distributed systems. This experience has strengthened my understanding of system design, performance optimization, and collaborative development practices.

            <br /><br />

            I have developed multiple projects, including real-time applications and a machine learning-based Yoga Pose Detection system, where I integrated computer vision techniques with practical software engineering. These projects reflect my ability to apply theoretical concepts to solve real-world problems.

            <br /><br />

            In addition to technical skills, I possess strong problem-solving abilities, attention to detail, and a continuous learning mindset. I am particularly interested in backend development, scalable architectures, and building high-performance systems.

            <br /><br />

            I am currently seeking opportunities where I can contribute to impactful projects, enhance my technical expertise, and grow as a software engineer in a collaborative and challenging environment.
          </p>
        </section>

        {/* Research Papers Section */}
        <section
          id="research"
          className="flex flex-col items-center justify-center py-20 px-6 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Research & Publications
          </h2>

          <div className="max-w-[900px] flex flex-col gap-6 text-gray-300 text-lg">

            {/* Paper 1 */}
            <div className="border border-[#2A0E61] p-5 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-white">
                Yoga Pose Detection & Correction using Machine Learning
              </h3>
              <p className="mt-2">
                Proposed a real-time system using MediaPipe Pose and machine learning
                models (CNN, XGBoost, SVM) to detect and correct yoga postures.
                Focused on improving accuracy and providing real-time feedback.
              </p>

              <div className="mt-3 flex gap-4 text-sm">
                <span className="text-purple-400">Status: Accepted</span>

                <a
                  href="/research/paper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  View Paper
                </a>
              </div>
            </div>
            <div className="border border-[#2A0E61] p-5 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-white">
                Detection of DoS and DDoS Attacks using Machine Learning and Feature Optimization
              </h3>

              <p className="mt-2 text-gray-300">
                This research focuses on detecting Denial of Service (DoS) and Distributed Denial of Service (DDoS) attacks using advanced machine learning and deep learning models such as MLP and LSTM. The study incorporates feature selection techniques and tensor-based analysis to improve detection accuracy while reducing computational overhead. Evaluated on benchmark datasets like CIC-IDS2017 and CIC-IDS2018, the proposed approach achieves high performance in terms of accuracy, precision, and recall, making it suitable for real-time intrusion detection systems.
              </p>

              <div className="mt-3 flex gap-4 text-sm flex-wrap">
                <span className="text-purple-400">Status: Accepted</span>
                <span className="text-gray-400">Domain: Cybersecurity / ML</span>

                <a
                  href="/research/paper2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  View Paper(Scroll upto page 237)
                </a>
              </div>
            </div>

            {/* Add more papers here if needed */}

          </div>
        </section>

        {/* Open Source Section */}
        <section
          id="opensource"
          className="flex flex-col items-center justify-center py-20 px-6 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Open Source Contributions
          </h2>

          <div className="max-w-[900px] flex flex-col gap-6 text-gray-300 text-lg">

            {/* Elasticsearch */}
            <div className="border border-[#2A0E61] p-5 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-white">
                Elasticsearch – Open Source Contributor
              </h3>

              <p className="mt-2">
                Contributed to a large-scale distributed search and analytics engine by identifying
                and resolving issues, improving test stability, and enhancing overall reliability.
                Gained hands-on experience working with production-level systems and complex codebases.
              </p>

              <ul className="mt-3 list-disc list-inside text-sm text-gray-400 space-y-1">
                <li>Debugged and resolved integration and test failures in ESQL modules</li>
                <li>Worked with Gradle-based build systems and CI testing pipelines</li>
                <li>Improved test stability and reduced flaky test behavior</li>
                <li>Collaborated using pull requests, code reviews, and issue tracking</li>
                <li>Gained exposure to distributed systems and performance optimization</li>
              </ul>

              <div className="mt-3 text-sm text-purple-400">
                Type: Open Source Contribution
              </div>
            </div>

            {/* Apache Lucene */}
            <div className="border border-[#2A0E61] p-5 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-white">
                Apache Lucene – Open Source Contributor
              </h3>

              <p className="mt-2">
                Explored and contributed to Apache Lucene, the core search library powering Elasticsearch.
                Gained understanding of indexing, search algorithms, and internal working of inverted indexes
                used in high-performance search engines.
              </p>

              <ul className="mt-3 list-disc list-inside text-sm text-gray-400 space-y-1">
                <li>Worked with core search and indexing concepts</li>
                <li>Understood inverted index and query execution mechanisms</li>
                <li>Explored text analysis, tokenization, and scoring techniques</li>
                <li>Studied internal architecture of search engines</li>
                <li>Strengthened understanding of information retrieval systems</li>
              </ul>

              <div className="mt-3 text-sm text-purple-400">
                Type: Open Source Contribution
              </div>
            </div>

          </div>
        </section>

        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}