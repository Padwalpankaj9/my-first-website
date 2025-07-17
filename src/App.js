function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-3xl mx-auto p-8 space-y-16">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-semibold">Hello, I'm Pankaj! 👋</h1>
          <p className="text-lg text-gray-600">Welcome to my minimal website. I'm learning to code!</p>
        </section>

        <section id="about" className="space-y-2">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-gray-700">This is a place where I share a bit about myself and my journey into web development.</p>
        </section>

        <section id="thoughts" className="space-y-2">
          <h2 className="text-2xl font-semibold">Thoughts</h2>
          <p className="text-gray-700">Sometimes I write down my ideas and observations on programming and life.</p>
        </section>

        <section id="contact" className="space-y-2">
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <p className="text-gray-700">Feel free to reach me at <a href="mailto:pankaj@example.com" className="text-blue-600 underline">pankaj@example.com</a>.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
