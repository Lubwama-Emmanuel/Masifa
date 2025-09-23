"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  // Intersection observers for each section
  const [aboutRef, aboutIntersecting, aboutHasIntersected] =
    useIntersectionObserver();
  const [homesRef, homesIntersecting, homesHasIntersected] =
    useIntersectionObserver();
  const [teamRef, teamIntersecting, teamHasIntersected] =
    useIntersectionObserver();
  const [careersRef, careersIntersecting, careersHasIntersected] =
    useIntersectionObserver();
  const [contactRef, contactIntersecting, contactHasIntersected] =
    useIntersectionObserver();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Set scrolling state based on scroll position, not just scroll activity
      setIsScrolling(scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "homes", "team", "careers", "contact"];
      const scrollPosition = scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Floating Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolling
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20"
            : "bg-transparent backdrop-blur-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent font-heading">
                Masifa Group
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "homes", label: "Our Homes" },
                { id: "team", label: "Team" },
                { id: "careers", label: "Careers" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden"
      >
        {/* Floating Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-emerald-200/40 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-teal-200/40 rounded-full blur-3xl animate-float-slow delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-52 h-52 bg-cyan-200/40 rounded-full blur-3xl animate-float-slow delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl animate-float-slow delay-1500"></div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-fade-in-left">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold animate-slide-in-top">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                    OFSTED Registered • Since 2020
                  </div>

                  <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight font-display">
                    Where Hope Meets{" "}
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Home
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-heading">
                    Empowering Young Lives, Building Brighter Futures
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed font-sans">
                    Creating safe, nurturing environments where young people can
                    flourish, grow, and build the foundation for their brightest
                    future.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection("homes")}
                    className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Discover Our Homes
                    <span className="absolute inset-0 rounded-2xl ring-2 ring-offset-2 ring-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-2xl font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-heading"
                  >
                    Get In Touch
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 font-display">
                      7-17
                    </div>
                    <div className="text-sm text-gray-600 font-sans">
                      Age Range
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 font-display">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600 font-sans">
                      Care Support
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 font-display">
                      100%
                    </div>
                    <div className="text-sm text-gray-600 font-sans">
                      Dedicated
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative animate-fade-in-right">
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Happy children and caregivers in a supportive environment"
                      width={600}
                      height={700}
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent"></div>
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-float-slow">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 font-heading">
                          Safe Homes
                        </div>
                        <div className="text-sm text-gray-600 font-sans">
                          OFSTED Approved
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -bottom-6 -right-6 bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl shadow-xl text-white animate-float-slow"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">❤️</span>
                      </div>
                      <div>
                        <div className="font-bold font-heading">
                          Caring Team
                        </div>
                        <div className="text-sm opacity-90 font-sans">
                          Expert Professionals
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-1/4 -right-8 w-16 h-16 bg-emerald-200 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-1/4 -left-8 w-20 h-20 bg-teal-200 rounded-full blur-xl animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className={`py-24 bg-white relative overflow-hidden transition-all duration-1000 ${
          aboutHasIntersected
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-20 transition-all duration-1000 delay-300 ${
              aboutHasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
                <h2 className="text-6xl font-bold text-gray-900 mb-8 font-display text-center">
                  Our{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-gradient-shift">
                    Mission
                  </span>
                </h2>
                <p className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-sans text-center mb-8">
                  At Masifa Group, we believe every young person deserves a
                  chance to thrive. We create environments where hope, healing,
                  and growth flourish.
                </p>
                <div className="text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full text-lg font-semibold shadow-lg animate-pulse-glow">
                    <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
                    Transforming Lives, Building Futures
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 font-display">
                  4+
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 font-display">
                  50+
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Young Lives Transformed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 font-display">
                  100%
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  OFSTED Compliant
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "🏠",
                title: "Safe Havens",
                description:
                  "Creating secure, loving homes where young people feel valued and protected.",
                details:
                  "Our homes provide 24/7 supervision, secure environments, and personalized care plans tailored to each young person&apos;s needs.",
                features: [
                  "24/7 Supervision",
                  "Secure Environment",
                  "Personalized Care",
                ],
                image:
                  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
              {
                icon: "🌱",
                title: "Growth & Development",
                description:
                  "Nurturing potential through education, therapy, and life skills development.",
                details:
                  "We provide educational support, therapeutic interventions, and essential life skills training to prepare young people for independent living.",
                features: [
                  "Educational Support",
                  "Therapeutic Care",
                  "Life Skills Training",
                ],
                image:
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
              {
                icon: "🤝",
                title: "Community Support",
                description:
                  "Building bridges with families, schools, and communities for lasting success.",
                details:
                  "We work closely with families, schools, and local communities to ensure young people have the support network they need for long-term success.",
                features: [
                  "Family Reunification",
                  "School Partnerships",
                  "Community Integration",
                ],
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group text-center p-8 rounded-3xl hover:bg-gradient-to-br from-emerald-50 to-teal-50 transition-all duration-500 transform hover:scale-105 ${
                  aboutHasIntersected
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDelay: `${index * 200 + 500}ms`,
                  transitionDuration: "800ms",
                }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent"></div>
                </div>
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-sans mb-4">
                  {item.description}
                </p>
                <p className="text-sm text-gray-500 mb-4 font-sans">
                  {item.details}
                </p>
                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-emerald-600"
                    >
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Homes Section */}
      <section
        id="homes"
        ref={homesRef}
        className={`py-24 bg-gradient-to-br from-emerald-50 to-teal-50 relative transition-all duration-1000 ${
          homesHasIntersected
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-20 transition-all duration-1000 delay-300 ${
              homesHasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-display">
              Aylett Close
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              A beautiful, purpose-built home where young people aged 7-17 can
              find stability, support, and the tools they need to succeed.
            </p>
            <div className="mt-8 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="text-2xl font-bold text-emerald-600 font-display">
                  3
                </div>
                <div className="text-sm text-gray-600 font-sans">Bedrooms</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="text-2xl font-bold text-teal-600 font-display">
                  24/7
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Care Support
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="text-2xl font-bold text-cyan-600 font-display">
                  OFSTED
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Registered
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="text-2xl font-bold text-emerald-600 font-display">
                  7-17
                </div>
                <div className="text-sm text-gray-600 font-sans">Age Range</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div
                className={`p-8 bg-white rounded-3xl shadow-xl transition-all duration-800 ${
                  homesHasIntersected
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div className="relative mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Beautiful home exterior"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                  🏡 Home Features
                </h3>
                <ul className="space-y-3 text-gray-600 font-sans">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    3 bedrooms with private spaces
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Beautiful garden and outdoor spaces
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Study areas and quiet spaces
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Modern facilities and safety features
                  </li>
                </ul>
              </div>

              <div
                className={`p-8 bg-white rounded-3xl shadow-xl transition-all duration-800 ${
                  homesHasIntersected
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <div className="relative mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Canvey Island location"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                  📍 Location
                </h3>
                <p className="text-gray-600 mb-4 font-sans">
                  6 Aylett Close, Canvey Island, SS8 8AN
                </p>
                <p className="text-gray-600 font-sans">
                  Perfectly positioned with easy access to:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600 font-sans">
                  <li>• Local schools and colleges</li>
                  <li>• Shopping centers and amenities</li>
                  <li>• Parks and recreational facilities</li>
                  <li>• Transport links to London</li>
                </ul>
              </div>
            </div>

            <div
              className={`relative transition-all duration-800 ${
                homesHasIntersected
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-6 font-display">
                  Our Approach
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-rotate-slow">
                      <span className="text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 font-heading">
                        Individual Care Plans
                      </h4>
                      <p className="text-sm opacity-90 font-sans">
                        Tailored support for each young person&apos;s unique
                        needs and goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-rotate-slow"
                      style={{ animationDelay: "2s" }}
                    >
                      <span className="text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 font-heading">
                        Educational Support
                      </h4>
                      <p className="text-sm opacity-90 font-sans">
                        Dedicated support for academic achievement and personal
                        development.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-rotate-slow"
                      style={{ animationDelay: "4s" }}
                    >
                      <span className="text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 font-heading">
                        Life Skills Development
                      </h4>
                      <p className="text-sm opacity-90 font-sans">
                        Preparing young people for independence and future
                        success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* House Gallery */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                Aylett Close Gallery
              </h3>
              <p className="text-lg text-gray-600 font-sans">
                Take a look inside our beautiful, purpose-built home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Beautiful home exterior",
                  title: "Home Exterior",
                  description: "Welcoming facade with secure entrance",
                },
                {
                  src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Comfortable living room",
                  title: "Living Room",
                  description: "Spacious and comfortable common area",
                },
                {
                  src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Modern kitchen",
                  title: "Kitchen",
                  description: "Fully equipped modern kitchen",
                },
                {
                  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Study area",
                  title: "Study Area",
                  description: "Quiet space for learning and homework",
                },
                {
                  src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Bedroom",
                  title: "Bedroom",
                  description: "Private and comfortable sleeping area",
                },
                {
                  src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Garden area",
                  title: "Garden",
                  description: "Beautiful outdoor space for relaxation",
                },
              ].map((room, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                    homesHasIntersected
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 100 + 200}ms`,
                    transitionDuration: "800ms",
                  }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={room.src}
                      alt={room.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-lg font-bold mb-1 font-heading">
                        {room.title}
                      </h4>
                      <p className="text-sm opacity-90 font-sans">
                        {room.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        ref={teamRef}
        className={`py-24 bg-white relative transition-all duration-1000 ${
          teamHasIntersected
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-display">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Experienced professionals dedicated to making a real difference in
              young people&apos;s lives.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 font-display">
                  15+
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 font-display">
                  100%
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Qualified Staff
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 font-display">
                  24/7
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Support Available
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl animate-scale-in">
              <div className="text-center">
                <div className="relative mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Ahmed Jama"
                    width={200}
                    height={200}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-emerald-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
                  Ahmed Jama
                </h3>
                <p className="text-emerald-600 font-semibold mb-4 font-sans">
                  Registered Manager
                </p>
                <p className="text-gray-600 mb-4 font-sans">
                  With 15 years of experience in social care, Ahmed leads our
                  team with compassion and expertise.
                </p>
                <div className="text-sm text-gray-500 font-sans">
                  <p>• BA (Hons) Social Work - Bournemouth University</p>
                  <p>• Post Graduate Certificate in Mental Health</p>
                  <p>• Level 5 Diploma in Leadership and Management</p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Farxiya Ismail"
                    width={200}
                    height={200}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-teal-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
                  Farxiya Ismail
                </h3>
                <p className="text-teal-600 font-semibold mb-4 font-sans">
                  Responsible Individual
                </p>
                <p className="text-gray-600 mb-4 font-sans">
                  With 20 years of experience, Farxiya ensures the highest
                  standards of care and compliance.
                </p>
                <div className="text-sm text-gray-500 font-sans">
                  <p>• Business and Management Training</p>
                  <p>• Level 5 Health and Social Care</p>
                  <p>• Citizens Advice Bureau Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section
        id="careers"
        ref={careersRef}
        className={`py-24 bg-gradient-to-br from-emerald-50 to-teal-50 relative transition-all duration-1000 ${
          careersHasIntersected
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-display">
              Join Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Be part of a team that&apos;s making a real difference in young
              people&apos;s lives.
            </p>
            <div className="mt-8 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="text-2xl font-bold text-emerald-600 font-display">
                  £25k+
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Starting Salary
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="text-2xl font-bold text-teal-600 font-display">
                  28
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Days Holiday
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="text-2xl font-bold text-cyan-600 font-display">
                  100%
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Training Provided
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="text-2xl font-bold text-emerald-600 font-display">
                  Flexible
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Working Hours
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-xl animate-fade-in-left">
              <div className="relative mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Team collaboration"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                Why Work With Us?
              </h3>
              <div className="space-y-4">
                {[
                  "Meaningful work that changes lives",
                  "Comprehensive training and development",
                  "Supportive team environment",
                  "Competitive benefits package",
                  "Opportunities for career growth",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse-glow">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-sans">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-3xl text-white animate-fade-in-right">
              <h3 className="text-2xl font-bold mb-6 font-heading">
                Current Opportunities
              </h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-xl animate-scale-in">
                  <h4 className="font-semibold mb-2 font-heading">
                    Residential Care Workers
                  </h4>
                  <p className="text-sm opacity-90 font-sans">
                    Full-time positions available for experienced care workers.
                  </p>
                </div>
                <div
                  className="bg-white/20 p-4 rounded-xl animate-scale-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h4 className="font-semibold mb-2 font-heading">
                    Shift Leaders
                  </h4>
                  <p className="text-sm opacity-90 font-sans">
                    Leadership opportunities for qualified professionals.
                  </p>
                </div>
                <div
                  className="bg-white/20 p-4 rounded-xl animate-scale-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <h4 className="font-semibold mb-2 font-heading">
                    Bank Staff
                  </h4>
                  <p className="text-sm opacity-90 font-sans">
                    Flexible working arrangements for qualified staff.
                  </p>
                </div>
              </div>
              <button className="mt-6 w-full bg-white text-emerald-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors animate-shimmer">
                View All Positions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className={`py-24 bg-white relative transition-all duration-1000 ${
          contactHasIntersected
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-display">
              Get In{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Ready to make a referral or learn more about our services?
              We&apos;re here to help.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <div className="text-2xl font-bold text-emerald-600 font-display">
                  24/7
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Emergency Line
                </div>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-xl">
                <div className="text-2xl font-bold text-teal-600 font-display">
                  48hr
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Response Time
                </div>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-xl">
                <div className="text-2xl font-bold text-cyan-600 font-display">
                  100%
                </div>
                <div className="text-sm text-gray-600 font-sans">
                  Confidential
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl animate-fade-in-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce-gentle">
                      <span className="text-white">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 font-heading">
                        Address
                      </p>
                      <p className="text-gray-600 font-sans">
                        6 Aylett Close, Canvey Island, SS8 8AN
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce-gentle"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 font-heading">
                        Email
                      </p>
                      <p className="text-gray-600 font-sans">
                        info@masifagroupltd.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce-gentle"
                      style={{ animationDelay: "1s" }}
                    >
                      <span className="text-white">👤</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 font-heading">
                        Manager
                      </p>
                      <p className="text-gray-600 font-sans">
                        Ahmed Jama - manager@masifagroupltd.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-3xl text-white animate-fade-in-right">
              <h3 className="text-2xl font-bold mb-6 font-heading">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-sans"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-sans"
                  />
                </div>
                <div>
                  <select className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 font-sans">
                    <option value="" className="text-gray-800">
                      Reason for Contact
                    </option>
                    <option value="referral" className="text-gray-800">
                      Make a Referral
                    </option>
                    <option value="careers" className="text-gray-800">
                      Career Opportunities
                    </option>
                    <option value="general" className="text-gray-800">
                      General Inquiry
                    </option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none font-sans"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-emerald-600 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors animate-shimmer font-heading"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-2xl font-bold font-heading">
                  Masifa Group Ltd
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md font-sans">
                Creating safe, nurturing environments where young people can
                flourish, grow, and build the foundation for their brightest
                future.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer animate-bounce-gentle">
                  <span className="text-sm">📧</span>
                </div>
                <div
                  className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer animate-bounce-gentle"
                  style={{ animationDelay: "0.5s" }}
                >
                  <span className="text-sm">📞</span>
                </div>
                <div
                  className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer animate-bounce-gentle"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-sm">📍</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading">
                Quick Links
              </h3>
              <div className="space-y-2">
                {["About Us", "Our Homes", "Team", "Careers", "Contact"].map(
                  (link) => (
                    <button
                      key={link}
                      onClick={() =>
                        scrollToSection(link.toLowerCase().replace(" ", ""))
                      }
                      className="block text-gray-300 hover:text-white transition-colors font-sans"
                    >
                      {link}
                    </button>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading">
                Contact Info
              </h3>
              <div className="space-y-2 text-gray-300 font-sans">
                <p>6 Aylett Close</p>
                <p>Canvey Island, SS8 8AN</p>
                <p>info@masifagroupltd.com</p>
                <p>Manager: Ahmed Jama</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300 font-sans">
            <p>&copy; 2025 Masifa Group Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
