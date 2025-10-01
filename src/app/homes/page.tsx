"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Header } from "@/components/Header";

export default function HomesPage() {
  const [homesRef, homesHasIntersected] = useIntersectionObserver();
  const [galleryRef, galleryHasIntersected] = useIntersectionObserver();
  const [featuresRef, featuresHasIntersected] = useIntersectionObserver();

  const homeImages = [
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Modern living room",
      title: "Comfortable Living Spaces",
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Study area",
      title: "Dedicated Study Areas",
    },
    {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Kitchen",
      title: "Modern Kitchen Facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Bedroom",
      title: "Private Bedrooms",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Garden",
      title: "Outdoor Spaces",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Recreation room",
      title: "Recreation Areas",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Homes
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Safe, comfortable, and nurturing environments designed to feel
              like home for young people aged 7-17.
            </p>
          </div>
        </div>
      </section>

      {/* Aylett Close Overview */}
      <section
        ref={homesRef}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`${
                homesHasIntersected
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              } transition-all duration-1000`}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                Aylett Close
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-sans">
                Our flagship residential home provides specialized care for
                young people with Social, Emotional, Mental Health (SEMH) and
                Emotional & Behavioural Difficulties (EBD). Located in the heart
                of Canvey Island, Essex, we offer a family-centered approach to
                care.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl transition-colors duration-300">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    2
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    Max Capacity
                  </div>
                </div>
                <div className="text-center p-6 bg-teal-50 dark:bg-teal-900/20 rounded-2xl transition-colors duration-300">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                    7-17
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    Age Range
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  <span>Specialized SEMH/EBD care</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  <span>24/7 professional support</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  <span>Family-centered approach</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  <span>Educational support</span>
                </div>
              </div>
            </div>
            <div
              className={`${
                homesHasIntersected
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              } transition-all duration-1000 delay-300`}
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Aylett Close exterior"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        ref={galleryRef}
        className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Home Gallery
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Take a virtual tour of our comfortable, modern facilities designed
              to create a warm, home-like environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeImages.map((image, index) => (
              <div
                key={index}
                className={`${
                  galleryHasIntersected
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                } transition-all duration-1000`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="relative h-64">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-lg font-bold mb-1 font-heading">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              What Makes Our Homes Special
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Every aspect of our homes is designed to support the well-being
              and development of young people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Home-Like Environment",
                description:
                  "Comfortable, modern facilities that feel like a real home rather than an institution.",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: "👥",
                title: "Small Group Living",
                description:
                  "Maximum of 2 young people ensures personalized attention and a family-like atmosphere.",
                color: "from-teal-500 to-teal-600",
              },
              {
                icon: "📚",
                title: "Educational Support",
                description:
                  "Dedicated study areas and support for educational goals and learning.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: "🌱",
                title: "Personal Development",
                description:
                  "Opportunities for growth, skill-building, and preparing for independent living.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: "🤝",
                title: "Family Involvement",
                description:
                  "Regular contact and involvement with families to maintain important relationships.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: "🛡️",
                title: "Safety & Security",
                description:
                  "Secure, monitored environment with 24/7 professional support and supervision.",
                color: "from-red-500 to-red-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`${
                  featuresHasIntersected
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                } transition-all duration-1000`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                Canvey Island Location
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-sans">
                Our strategic location in Canvey Island, Essex, offers the
                perfect balance of community connection and access to
                opportunities. Young people benefit from local amenities while
                maintaining easy access to London and surrounding areas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Local Community
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-sans">
                      Access to local shops, parks, and community facilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Educational Access
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-sans">
                      Close to schools, colleges, and educational resources
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      London Access
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-sans">
                      Easy transport links to London for opportunities and
                      activities
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Canvey Island location"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

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
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 transition-colors"
                      >
                        First Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg"
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
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 transition-colors"
                      >
                        Last Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg"
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
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 transition-colors"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg"
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
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 transition-colors"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg"
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
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 transition-colors"
                    >
                      Subject *
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg appearance-none"
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
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 transition-colors"
                    >
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg resize-none"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/logo.svg"
                    alt="Masifa Group Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
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
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/homes"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Our Homes
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading">
                Contact Info
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>Canvey Island, Essex</p>
                <p>OFSTED Registered</p>
                <p>24/7 Support Available</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Masifa Group Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
