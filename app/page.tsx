'use client';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-10">
      <div className="w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-black">👋 Platform Under Development</h1>

        <p className="text-gray-700">
          I am building a place where <strong>makers and needers meet</strong>.
          Post your idea, find solutions, or build the next big thing.
        </p>

        <a
          href="https://ko-fi.com/T6T81IG0V9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-300 text-black font-semibold py-3 px-6 rounded-full shadow hover:scale-105 transition-transform"
        >
          💛 Support me on Ko-fi
        </a>

        <p className="text-sm text-gray-500">Made by someone who needed this.</p>
      </div>
    </main>
  );
}
