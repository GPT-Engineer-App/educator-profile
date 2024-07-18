import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      {/* Header Section */}
      <header className="bg-white bg-opacity-20 backdrop-blur-lg p-8 text-center">
        <img
          src="/placeholder.svg"
          alt="Luccas Eastman"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-4xl font-bold text-white mb-2">Luccas Eastman</h1>
        <p className="text-xl italic text-white mb-4">Web Developer and Business Educator</p>
        <nav className="space-x-4">
          <a href="#about" className="text-white hover:text-gray-200">About</a>
          <a href="#projects" className="text-white hover:text-gray-200">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="bg-white bg-opacity-20 backdrop-blur-lg p-8 m-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <p className="text-white mb-4">
          I'm Luccas Eastman, a passionate Web Developer and Business Educator. With years of experience in both fields,
          I bring a unique perspective to my work, combining technical expertise with business acumen.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "Business Strategy"].map((skill) => (
            <div key={skill} className="bg-white bg-opacity-30 p-2 rounded-lg text-white text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-8 m-8">
        <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-lg transform transition duration-500 hover:scale-105">
              <img src="/placeholder.svg" alt={`Project ${project}`} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Project {project}</h3>
              <p className="text-white mb-4">A brief description of the project and its key features.</p>
              <a href="#" className="text-blue-300 hover:text-blue-100">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white bg-opacity-20 backdrop-blur-lg p-8 m-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <form className="space-y-4">
          <Input type="text" placeholder="Name" className="bg-white bg-opacity-50" />
          <Input type="email" placeholder="Email" className="bg-white bg-opacity-50" />
          <Textarea placeholder="Message" className="bg-white bg-opacity-50" />
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-white bg-opacity-10 p-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-white hover:text-gray-200"><Linkedin /></a>
          <a href="#" className="text-white hover:text-gray-200"><Github /></a>
          <a href="#" className="text-white hover:text-gray-200"><Twitter /></a>
        </div>
        <p className="text-white">&copy; 2024 Luccas Eastman. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;