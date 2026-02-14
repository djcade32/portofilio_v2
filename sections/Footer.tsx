import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import SOCIALS from "@/content/socials";

const { github, linkedin, x } = SOCIALS;
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer id="footer" className="bg-card border-t border-secondary py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gradient mb-2">Norman Cade</div>
            <p className="text-gray-500 text-sm">Software Developer &amp; Product Builder</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href={x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition"
            >
              <FaSquareXTwitter className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary text-center">
          <p className="text-gray-500 text-sm">© {currentYear} Norman Cade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
