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

        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}