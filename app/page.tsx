export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen p-6">
      <div className=" p-8 rounded-2xl  w-full max-w-md text-center animate-fade-in">
        <h1 className="text-3xl font-bold mb-4">👋 Platform Under Development</h1>
        <p className="text-brown mb-6">
          I&apos;am building a place... <strong>makers and needers meet</strong>.
          Post your idea, find solutions, or build the next big thing.
        </p>

        <a
          href="https://buymeacoffee.com/yourname"
          target="_blank"
          className="bg-yellow-400 text-black font-semibold px-5 py-3 rounded-full shadow hover:bg-yellow-300 transition"
        >
          ☕ Buy me a coffee
        </a>

        <p className="text-xs mt-6 text-brown/70">Made by someone who needed this.</p>
      </div>
    </main>
  );
}
