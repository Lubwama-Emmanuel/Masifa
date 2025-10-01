"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Header } from "@/components/Header";

export default function ActivitiesPage() {
  const [activitiesRef, activitiesHasIntersected] = useIntersectionObserver();
  const [programsRef, programsHasIntersected] = useIntersectionObserver();
  const [specialRef, specialHasIntersected] = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Activities &{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Engaging activities and programs designed to support the
              development, learning, and well-being of young people.
            </p>
          </div>
        </div>
      </section>

      {/* Activity Categories */}
      <section
        ref={activitiesRef}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Our Activity Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              A diverse range of activities designed to support physical,
              creative, and social development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏃‍♂️",
                title: "Physical Activities",
                description:
                  "Sports, fitness, and outdoor activities to promote physical health and teamwork.",
                activities: [
                  "Football & Basketball",
                  "Swimming & Water Sports",
                  "Cycling & Hiking",
                  "Team Sports",
                  "Fitness Training",
                  "Outdoor Adventures",
                ],
                color: "from-emerald-500 to-emerald-600",
                bgColor: "bg-emerald-50",
                textColor: "text-emerald-700",
              },
              {
                icon: "🎨",
                title: "Creative & Cultural",
                description:
                  "Artistic and cultural activities to foster creativity and self-expression.",
                activities: [
                  "Art & Crafts",
                  "Music & Drama",
                  "Cooking & Baking",
                  "Photography",
                  "Creative Writing",
                  "Cultural Events",
                ],
                color: "from-teal-500 to-teal-600",
                bgColor: "bg-teal-50",
                textColor: "text-teal-700",
              },
              {
                icon: "🤝",
                title: "Community & Life Skills",
                description:
                  "Practical skills and community engagement to prepare for independent living.",
                activities: [
                  "Life Skills Training",
                  "Community Service",
                  "Volunteer Work",
                  "Social Skills",
                  "Independent Living",
                  "Career Preparation",
                ],
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                textColor: "text-blue-700",
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`${
                  activitiesHasIntersected
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                } transition-all duration-1000`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  >
                    <span className="text-3xl">{category.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center font-heading">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6 font-sans">
                    {category.description}
                  </p>

                  <div className="space-y-3">
                    {category.activities.map((activity, activityIndex) => (
                      <div
                        key={activityIndex}
                        className={`flex items-center text-sm ${category.textColor} dark:text-gray-300 group-hover:translate-x-2 transition-transform`}
                        style={{ transitionDelay: `${activityIndex * 50}ms` }}
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}
                        ></div>
                        {activity}
                      </div>
                    ))}
                  </div>

                  <div
                    className={`mt-6 p-4 ${category.bgColor} dark:bg-gray-700 rounded-2xl text-center transition-colors duration-300`}
                  >
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {category.activities.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Activities Available
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section
        ref={programsRef}
        className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Special Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Tailored programs designed to meet the unique needs and interests
              of each young person.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div
              className={`${
                programsHasIntersected
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              } transition-all duration-1000`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 transition-colors duration-300">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                  Educational Support
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">📚</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Study Support
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Dedicated study areas and one-on-one tutoring support
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Goal Setting
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Help young people set and achieve educational goals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🚀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Career Preparation
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Guidance and support for future career paths
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${
                programsHasIntersected
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              } transition-all duration-1000 delay-300`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 transition-colors duration-300">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                  Holidays & Excursions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✈️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Day Trips
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Regular outings to museums, parks, and cultural sites
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🏖️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Holiday Breaks
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Organized holiday activities and special events
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🎉</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Celebrations
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-sans">
                        Birthday parties and special occasion celebrations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Development */}
      <section
        ref={specialRef}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`${
                specialHasIntersected
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              } transition-all duration-1000`}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                Individual Development
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-sans">
                Every young person has unique interests, talents, and goals. Our
                individual development programs are designed to nurture these
                personal strengths and help each young person reach their full
                potential.
              </p>

              <div className="space-y-6">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 dark:border-emerald-400 p-6 rounded-r-2xl transition-colors duration-300">
                  <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-3 font-heading">
                    Personal Interests
                  </h3>
                  <p className="text-emerald-700 dark:text-emerald-200 font-sans">
                    We encourage and support young people in pursuing their
                    personal interests, whether that&apos;s music, art, sports,
                    technology, or any other passion.
                  </p>
                </div>

                <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 p-6 rounded-r-2xl transition-colors duration-300">
                  <h3 className="text-lg font-bold text-teal-800 dark:text-teal-300 mb-3 font-heading">
                    Skill Building
                  </h3>
                  <p className="text-teal-700 dark:text-teal-200 font-sans">
                    Practical life skills, social skills, and emotional
                    regulation techniques to help young people thrive in all
                    areas of life.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-6 rounded-r-2xl transition-colors duration-300">
                  <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-3 font-heading">
                    Family Contact
                  </h3>
                  <p className="text-blue-700 dark:text-blue-200 font-sans">
                    Maintaining important family relationships through regular
                    contact, visits, and family therapy sessions when
                    appropriate.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${
                specialHasIntersected
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              } transition-all duration-1000 delay-300`}
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Young people in activities"
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

      {/* Activity Schedule */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Weekly Activity Schedule
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
              A structured yet flexible schedule that balances education,
              recreation, and personal development.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 transition-colors duration-300">
            <div className="grid md:grid-cols-7 gap-4">
              {[
                {
                  day: "Monday",
                  activities: [
                    "Morning Study",
                    "Physical Activity",
                    "Life Skills",
                  ],
                },
                {
                  day: "Tuesday",
                  activities: [
                    "Educational Support",
                    "Creative Arts",
                    "Community Service",
                  ],
                },
                {
                  day: "Wednesday",
                  activities: [
                    "Study Time",
                    "Sports & Fitness",
                    "Social Skills",
                  ],
                },
                {
                  day: "Thursday",
                  activities: [
                    "Educational Support",
                    "Cooking & Baking",
                    "Personal Development",
                  ],
                },
                {
                  day: "Friday",
                  activities: ["Study Time", "Recreation", "Family Contact"],
                },
                {
                  day: "Saturday",
                  activities: [
                    "Outdoor Activities",
                    "Hobbies",
                    "Community Events",
                  ],
                },
                {
                  day: "Sunday",
                  activities: ["Relaxation", "Family Time", "Planning"],
                },
              ].map((day, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-4 mb-4">
                    <h3 className="font-bold text-lg font-heading">
                      {day.day}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {day.activities.map((activity, activityIndex) => (
                      <div
                        key={activityIndex}
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300"
                      >
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/homes"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Our Homes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
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
