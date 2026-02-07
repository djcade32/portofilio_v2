import AboutCard from "@/components/AboutCard";
import React from "react";
import { CodeXml, ChartLine, Palette, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-5xl font-bold mt-4 mb-6">Building the Future, One Line at a Time</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <AboutCard
            title="Developer & Builder"
            description="I'm a software developer passionate about creating productivity apps, financial tools,
            and AI-powered platforms. With a focus on clean code and exceptional user experiences, I
            transform complex problems into elegant solutions."
            icon={CodeXml}
          />
          <AboutCard
            title="Finance Enthusiast"
            description="My passion for stock market analysis and personal finance drives me to build tools that empower users to make informed financial decisions. I believe in the intersection of technology and finance to create meaningful impact."
            icon={ChartLine}
          />
          <AboutCard
            title="Design-Driven"
            description="Every product I build combines technical excellence with beautiful, intuitive design. I believe that great software should not only work flawlessly but also delight users at every interaction."
            icon={Palette}
            filledIcon
          />
          <AboutCard
            title="Impact Focused"
            description="I'm driven by creating products that make a real difference in people's lives. From productivity tools to financial platforms, my goal is to build software that empowers and inspires users to achieve more."
            icon={Rocket}
            filledIcon
          />
        </div>
      </div>
    </section>
  );
};

export default About;
