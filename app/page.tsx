import Link from "next/link";
import {
  MapPin,
  BriefcaseBusiness,
  ArrowRight,
  MoveUpRight,
  Mail,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";
import { Background } from "@/components/background";

export default function Home() {
  return (
    <Background>
      <main>
        <section className="max-w-2xl mx-auto py-20 px-4 md:px-0 flex flex-col gap-16 text-white/80">
          <div>
            <h1 className="text-xl pb-4 text-white/90 tracking-wide">
              hugoqdesh
            </h1>
            <div className="flex flex-row gap-6 pb-4">
              <p className="flex items-center gap-1">
                <MapPin size={18} /> Estonia
              </p>
              <p className="flex items-center gap-1">
                <BriefcaseBusiness size={18} /> Developer
              </p>
            </div>
            <p>
              Im a 17 y/o full stack web developer while also learning
              cybersecurity. <br /> Besides coding all day i enjoy training Judo
              and Muay Thai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm">Building</p>

              <p>Currently not building anything.</p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm">Projects</p>

              <div>
                <Link
                  href="https://www.hugoqdesh.lol/"
                  className="border-b-2 border-white/10 w-max flex items-center gap-1 text-white/90"
                >
                  Portfolio
                </Link>
                <p className="mt-1">Your on here rn. 😊</p>
              </div>

              <div>
                <Link
                  href="https://www.digestify.dev/"
                  className="border-b-2 border-white/10 w-max flex items-center gap-1 text-white/90"
                >
                  Digestify
                </Link>
                <p className="mt-1">
                  Hashing, encryption, key generation, and more.
                </p>

                <Link
                  href="https://github.com/hugoqdesh"
                  className="flex items-center gap-0.5 border-b-2 border-white/10 w-max mt-6"
                >
                  All projects <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xl pb-6 text-white/90">connect</h1>
            <div className="flex flex-col md:flex-row gap-8">
              <Link
                href="mailto:gitjohan5@gmail.com"
                className="flex items-center gap-2 hover:bg-white/5 p-2 rounded hover:text-white transition duration-200"
              >
                <Mail size={18} /> Email <MoveUpRight size={16} />
              </Link>
              <Link
                href="https://x.com/hugoqdesh"
                className="flex items-center gap-2 hover:bg-white/5 p-2 rounded hover:text-white transition duration-200"
              >
                <Twitter size={18} /> X.com <MoveUpRight size={16} />
              </Link>
              <Link
                href="https://github.com/hugoqdesh"
                className="flex items-center gap-2 hover:bg-white/5 p-2 rounded hover:text-white transition duration-200"
              >
                <Github size={18} /> Github <MoveUpRight size={16} />
              </Link>
              <Link
                href="https://www.instagram.com/hugoqdesh"
                className="flex items-center gap-2 hover:bg-white/5 p-2 rounded hover:text-white transition duration-200"
              >
                <Instagram size={18} /> Instagram <MoveUpRight size={16} />
              </Link>
            </div>
            <p className="mt-12">
              Or add me on discord <span className="italic">@hugoqdesh</span>
            </p>
          </div>
        </section>

        <footer className="border-t border-white/10 mt-14">
          <div className="max-w-2xl px-4 md:px-0 mx-auto flex justify-between py-6 text-sm text-white/50">
            <p>Shine, constantly and steadily.</p>
            <p>2024</p>
          </div>
        </footer>
      </main>
    </Background>
  );
}
