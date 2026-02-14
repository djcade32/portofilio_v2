"use client";

import Button from "@/components/core/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const parent = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.15,
    },
  },
};

const step1 = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const step2 = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: 0.15 },
  },
};

const step2Image = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE, delay: 0.15 },
  },
};

const step3 = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: 0.35 },
  },
};

const Hero = () => {
  return (
    <section id="hero" className="chart-pattern min-h-175 relative overflow-hidden">
      <div className="absolute bg-linear-to-b inset-0 to-background via-background/50 from-transparent" />

      <svg className="sparkline" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          className="stroke-current fill-none"
          d="M0,50 Q150,20 300,45 T600,40 T900,55 T1200,45"
        />
      </svg>

      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <motion.div
        variants={parent}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 gap-16 items-center mt-5"
      >
        <div>
          <motion.div variants={step1} className="mb-4 flex items-center gap-3">
            <div className="w-12 h-0.5 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Software Developer
            </span>
          </motion.div>

          <motion.h1 variants={step2} className="text-7xl font-bold leading-tight mb-6">
            Hi, I&apos;m <span className="text-gradient">Norman Cade</span>
          </motion.h1>

          <motion.p variants={step3} className="text-2xl text-gray-400 mb-8">
            Software Developer &amp; Product Builder
          </motion.p>

          <motion.p variants={step3} className="text-lg text-gray-500 mb-12 max-w-xl">
            I create intuitive digital experiences powered by design, data, and innovation.
          </motion.p>

          <motion.div variants={step3} className="flex items-center gap-6">
            <Button asChild className="flex gap-2 lg:px-8 py-4">
              <Link href="#projects" className="text-nowrap">
                View My Work
                <ArrowRight className="hidden sm:block" />
              </Link>
            </Button>

            <Button asChild className="lg:px-8 py-4" variant="Ghost">
              <Link href="#contact" className="text-nowrap">
                Get In Touch
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div variants={step2Image} className="hidden sm:block">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent rounded-2xl blur-2xl" />

            <div className="relative h-150 overflow-hidden rounded-2xl border border-card glow">
              <Image
                width={574}
                height={598}
                className="w-full h-full object-cover"
                src="/hero_img.jpeg"
                alt="Photo of Norman Cade"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-card border border-secondary rounded-xl p-6 glow">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
