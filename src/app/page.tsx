"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Instagram,
  PinIcon as Pinterest,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhilosophyModalOpen, setIsPhilosophyModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-medium tracking-wide"
          >
            Withyn
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#vision"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Vision
            </Link>
            <Link
              href="#process"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Process
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Your Design Journey
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden border-b bg-background shadow-lg">
          <div className="container py-4 space-y-3">
            <Link
              href="#"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#vision"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Vision
            </Link>
            <Link
              href="#process"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#contact"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-4"
              onClick={() => {
                setIsMenuOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Your Design Journey
            </Button>
          </div>
        </div>
      )}

      {/* Design Philosophy Modal */}
      {isPhilosophyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsPhilosophyModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="font-serif text-2xl font-light text-[#6b5d54]">
                My Design Philosophy
              </h3>
              <button
                onClick={() => setIsPhilosophyModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div className="text-center mb-6">
                <p className="font-serif text-lg italic text-[#6b5d54] leading-relaxed">
                  &ldquo;Thoughtfully designed, effortlessly lived in.&rdquo;
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#6b5d54] mb-2">
                    Authentic Expression
                  </h4>
                  <p className="text-gray-600">
                    Every space should reflect the unique personality and
                    lifestyle of those who inhabit it. I believe in creating
                    designs that feel genuinely yours, not replicas of showroom
                    perfection.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#6b5d54] mb-2">
                    Thoughtful Functionality
                  </h4>
                  <p className="text-gray-600">
                    Beautiful design means nothing if it doesn&apos;t work for
                    your daily life. I prioritize creating spaces that are as
                    functional as they are stunning.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#6b5d54] mb-2">
                    Sustainable Beauty
                  </h4>
                  <p className="text-gray-600">
                    I&apos;m committed to making choices that are beautiful
                    today and responsible for tomorrow. This means selecting
                    quality pieces that will stand the test of time.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#6b5d54] mb-2">
                    Fresh Perspective
                  </h4>
                  <p className="text-gray-600">
                    As a newly graduated designer, I bring current trends,
                    innovative solutions, and an eagerness to push creative
                    boundaries while respecting timeless principles.
                  </p>
                </div>
              </div>

              <div className="border-t pt-6 text-center">
                <p className="text-gray-600 mb-4">
                  Ready to create a space that truly reflects you?
                </p>
                <Button
                  className="bg-[#8b7355] hover:bg-[#6b5d54] text-white"
                  onClick={() => {
                    setIsPhilosophyModalOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Let&apos;s Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] w-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Elegant interior space"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-4">
              Withyn
            </h1>
            <p className="max-w-md text-lg md:text-xl font-light mb-8">
              Designing spaces that inspire from within
            </p>
            <Button
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Your Design Journey
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* About Section */}

        <section id="about" className="py-24 bg-[#f8f5f2]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square relative overflow-hidden rounded-full">
                  <Image
                    src="/headshots/kiki_plytas_headshot_01.jpg"
                    alt="Kiki Plytas"
                    fill
                    className="object-cover object-left-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
                  About Kiki
                </h2>
                <p className="text-muted-foreground mb-4">
                  At Withyn by Kiki, my mission is to create spaces that not
                  only look beautiful but feel like home. With years of hands-on
                  experience helping friends and family bring their visions to
                  life-from complete renovations to thoughtful styling
                  touches-I&apos;ve built a practice grounded in trust,
                  creativity, and attention to detail.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ater formalizing my training through The Interior Design
                  Institute, I combined my business acumen with my lifelong
                  passion for design to offer clients a seamless and inspired
                  experience. Whether you&apos;re redesigning a single room or
                  embarking on a full transformation, I&apos;m committed to
                  delivering spaces that reflect your style, elevate your
                  everyday, and feel effortlessly cohesive.
                </p>
                <p className="text-muted-foreground mb-4">
                  My passion for creating beautiful, functional spaces drives me
                  to constantly explore new ideas and approaches. I believe that
                  great design should not only look stunning but also enhance
                  how you live and feel in your space.
                </p>
                <p className="text-muted-foreground mb-6">
                  As a newly graduated interior designer, I&apos;m eager to
                  bring your vision to life with enthusiasm, creativity, and
                  meticulous attention to detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline"
                    className="border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white"
                    onClick={() => setIsPhilosophyModalOpen(true)}
                  >
                    My Design Philosophy
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-[#8b7355]"
                    onClick={() =>
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Inspiration Section */}
        <section id="vision" className="py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
                Vision & Inspiration
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These spaces inspire our design approach. While my portfolio is
                growing, I&apos;m excited to share the aesthetics and styles
                that influence my work.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Modern Minimalist",
                  image: "/vision-board/modern-minimalist/Firefly_modern minimal style interior design example for a chair with a lamp. Use dark stone 409019.jpg",
                },
                {
                  name: "Cozy Contemporary",
                  image: "/vision-board/cozy-contemporary/Firefly_modern cozy, contemporary interior design concept for a studio loft bedroom with soft 772965 (1).jpg",
                },
                {
                  name: "Luxe Traditional",
                  image: "/vision-board/luxe-traditional/Firefly_modern, luxe traditional interior design concept for a studio loft kitchen with luxur 772965.jpg",
                },
                {
                  name: "Scandinavian Simplicity",
                  image: "/vision-board/scandinavian-simplicity/Firefly_modern scandinavian, contemporary minimalist interior design concept for a studio lof 130254.jpg",
                },
                {
                  name: "Bohemian Elegance",
                  image: "/vision-board/bohemian-elegance/Firefly_bohemian elegance interior design concept of a bedroom 772965.jpg",
                },
                {
                  name: "Urban Industrial",
                  image: "/vision-board/urban-industrial/Firefly_urban industrial interior design concept of a bedroom 684734.jpg",
                },
              ].map((style, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                >
                  <Image
                    src={style.image || "/placeholder.svg"}
                    alt={style.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white font-medium text-lg">
                      {style.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-[#f8f5f2]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
                Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tailored design solutions to transform your space into a
                reflection of your personality and lifestyle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Interior Design Consultation",
                  description:
                    "A comprehensive assessment of your space with personalized recommendations to enhance functionality and aesthetics.",
                },
                {
                  title: "Space Planning & Layout",
                  description:
                    "Strategic arrangement of furniture and elements to optimize flow, functionality, and visual harmony.",
                },
                {
                  title: "Color & Material Selection",
                  description:
                    "Curated palettes and material combinations that reflect your style and create the desired atmosphere.",
                },
                {
                  title: "Design Concept Development",
                  description:
                    "Creative direction and mood boards that capture your vision and guide the design process.",
                },
                {
                  title: "Shopping & Styling Services",
                  description:
                    "Sourcing of furniture, accessories, and décor items that perfectly complement your space.",
                },
                {
                  title: "Implementation Support",
                  description:
                    "Guidance and coordination during the execution phase to ensure your design vision comes to life.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
                My Design Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A thoughtful, collaborative approach that transforms your vision
                into reality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description:
                    "We'll discuss your needs, preferences, budget, and timeline to establish a solid foundation for your project.",
                },
                {
                  step: "02",
                  title: "Concept Development",
                  description:
                    "I'll create mood boards and preliminary designs that capture your vision and set the direction for your space.",
                },
                {
                  step: "03",
                  title: "Design Planning",
                  description:
                    "Detailed plans, material selections, and specifications will be developed to bring your concept to life.",
                },
                {
                  step: "04",
                  title: "Implementation Support",
                  description:
                    "I'll guide you through the execution phase, ensuring that every detail aligns with the design vision.",
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#d4c4b0]/30 flex items-center justify-center mb-6">
                    <span className="text-[#8b7355] font-medium">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-3">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-[#6b5d54] text-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
                Words of Encouragement
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                As I begin my design journey, I&apos;m grateful for the support
                and confidence from mentors and peers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <p className="italic mb-6 text-white/90">
                  &ldquo;Kiki demonstrates exceptional creativity and attention
                  to detail. Her fresh perspective and innovative approach to
                  design challenges make her a promising talent in the interior
                  design field.&rdquo;
                </p>
                <div>
                  <p className="font-medium">Professor Sarah Johnson</p>
                  <p className="text-white/70 text-sm">
                    Design Department Chair
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <p className="italic mb-6 text-white/90">
                  &ldquo;Working with Kiki on student projects revealed her
                  unique ability to balance aesthetics with functionality. Her
                  designs are not only beautiful but thoughtfully consider how
                  people interact with spaces.&rdquo;
                </p>
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-white/70 text-sm">Design Studio Mentor</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
                  Let&apos;s Start the Conversation
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Ready to transform your space? I&apos;m excited to hear about
                  your project and how we can create beautiful beginnings
                  together.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-[#8b7355]" />
                    <span>info@withyn.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-[#8b7355]" />
                    <span>(416) 826-4471</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-[#8b7355]" />
                    <span>Toronto, ON</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/"
                    className="h-10 w-10 rounded-full bg-[#d4c4b0]/30 flex items-center justify-center hover:bg-[#8b7355] hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://pinterest.com"
                    className="h-10 w-10 rounded-full bg-[#d4c4b0]/30 flex items-center justify-center hover:bg-[#8b7355] hover:text-white transition-colors"
                  >
                    <Pinterest className="h-5 w-5" />
                    <span className="sr-only">Pinterest</span>
                  </a>
                </div>
              </div>
              <div className="bg-[#f8f5f2] p-8 rounded-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can I help you?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project"
                      rows={5}
                    />
                  </div>
                  <Button className="w-full bg-[#8b7355] hover:bg-[#6b5d54]">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 Withyn Design. All rights reserved.
              </p>
            </div>
            <nav className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
