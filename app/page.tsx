import Image from "next/image";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#0881a3" }}
    >
      <div className="flex flex-col items-center gap-8">
        <Image
          src="/logo-white.png"
          alt="Logo"
          width={300}
          height={300}
          priority
        />

        <div className="flex gap-6 items-center">
          <a
            href="https://github.com/biga816"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white text-[#0881a3] rounded-full hover:bg-gray-100 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://x.com/biga816"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white text-[#0881a3] rounded-full hover:bg-gray-100 transition-colors"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={28} />
          </a>
          <a
            href="https://blog.tanakas.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-[#0881a3] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}
