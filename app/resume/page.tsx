import React from "react";
import { Code } from "lucide-react";

const EnhancedMinimalResume = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-16 py-16 px-6 font-sans">
      {/* Experience Timeline */}
      <div className="space-y-20">
        {/* SIBI Experience */}
        <section className="group relative transition-all duration-300">
          <div className="ml-4 border-l-2 border-gray-700 pl-8 group-hover:border-teal-400 transition-all duration-300">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-black border-2 border-gray-700 rounded-full left-0 top-0 group-hover:border-teal-400 transition-all duration-300">
              <div className="w-4 h-4 bg-teal-500 rounded-full shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:scale-110"></div>
            </div>
            <h1 className="text-white text-xl font-semibold tracking-tight flex items-center gap-2">
              <Code size={20} className="text-teal-400" />
              Software Engineering Intern (AI/ML) ·{" "}
              <span className="text-teal-400 font-bold">SIBI LLC</span>
            </h1>
            <div className="text-gray-400 mt-2">
              <div className="text-sm mb-5 font-light tracking-wide border-b border-gray-800 pb-2 inline-block pr-4">
                September 2024 - Present
              </div>
              <ul className="text-sm space-y-3 leading-relaxed list-none text-gray-300">
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
          <div className="ml-4 border-l-2 border-gray-700 pl-8 group-hover:border-teal-400 transition-all duration-300">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-black border-2 border-gray-700 rounded-full left-0 top-0 group-hover:border-teal-400 transition-all duration-300">
              <div className="w-4 h-4 bg-teal-500 rounded-full shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:scale-110"></div>
            </div>
            <h1 className="text-white text-xl font-semibold tracking-tight flex items-center gap-2">
              <Code size={20} className="text-teal-400" />
              Software Engineering Intern (AI/ML) ·{" "}
              <span className="text-teal-400 font-bold">Mirwork Inc</span>
            </h1>
            <div className="text-gray-400 mt-2">
              <div className="text-sm mb-5 font-light tracking-wide border-b border-gray-800 pb-2 inline-block pr-4">
                June 2024 - August 2024
              </div>
              <ul className="text-sm space-y-3 leading-relaxed list-none text-gray-300">
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
          <div className="ml-4 border-l-2 border-gray-700 pl-8 group-hover:border-teal-400 transition-all duration-300">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-black border-2 border-gray-700 rounded-full left-0 top-0 group-hover:border-teal-400 transition-all duration-300">
              <div className="w-4 h-4 bg-teal-500 rounded-full shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:scale-110"></div>
            </div>
            <h1 className="text-white text-xl font-semibold tracking-tight flex items-center gap-2">
              <Code size={20} className="text-teal-400" />
              Software Developer ·{" "}
              <span className="text-teal-400 font-bold">Psych for Life</span>
            </h1>
            <div className="text-gray-400 mt-2">
              <div className="text-sm mb-5 font-light tracking-wide border-b border-gray-800 pb-2 inline-block pr-4">
                August 2023 - Present
              </div>
              <ul className="text-sm space-y-3 leading-relaxed list-none text-gray-300">
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
                    </span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Enhanced content management systems by fixing bugs and
                    integrating transcript functionality into the dashboard
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Leading integration of{" "}
                    <span className="text-teal-400 font-semibold">AI</span> into
                    the writing process for enhanced efficiency
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Orchestrated custom prompt engineering solutions, resulting
                    in a{" "}
                    <span className="text-teal-400 font-semibold">50%</span>{" "}
                    reduction in process cycle time
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Conducted research, literature reviews, data analysis, and
                    fact-checking for 65+ scientific documents
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Implemented version control, conducted unit testing, and
                    resolved platform bugs in TypeScript
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Led collaboration with Luminosity Labs for platform
                    development, streamlining operations
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Employed caching techniques, resulting in a{" "}
                    <span className="text-teal-400 font-semibold">70%</span>{" "}
                    decrease in rendering delay
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* eInfochips Experience */}
        <section className="group relative transition-all duration-300">
          <div className="ml-4 border-l-2 border-gray-700 pl-8 group-hover:border-teal-400 transition-all duration-300">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-black border-2 border-gray-700 rounded-full left-0 top-0 group-hover:border-teal-400 transition-all duration-300">
              <div className="w-4 h-4 bg-teal-500 rounded-full shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:scale-110"></div>
            </div>
            <h1 className="text-white text-xl font-semibold tracking-tight flex items-center gap-2">
              <Code size={20} className="text-teal-400" />
              Software Engineering Intern (CV) ·{" "}
              <span className="text-teal-400 font-bold">eInfochips</span>
            </h1>
            <div className="text-gray-400 mt-2">
              <div className="text-sm mb-5 font-light tracking-wide border-b border-gray-800 pb-2 inline-block pr-4">
                Jan 2023 - June 2023
              </div>
              <ul className="text-sm space-y-3 leading-relaxed list-none text-gray-300">
                <li className="flex gap-2">
                  <span>
                    Led a team of 3 to develop a real-time vehicle detection
                    system for visually impaired individuals, achieving{" "}
                    <span className="text-teal-400 font-semibold">65.4%</span>{" "}
                    average precision
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Achieved an{" "}
                    <span className="text-teal-400 font-semibold">86.5%</span>{" "}
                    reduction in resource usage by filter pruning algorithm
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Computed{" "}
                    <span className="text-teal-400 font-semibold">CNN</span>{" "}
                    models on 16,000 image datasets for vehicle detection
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Enhanced real-time safety detection in YOLO by implementing
                    Safety Detection Algorithm, achieving a{" "}
                    <span className="text-teal-400 font-semibold">25 fps</span>{" "}
                    detection rate
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Applied precision-focused strategies and{" "}
                    <span className="text-teal-400 font-semibold">
                      fine-tuned
                    </span>{" "}
                    the model using Indian traffic data
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Collaborated with engineers to streamline training processes
                    and document methodologies
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Oxvi Respire Solutions Experience */}
        <section className="group relative transition-all duration-300">
          <div className="ml-4 border-l-2 border-gray-700 pl-8 group-hover:border-teal-400 transition-all duration-300">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-black border-2 border-gray-700 rounded-full left-0 top-0 group-hover:border-teal-400 transition-all duration-300">
              <div className="w-4 h-4 bg-teal-500 rounded-full shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:scale-110"></div>
            </div>
            <h1 className="text-white text-xl font-semibold tracking-tight flex items-center gap-2">
              <Code size={20} className="text-teal-400" />
              Software Engineering Intern ·{" "}
              <span className="text-teal-400 font-bold">Oxvi Solutions</span>
            </h1>
            <div className="text-gray-400 mt-2">
              <div className="text-sm mb-5 font-light tracking-wide border-b border-gray-800 pb-2 inline-block pr-4">
                May 2022 - July 2022
              </div>
              <ul className="text-sm space-y-3 leading-relaxed list-none text-gray-300">
                <li className="flex gap-2">
                  <span>
                    Developed an{" "}
                    <span className="text-teal-400 font-semibold">Android</span>{" "}
                    app to plot real-time values from a prototype ventilator
                    with live{" "}
                    <span className="text-teal-400 font-semibold">
                      Data Visualization
                    </span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Integrated{" "}
                    <span className="text-teal-400 font-semibold">
                      Firebase
                    </span>{" "}
                    for real-time data storage and{" "}
                    <span className="text-teal-400 font-semibold">
                      authentication
                    </span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Implemented communication protocols to embedded C components
                    in the prototype for data exchange within a 5ms lag.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-center pt-6">
        <a
          href="/resume"
          className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-md shadow-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 ease-out"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative font-medium">View my full resume</span>
        </a>
      </div>
    </div>
  );
};

export default EnhancedMinimalResume;
