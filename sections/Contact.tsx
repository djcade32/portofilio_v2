import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SOCIAL_ICON_SIZE = "text-2xl";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative chart-pattern">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <SectionTitle
            title="Get In Touch"
            subtitle="Let's Build Something Amazing"
            className="mb-6!"
          />

          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        <div className="bg-card border border-secondary rounded-2xl p-10 glow">
          <ContactForm />

          <div className="mt-10 pt-10 border-t border-secondary">
            <div className="flex items-center justify-center gap-8">
              <a
                href="https://github.com/djcade32"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-accent transition"
              >
                <FaGithub className={SOCIAL_ICON_SIZE} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/norman-cade-268818167/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-accent transition"
              >
                <FaLinkedin className={SOCIAL_ICON_SIZE} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/n_cade32"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-accent transition"
              >
                <FaSquareXTwitter className={SOCIAL_ICON_SIZE} />
                <span>X</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
