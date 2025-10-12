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
              I'm a passionate Software Engineering student in my 3rd year at ENSA Al Hoceima, 
              driven by a strong ambition to design intelligent and efficient systems that solve real-world problems. 
              I aim to combine <span className="text-foreground font-medium">software engineering principles</span> with the power of <span className="text-foreground font-medium">artificial intelligence</span> to build impactful and scalable solutions.
            </p>

            <p>
              Through my academic projects and personal explorations, 
              I’ve developed solid experience in  <span className="text-foreground font-medium">full-stack development, 
              data processing, and machine learning. </span>My approach integrates both 
              technical precision and creative design, ensuring that the solutions 
              I build are not only robust but also intuitive and user-centered.
            </p>

            <p>
             Currently, I’m focusing on <span className="text-foreground font-medium">AI-driven software 
             engineering,</span> exploring how automation, deep learning, 
             and modern architecture design 
             can enhance <span className="text-foreground font-medium">software quality and user experience.</span>
            </p>

            
          </div>
        </div>
      </div>
    </section>
  )
}
