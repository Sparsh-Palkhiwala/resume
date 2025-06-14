import React from "react";
import { Code } from "lucide-react";

const EnhancedMinimalResume = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-16 py-16 px-6 font-sans">
      {/* Experience Timeline */}
      <div className="space-y-20">
      <section className="group relative transition-all duration-300">
          <div className="ml-4 border-l-2 border-gray-300 dark:border-gray-700 pl-8 group-hover:border-teal-400 transition-all duration-300">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 rounded-full left-0 top-0 group-hover:border-teal-400 transition-all duration-300">
              <div className="w-4 h-4 bg-teal-500 rounded-full shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:scale-110"></div>
            </div>
            <h1 className="text-black dark:text-white text-xl font-semibold tracking-tight flex items-center gap-2">
              <Code size={20} className="text-teal-400" />
              Incoming Data Analyst (AI/ML) ·{" "}
              <span className="text-teal-400 font-bold">Onsemi</span>
            </h1>
            <div className="text-gray-600 dark:text-gray-400 mt-2">
              <div className="text-sm mb-5 font-light tracking-wide border-b border-gray-200 dark:border-gray-800 pb-2 inline-block pr-4">
                June 2025 - Present
              </div>
              <ul className="text-sm space-y-3 leading-relaxed list-none text-gray-700 dark:text-gray-300">
              <li className="flex gap-2">
                  <span>
                  Developed and documented Test Naming Guidelines by identifying patterns in non-compliant test names 
                  using data masking and pin pattern analysis; addressed gaps in previous guidelines to improve consistency 
                  and compliance.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>


        {/* SIBI Experience */}
        <section className="group relative transition-all duration-300">
          <div className="ml-4 border-l-2 border-gray-300 dark:border-gray-700 pl-8 group-hover:border-teal-400 transition-all duration-300">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 rounded-full left-0 top-0 group-hover:border-teal-400 transition-all duration-300">
              <div className="w-4 h-4 bg-teal-500 rounded-full shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:scale-110"></div>
            </div>
            <h1 className="text-black dark:text-white text-xl font-semibold tracking-tight flex items-center gap-2">
              <Code size={20} className="text-teal-400" />
              Software Engineering Intern (AI/ML) ·{" "}
              <span className="text-teal-400 font-bold">SIBI LLC</span>
            </h1>
            <div className="text-gray-600 dark:text-gray-400 mt-2">
              <div className="text-sm mb-5 font-light tracking-wide border-b border-gray-200 dark:border-gray-800 pb-2 inline-block pr-4">
                September 2024 - June 2025
              </div>
              <ul className="text-sm space-y-3 leading-relaxed list-none text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span>
                    Created a dataset of 100+ Text-to-SQL queries to enhance
                    model evaluation, leading to improvement in model accuracy
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Designed and implemented an evaluation framework for an
                    internal LLM assistant, incorporating new metrics from
                    EvalKit, improving performance and reliance
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Integrated Claude API for Text2SQL evaluation, automating
                    query assessments and enhancing model performance analysis
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Reduced token usage by{" "}
                    <span className="text-teal-400 font-semibold">70%</span> by
                    implementing PromptAgent optimization to address high token
                    costs
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Increased system efficiency by automating SQL performance
                    evaluations on Redshift, minimizing debugging time
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Developed Agentic workflows to build a research agent and
                    LLM-based decision-making for appliance recommendations
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Implemented a dynamic-prompting system for efficient data
                    answering using LLM, improving evaluations by{" "}
                    <span className="text-teal-400 font-semibold">20%</span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Optimized data retrieval by enhancing{" "}
                    <span className="text-teal-400 font-semibold">
                      Apollo GraphQL
                    </span>{" "}
                    schema to fetch comprehensive runtime data, reducing
                    multi-page navigation and improving user workflow efficiency
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Assisted in migrating internal AI assistant's data layer
                    from{" "}
                    <span className="text-teal-400 font-semibold">
                      AWS Redshift
                    </span>{" "}
                    to{" "}
                    <span className="text-teal-400 font-semibold">
                      Motherduck DuckDB
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mirwork Experience */}
        <section className="group relative transition-all duration-300">
          <div className="ml-4 border-l-2 border-gray-300 dark:border-gray-700 pl-8 group-hover:border-teal-400 transition-all duration-300">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 rounded-full left-0 top-0 group-hover:border-teal-400 transition-all duration-300">
              <div className="w-4 h-4 bg-teal-500 rounded-full shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:scale-110"></div>
            </div>
            <h1 className="text-black dark:text-white text-xl font-semibold tracking-tight flex items-center gap-2">
              <Code size={20} className="text-teal-400" />
              Software Engineering Intern (AI/ML) ·{" "}
              <span className="text-teal-400 font-bold">Mirwork Inc</span>
            </h1>
            <div className="text-gray-600 dark:text-gray-400 mt-2">
              <div className="text-sm mb-5 font-light tracking-wide border-b border-gray-200 dark:border-gray-800 pb-2 inline-block pr-4">
                June 2024 - August 2024
              </div>
              <ul className="text-sm space-y-3 leading-relaxed list-none text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span>
                    Engineered and optimized data extraction pipelines using
                    YouTube API to process audio, gathering about 70+ hours of
                    content
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Designed, implemented, and maintained{" "}
                    <span className="text-teal-400 font-semibold">MongoDB</span>{" "}
                    database to efficiently store and manage extensive audio
                    data sets
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Utilized YouTube data to fine-tune{" "}
                    <span className="text-teal-400 font-semibold">LLM</span> to
                    improve the accuracy and effectiveness of interview
                    assessment tools
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Implemented speaker Darization techniques for structuring
                    data and enhancing LLM fine-tuning for interview assessments
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Psych for Life Experience */}
        <section className="group relative transition-all duration-300">
          <div className="ml-4 border-l-2 border-gray-300 dark:border-gray-700 pl-8 group-hover:border-teal-400 transition-all duration-300">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 rounded-full left-0 top-0 group-hover:border-teal-400 transition-all duration-300">
              <div className="w-4 h-4 bg-teal-500 rounded-full shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:scale-110"></div>
            </div>
            <h1 className="text-black dark:text-white text-xl font-semibold tracking-tight flex items-center gap-2">
              <Code size={20} className="text-teal-400" />
              Software Developer ·{" "}
              <span className="text-teal-400 font-bold">Psych for Life</span>
            </h1>
            <div className="text-gray-600 dark:text-gray-400 mt-2">
              <div className="text-sm mb-5 font-light tracking-wide border-b border-gray-200 dark:border-gray-800 pb-2 inline-block pr-4">
                August 2023 - Present
              </div>
              <ul className="text-sm space-y-3 leading-relaxed list-none text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span>
                    Migrated web app from NPM to{" "}
                    <span className="text-teal-400 font-semibold">PNPM</span>,
                    cutting build times and boosting reliability with efficient
                    dependency linking
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Achieved{" "}
                    <span className="text-teal-400 font-semibold">80%</span>{" "}
                    reduction in research time by utilizing{" "}
                    <span className="text-teal-400 font-semibold">
                      Prompt Engineering
                    </span>{" "}
                    techniques to optimize LLM interactions for data extraction
                    and analysis
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Developed and deployed a comprehensive{" "}
                    <span className="text-teal-400 font-semibold">
                      React.js
                    </span>{" "}
                    web application with{" "}
                    <span className="text-teal-400 font-semibold">
                      Node.js
                    </span>{" "}
                    backend, featuring user authentication, data visualization,
                    and real-time updates
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Implemented robust{" "}
                    <span className="text-teal-400 font-semibold">
                      PostgreSQL
                    </span>{" "}
                    database architecture with optimized queries, reducing data
                    retrieval time by{" "}
                    <span className="text-teal-400 font-semibold">60%</span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Integrated third-party APIs and services, including payment
                    processing and email automation, enhancing user experience
                    and operational efficiency
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Freelance Experience */}
        <section className="group relative transition-all duration-300">
          <div className="ml-4 border-l-2 border-gray-300 dark:border-gray-700 pl-8 group-hover:border-teal-400 transition-all duration-300">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 rounded-full left-0 top-0 group-hover:border-teal-400 transition-all duration-300">
              <div className="w-4 h-4 bg-teal-500 rounded-full shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:scale-110"></div>
            </div>
            <h1 className="text-black dark:text-white text-xl font-semibold tracking-tight flex items-center gap-2">
              <Code size={20} className="text-teal-400" />
              Freelance Software Developer ·{" "}
              <span className="text-teal-400 font-bold">Self-Employed</span>
            </h1>
            <div className="text-gray-600 dark:text-gray-400 mt-2">
              <div className="text-sm mb-5 font-light tracking-wide border-b border-gray-200 dark:border-gray-800 pb-2 inline-block pr-4">
                January 2023 - August 2023
              </div>
              <ul className="text-sm space-y-3 leading-relaxed list-none text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span>
                    Delivered{" "}
                    <span className="text-teal-400 font-semibold">15+</span>{" "}
                    custom web applications and mobile solutions for diverse
                    clients, ranging from e-commerce platforms to portfolio
                    websites
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Specialized in{" "}
                    <span className="text-teal-400 font-semibold">
                      React.js
                    </span>
                    ,{" "}
                    <span className="text-teal-400 font-semibold">Next.js</span>
                    , and{" "}
                    <span className="text-teal-400 font-semibold">
                      React Native
                    </span>{" "}
                    development, creating responsive and user-friendly
                    interfaces
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Managed full project lifecycle from requirements gathering
                    to deployment, consistently delivering projects on time and
                    within budget
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Collaborated with designers and stakeholders to translate
                    business requirements into technical solutions, improving
                    client satisfaction by{" "}
                    <span className="text-teal-400 font-semibold">95%</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tata Consultancy Services Experience */}
        <section className="group relative transition-all duration-300">
          <div className="ml-4 border-l-2 border-gray-300 dark:border-gray-700 pl-8 group-hover:border-teal-400 transition-all duration-300">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 rounded-full left-0 top-0 group-hover:border-teal-400 transition-all duration-300">
              <div className="w-4 h-4 bg-teal-500 rounded-full shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:scale-110"></div>
            </div>
            <h1 className="text-black dark:text-white text-xl font-semibold tracking-tight flex items-center gap-2">
              <Code size={20} className="text-teal-400" />
              Assistant System Engineer ·{" "}
              <span className="text-teal-400 font-bold">
                Tata Consultancy Services
              </span>
            </h1>
            <div className="text-gray-600 dark:text-gray-400 mt-2">
              <div className="text-sm mb-5 font-light tracking-wide border-b border-gray-200 dark:border-gray-800 pb-2 inline-block pr-4">
                July 2021 - December 2022
              </div>
              <ul className="text-sm space-y-3 leading-relaxed list-none text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span>
                    Developed and maintained enterprise-level applications using{" "}
                    <span className="text-teal-400 font-semibold">Java</span>,{" "}
                    <span className="text-teal-400 font-semibold">
                      Spring Boot
                    </span>
                    , and{" "}
                    <span className="text-teal-400 font-semibold">
                      Angular
                    </span>
                    , serving over{" "}
                    <span className="text-teal-400 font-semibold">10,000</span>{" "}
                    daily active users
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Implemented{" "}
                    <span className="text-teal-400 font-semibold">RESTful</span>{" "}
                    APIs and microservices architecture, improving system
                    scalability and reducing response time by{" "}
                    <span className="text-teal-400 font-semibold">40%</span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Collaborated with cross-functional teams in{" "}
                    <span className="text-teal-400 font-semibold">Agile</span>{" "}
                    environment, participating in sprint planning, code reviews,
                    and daily standups
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Optimized database queries and implemented caching
                    strategies, resulting in{" "}
                    <span className="text-teal-400 font-semibold">50%</span>{" "}
                    improvement in application performance
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Mentored{" "}
                    <span className="text-teal-400 font-semibold">5+</span>{" "}
                    junior developers and conducted technical training sessions
                    on best practices and emerging technologies
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div className="text-center pt-16">
        <a
          href="mailto:spalkhiw@asu.edu"
          className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-md shadow-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 ease-out"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative">Get In Touch</span>
        </a>
      </div>
    </div>
  );
};

export default function Resume() {
  return <EnhancedMinimalResume />;
}
