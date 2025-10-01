"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  const [aboutRef, aboutHasIntersected] = useIntersectionObserver();
  const [teamRef, teamHasIntersected] = useIntersectionObserver();
  const [missionRef, missionHasIntersected] = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              About{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Masifa Group
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Dedicated to providing exceptional care for young people in a
              safe, nurturing environment where they can flourish and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={missionRef}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`${
                missionHasIntersected
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              } transition-all duration-1000`}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                Our Mission
              </h2>
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed font-sans mb-8">
                &ldquo;To provide a safe, nurturing, and supportive environment
                where young people can develop the skills, confidence, and
                resilience needed to thrive in their communities and achieve
                their full potential.&rdquo;
              </blockquote>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl transition-colors duration-300">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    Specialized Care
                  </div>
                </div>
                <div className="text-center p-6 bg-teal-50 dark:bg-teal-900/20 rounded-2xl transition-colors duration-300">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    Support
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                missionHasIntersected
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              } transition-all duration-1000 delay-300`}
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Caring environment"
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

      {/* Team Section */}
      <section
        ref={teamRef}
        className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Experienced professionals dedicated to providing the highest
              quality care for young people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Ahmed Jama */}
            <div
              className={`${
                teamHasIntersected
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              } transition-all duration-1000`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="relative h-80">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Ahmed Jama"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 font-heading">
                      Ahmed Jama
                    </h3>
                    <p className="text-emerald-300 font-semibold">
                      Registered Manager
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      <span>
                        Level 5 Diploma in Leadership for Health and Social Care
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      <span>
                        15+ years experience in children&apos;s residential care
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      <span>Specialized in SEMH/EBD care</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-6 leading-relaxed font-sans">
                    Ahmed brings extensive experience in managing residential
                    care services for young people with complex needs, ensuring
                    the highest standards of care and support.
                  </p>
                </div>
              </div>
            </div>

            {/* Farxiya Ismail */}
            <div
              className={`${
                teamHasIntersected
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              } transition-all duration-1000 delay-300`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="relative h-80">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Farxiya Ismail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 font-heading">
                      Farxiya Ismail
                    </h3>
                    <p className="text-emerald-300 font-semibold">
                      Deputy Manager
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      <span>
                        Level 3 Diploma in Children and Young People&apos;s
                        Workforce
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      <span>10+ years experience in residential care</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      <span>Expertise in trauma-informed care</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-6 leading-relaxed font-sans">
                    Farxiya is passionate about supporting young people through
                    their journey, with specialized training in trauma-informed
                    care and emotional support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Training Program */}
          <div
            className={`${
              teamHasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            } transition-all duration-1000 delay-500 mt-16`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 transition-colors duration-300">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center font-heading">
                Comprehensive Training Program
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl transition-colors duration-300">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📚</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-heading">
                    Core Training
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Safeguarding & Child Protection</li>
                    <li>• First Aid & Health & Safety</li>
                    <li>• Communication & Relationships</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-teal-50 dark:bg-teal-900/20 rounded-2xl transition-colors duration-300">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-heading">
                    Specialized Training
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• SEMH/EBD Support</li>
                    <li>• Trauma-Informed Care</li>
                    <li>• Crisis Intervention</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl transition-colors duration-300">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-heading">
                    Professional Development
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Leadership Skills</li>
                    <li>• Therapeutic Approaches</li>
                    <li>• Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={aboutRef}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              The principles that guide everything we do at Masifa Group.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                title: "Respect & Dignity",
                description:
                  "We treat every young person with respect, dignity, and unconditional positive regard, recognizing their inherent worth and potential.",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: "🌱",
                title: "Growth & Development",
                description:
                  "We believe in the potential for growth and positive change in every young person, providing opportunities for learning and development.",
                color: "from-teal-500 to-teal-600",
              },
              {
                icon: "🏠",
                title: "Family-Centered Care",
                description:
                  "We work closely with families and support networks to ensure continuity of care and maintain important relationships.",
                color: "from-blue-500 to-blue-600",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`${
                  aboutHasIntersected
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                } transition-all duration-1000`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  >
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center font-heading">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed font-sans">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
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
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        24/7 Emergency Line
                      </h4>
                      <p className="text-gray-600 font-sans">
                        For urgent referrals and emergency situations
                      </p>
                      <p className="text-red-600 font-semibold mt-2">
                        Available around the clock
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Email Support
                      </h4>
                      <p className="text-gray-600 font-sans">
                        General inquiries and referrals
                      </p>
                      <p className="text-teal-600 font-semibold mt-2">
                        info@masifagroup.co.uk
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Location
                      </h4>
                      <p className="text-gray-600 font-sans">
                        Canvey Island, Essex
                      </p>
                      <p className="text-blue-600 font-semibold mt-2">
                        By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-sans">
                      Monday - Friday
                    </span>
                    <span className="font-semibold text-gray-900">
                      9:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-sans">Saturday</span>
                    <span className="font-semibold text-gray-900">
                      10:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-sans">Sunday</span>
                    <span className="font-semibold text-gray-900">
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
