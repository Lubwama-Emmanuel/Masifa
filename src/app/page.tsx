"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const [heroRef] = useIntersectionObserver();
  const [statsRef, statsHasIntersected] = useIntersectionObserver();
  const [galleryRef, galleryHasIntersected] = useIntersectionObserver();
  const [testimonialsRef, testimonialsHasIntersected] =
    useIntersectionObserver();
  const [featuresRef, featuresHasIntersected] = useIntersectionObserver();
  const [impactRef, impactHasIntersected] = useIntersectionObserver();
  const [ctaRef] = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 overflow-hidden transition-colors duration-300 pt-16 md:pt-20"
      >
        {/* Floating Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-emerald-200/40 dark:bg-emerald-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-teal-200/40 dark:bg-teal-500/20 rounded-full blur-3xl animate-float-slow delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-52 h-52 bg-cyan-200/40 dark:bg-cyan-500/20 rounded-full blur-3xl animate-float-slow delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-200/40 dark:bg-emerald-500/20 rounded-full blur-3xl animate-float-slow delay-1500"></div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-fade-in-left">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs md:text-sm font-semibold animate-slide-in-top">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                    <span className="hidden sm:inline">
                      OFSTED Registered • Since 2020
                    </span>
                    <span className="sm:hidden">OFSTED Registered</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight font-display">
                    We Grow{" "}
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Together
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-heading">
                    Specialized SEMH/EBD Care for Young People Aged 7-17
                  </p>

                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                    At Masifa, we believe that when the right environment is
                    provided, the ability for growth is possible. We create
                    safe, secure and nurturing environments designed to harness,
                    develop and sustain the hopes, talents and aspirations of
                    children.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href="/homes"
                    className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Discover Aylett Close
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                  <Link
                    href="/referrals"
                    className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 border-2 border-emerald-600 dark:border-emerald-400 rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Make a Referral
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Content - Enhanced Image Gallery */}
              <div className="animate-fade-in-right">
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <Image
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Happy young people"
                        width={300}
                        height={200}
                        className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Learning environment"
                        width={300}
                        height={150}
                        className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-4 pt-8">
                      <Image
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Outdoor activities"
                        width={300}
                        height={150}
                        className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Family environment"
                        width={300}
                        height={200}
                        className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        ref={statsRef}
        className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Making a real difference in young people&apos;s lives every day
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "100%", label: "OFSTED Compliant", icon: "🏆" },
              { number: "24/7", label: "Support Available", icon: "🛡️" },
              { number: "2", label: "Max Young People", icon: "👥" },
              { number: "4+", label: "Years Experience", icon: "📅" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center group ${
                  statsHasIntersected
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                } transition-all duration-1000`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2 font-heading">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-semibold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section
        ref={galleryRef}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Our Beautiful Home
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              A warm, welcoming environment designed to feel like home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                alt: "Comfortable living space",
                title: "Living Areas",
                description:
                  "Spacious, comfortable spaces for relaxation and socializing",
              },
              {
                src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                alt: "Study and learning space",
                title: "Study Rooms",
                description:
                  "Dedicated spaces for learning and educational support",
              },
              {
                src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                alt: "Outdoor activities",
                title: "Outdoor Spaces",
                description:
                  "Beautiful gardens and outdoor areas for recreation",
              },
            ].map((image, index) => (
              <div
                key={index}
                className={`group cursor-pointer ${
                  galleryHasIntersected
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                } transition-all duration-1000`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-bold mb-2 font-heading">
                        {image.title}
                      </h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              What People Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Hear from those who have experienced our care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The team at Masifa has been incredible. They've helped my child grow in ways I never thought possible.",
                author: "Sarah M.",
                role: "Parent",
                avatar: "👩‍💼",
              },
              {
                quote:
                  "The small group setting makes such a difference. It feels like a real family here.",
                author: "James L.",
                role: "Young Person",
                avatar: "👦",
              },
              {
                quote:
                  "Professional, caring, and truly dedicated to making a positive impact in young people's lives.",
                author: "Dr. Emma R.",
                role: "Social Worker",
                avatar: "👩‍⚕️",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  testimonialsHasIntersected
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 font-sans italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section
        ref={featuresRef}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Why Choose Masifa Group?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              We provide specialized care that makes a real difference in young
              people&apos;s lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Home-Like Environment",
                description:
                  "Comfortable, modern facilities that feel like a real home rather than an institution.",
                link: "/homes",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: "👥",
                title: "Small Group Living",
                description:
                  "Maximum of 2 young people ensures personalized attention and a family-like atmosphere.",
                link: "/about",
                color: "from-teal-500 to-teal-600",
              },
              {
                icon: "📚",
                title: "Educational Support",
                description:
                  "Dedicated study areas and support for educational goals and learning.",
                link: "/activities",
                color: "from-blue-500 to-blue-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`${
                  featuresHasIntersected
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                } transition-all duration-1000`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Link href={feature.link} className="block group">
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans mb-4">
                      {feature.description}
                    </p>
                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section
        ref={impactRef}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Our Impact Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Real stories of transformation and growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: "📈",
                  title: "Educational Progress",
                  description:
                    "Young people have shown significant improvement in their academic performance and engagement with learning.",
                  stat: "85% improvement in attendance",
                },
                {
                  icon: "🤝",
                  title: "Social Skills Development",
                  description:
                    "Building meaningful relationships and developing essential life skills for independent living.",
                  stat: "100% of young people report feeling supported",
                },
                {
                  icon: "🏠",
                  title: "Family Reunification",
                  description:
                    "Supporting families to rebuild relationships and work towards positive outcomes together.",
                  stat: "90% successful family contact maintained",
                },
              ].map((story, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 ${
                    impactHasIntersected
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{story.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-heading">
                        {story.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3 font-sans">
                        {story.description}
                      </p>
                      <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        {story.stat}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`relative ${
                impactHasIntersected
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              } transition-all duration-1000`}
              style={{ transitionDelay: "600ms" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Success story"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 font-sans">
              Whether you&apos;re looking to make a referral, join our team, or
              learn more about our services, we&apos;re here to help.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Link href="/referrals" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">📞</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                    Make a Referral
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 font-sans">
                    Contact us to discuss how we can support a young person
                  </p>
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
                    Get Started →
                  </div>
                </div>
              </Link>

              <Link href="/careers" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                    Join Our Team
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 font-sans">
                    Explore career opportunities in children&apos;s residential
                    care
                  </p>
                  <div className="text-teal-600 dark:text-teal-400 font-semibold group-hover:translate-x-2 transition-transform">
                    View Jobs →
                  </div>
                </div>
              </Link>

              <Link href="/contact" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">📧</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                    Get in Touch
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 font-sans">
                    Have questions? We&apos;d love to hear from you
                  </p>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                    Contact Us →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Get in{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              We&apos;re here to help. Contact us for referrals, questions, or
              to learn more about our services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 relative overflow-hidden transition-colors duration-300">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-heading">
                    Send us a message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-sans">
                    We&apos;ll get back to you within 24 hours
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                      >
                        First Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-emerald-100 dark:focus:ring-emerald-900 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg"
                          placeholder="Your first name"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            👤
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                      >
                        Last Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-emerald-100 dark:focus:ring-emerald-900 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg"
                          placeholder="Your last name"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            👤
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-emerald-100 dark:focus:ring-emerald-900 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg"
                        placeholder="your.email@example.com"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          📧
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-emerald-100 dark:focus:ring-emerald-900 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg"
                        placeholder="Your phone number"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          📞
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                    >
                      Subject *
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-emerald-100 dark:focus:ring-emerald-900 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg appearance-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="referral">Make a Referral</option>
                        <option value="general">General Inquiry</option>
                        <option value="careers">Career Opportunities</option>
                        <option value="activities">
                          Activities Information
                        </option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          📋
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                    >
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-emerald-100 dark:focus:ring-emerald-900 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg resize-none"
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                      <div className="absolute top-3 right-3">
                        <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          💬
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group relative w-full py-4 px-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center">
                        <span className="mr-2">Send Message</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        24/7 Emergency Line
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        For urgent referrals and emergency situations
                      </p>
                      <p className="text-red-600 dark:text-red-400 font-semibold mt-2">
                        Available around the clock
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Email Support
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        General inquiries and referrals
                      </p>
                      <p className="text-teal-600 dark:text-teal-400 font-semibold mt-2">
                        info@masifagroup.co.uk
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Location
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Canvey Island, Essex
                      </p>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2">
                        By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300 font-sans">
                      Monday - Friday
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      9:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300 font-sans">
                      Saturday
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      10:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300 font-sans">
                      Sunday
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Emergency Only
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
