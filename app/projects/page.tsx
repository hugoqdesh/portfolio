import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    image: "/projects/",
    name: "InstGrow",
    description: "",
    url: "https://instgrow.vercel.app",
  },
  {
    image: "/projects/digestify.png",
    name: "Digestify",
    description:
      "This web application provides a comprehensive set of tools for hashing, encryption, key generation, and more.",
    url: "https://digestify.dev",
  },
  {
    image: "/projects/portfolio.png",
    name: "Portfolio",
    description: "This is the portfolio you are currently looking at.",
    url: "https://www.hugoqdesh.lol/",
  },
  {
    image: "/projects/zylo.png",
    name: "Zylo",
    description: "Zylo is a link in bio service for social media platforms.",
    url: "https://zylo-bio.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <header className="mb-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl mt-3">Projects</h1>
        </div>
      </header>

      <section className="space-y-6 border rounded p-4">
        {projects.map((project, index) => (
          <Link key={index} href={project.url} passHref>
            <div className="block rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <div className="flex items-center">
                <div className="w-1/3 relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="rounded-lg"
                    objectFit="cover"
                  />
                </div>

                <div className="w-2/3 pl-4">
                  <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
