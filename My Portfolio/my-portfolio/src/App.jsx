import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">My Portfolio</h1>
          <nav className="space-x-4">
            <a href="#projects" className="hover:text-indigo-500">Projects</a>
            <a href="#about" className="hover:text-indigo-500">About</a>
            <a href="#contact" className="hover:text-indigo-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Hi, I’m <span className="text-indigo-600">Your Name</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          A beginner React developer building creative web experiences.
        </p>
        <a
          href="#projects"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-500 transition"
        >
          View My Work
        </a>
      </section>
      {/* Projects Section */}
<section id="projects" className="max-w-6xl mx-auto px-4 py-20">
  <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {/* Project 1 */}
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img
        src="https://via.placeholder.com/600x400"
        alt="Project 1"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Project One</h3>
        <p className="text-gray-600 mb-4">
          A short description of your project goes here.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-indigo-600 hover:underline"
            target="_blank"
          >
            Live Demo
          </a>
          <a
            href="#"
            className="text-indigo-600 hover:underline"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img
        src="https://via.placeholder.com/600x400"
        alt="Project 2"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Project Two</h3>
        <p className="text-gray-600 mb-4">
          Another project description goes here.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-indigo-600 hover:underline"
            target="_blank"
          >
            Live Demo
          </a>
          <a
            href="#"
            className="text-indigo-600 hover:underline"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>

    {/* Project 3 */}
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img
        src="https://via.placeholder.com/600x400"
        alt="Project 3"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Project Three</h3>
        <p className="text-gray-600 mb-4">
          Brief project details go here.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-indigo-600 hover:underline"
            target="_blank"
          >
            Live Demo
          </a>
          <a
            href="#"
            className="text-indigo-600 hover:underline"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* About Section */}
<section id="about" className="bg-gray-100 py-20">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">About Me</h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-8">
      Hi, I'm <span className="font-semibold text-indigo-600">Venkatesh R</span>, 
      a beginner React developer passionate about building clean, modern, and 
      responsive websites. I enjoy learning new technologies and creating 
      projects that are both functional and visually appealing.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      Outside of coding, I love exploring design trends, improving my skills, 
      and collaborating with others on creative ideas.
    </p>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-20">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
    <p className="text-lg text-gray-700 mb-8">
      Interested in working together or just want to say hi?  
      Fill out the form below or send me an email at{" "}
      <a href="mailto:your@email.com" className="text-indigo-600 hover:underline">
        your@email.com
      </a>.
    </p>

    <form
      action="https://formspree.io/f/yourFormID" // Replace with your Formspree ID or backend
      method="POST"
      className="space-y-4 max-w-xl mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>


    </div>
  )
}

export default App
