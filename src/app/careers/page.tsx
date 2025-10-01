"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Header } from "@/components/Header";

export default function CareersPage() {
  const [careersRef, careersHasIntersected] = useIntersectionObserver();
  const [benefitsRef, benefitsHasIntersected] = useIntersectionObserver();
  const [positionsRef, positionsHasIntersected] = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Join Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Make a real difference in young people&apos;s lives while building
              a rewarding career in children&apos;s residential care.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section
        ref={careersRef}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Why Work With Masifa Group?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Join a team that&apos;s passionate about making a positive impact
              in young people&apos;s lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Meaningful Work",
                description:
                  "Make a real difference in young people&apos;s lives every day. Your work directly impacts their growth and development.",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: "👥",
                title: "Supportive Team",
                description:
                  "Work alongside experienced professionals who share your passion for helping young people thrive.",
                color: "from-teal-500 to-teal-600",
              },
              {
                icon: "📚",
                title: "Professional Development",
                description:
                  "Comprehensive training programs and ongoing professional development opportunities to advance your career.",
                color: "from-blue-500 to-blue-600",
              },
            ].map((reason, index) => (
              <div
                key={index}
                className={`${
                  careersHasIntersected
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                } transition-all duration-1000`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  >
                    <span className="text-2xl">{reason.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center font-heading">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed font-sans">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section
        ref={benefitsRef}
        className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              We offer competitive benefits and a supportive work environment to
              help you thrive.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div
              className={`${
                benefitsHasIntersected
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              } transition-all duration-1000`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 transition-colors duration-300">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                  Financial Benefits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">💰</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Competitive Salary
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Attractive salary packages based on experience and
                        qualifications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🏥</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Health Insurance
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Comprehensive health and dental insurance coverage
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🏖️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Paid Time Off
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Generous annual leave and sick leave allowances
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${
                benefitsHasIntersected
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              } transition-all duration-1000 delay-300`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 transition-colors duration-300">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                  Professional Development
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🎓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Training Programs
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Comprehensive training in SEMH/EBD care and therapeutic
                        approaches
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">📈</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Career Progression
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Clear pathways for career advancement and leadership
                        roles
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🤝</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Mentorship
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Supportive mentorship from experienced team members
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Positions */}
      <section
        ref={positionsRef}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Current Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Explore our current job openings and find the perfect role for
              you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Residential Care Worker",
                location: "Canvey Island, Essex",
                type: "Full-time",
                salary: "£24,000 - £28,000",
                description:
                  "Provide direct care and support to young people aged 7-17 in our residential home.",
                requirements: [
                  "Level 3 Diploma in Children and Young People&apos;s Workforce (or willingness to work towards)",
                  "Experience working with young people with SEMH/EBD needs",
                  "Strong communication and interpersonal skills",
                  "Ability to work shifts including evenings and weekends",
                ],
                color: "from-emerald-500 to-emerald-600",
              },
              {
                title: "Deputy Manager",
                location: "Canvey Island, Essex",
                type: "Full-time",
                salary: "£32,000 - £36,000",
                description:
                  "Support the Registered Manager in overseeing daily operations and staff development.",
                requirements: [
                  "Level 5 Diploma in Leadership for Health and Social Care",
                  "Minimum 3 years experience in residential care",
                  "Strong leadership and management skills",
                  "Experience with OFSTED inspections and compliance",
                ],
                color: "from-teal-500 to-teal-600",
              },
            ].map((position, index) => (
              <div
                key={index}
                className={`${
                  positionsHasIntersected
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                } transition-all duration-1000`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-heading">
                        {position.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`px-4 py-2 bg-gradient-to-r ${position.color} text-white rounded-full text-sm font-semibold`}
                    >
                      {position.salary}
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-sans">
                    {position.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 font-heading">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full py-3 px-6 bg-gradient-to-r ${position.color} text-white rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Ready to join our team? Follow these simple steps to start your
              application.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Submit Application",
                description:
                  "Complete our online application form with your CV and cover letter.",
                icon: "📝",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                step: "2",
                title: "Initial Screening",
                description:
                  "We&apos;ll review your application and may conduct a phone interview.",
                icon: "📞",
                color: "from-teal-500 to-teal-600",
              },
              {
                step: "3",
                title: "Interview Process",
                description:
                  "Meet with our team for a formal interview and assessment.",
                icon: "🤝",
                color: "from-blue-500 to-blue-600",
              },
              {
                step: "4",
                title: "Background Checks",
                description:
                  "Complete DBS checks and reference verification before starting.",
                icon: "✅",
                color: "from-purple-500 to-purple-600",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold transition-colors duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Applications */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Ready to Apply?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 font-sans">
              Get in touch with us to learn more about current opportunities or
              submit your application.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center transition-colors duration-300">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                  Email Application
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-sans">
                  Send your CV and cover letter to our recruitment team
                </p>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  careers@masifagroup.co.uk
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center transition-colors duration-300">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                  Phone Inquiry
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-sans">
                  Call us to discuss opportunities and ask questions
                </p>
                <p className="text-teal-600 dark:text-teal-400 font-semibold">
                  Available 9am-5pm
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center transition-colors duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                  General Inquiry
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-sans">
                  Not sure which role is right for you? Let&apos;s talk
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">
                  We&apos;re here to help
                </p>
              </div>
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
                      className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg"
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
                      className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 group-hover:shadow-lg"
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
                      className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors"
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
                      className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors"
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
