import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <img src={logo} className="mx-auto h-32 w-32 animate-spin" alt="logo" />
        <h1 className="text-4xl font-bold text-white mt-8 mb-4">
          Hello, I'm Pankaj! 👋
        </h1>
        <p className="text-xl text-blue-200 mb-8">
          Welcome to my first website. I'm learning to code!
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Learn More About Me
        </button>
      </div>
    </div>
  );
}

export default App;