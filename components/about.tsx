export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary"></div>
              <h2 className="text-sm uppercase tracking-wider text-primary font-medium">About</h2>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a passionate computer engineering student in my 2nd year at ENSA Al Hoceima, driven by a genuine
              desire to apply my skills in practice and immerse myself in the professional world through internships and
              real-world projects.
            </p>

            <p>
              My academic journey and personal projects have allowed me to develop solid expertise in{" "}
              <span className="text-foreground font-medium">web development</span> (both front-end and back-end) as well
              as <span className="text-foreground font-medium">data processing and machine learning</span>. I'm
              enthusiastic about applying my knowledge while continuing to learn rapidly in a professional environment.
            </p>

            <p>
              Currently, I'm focused on building innovative solutions that bridge the gap between design and
              development, creating experiences that are not only visually appealing but also technically robust and
              user-friendly.
            </p>

            <p>
              In my spare time, I enjoy problem-solving, reading, writing, and exploring the latest trends in web
              development and artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
