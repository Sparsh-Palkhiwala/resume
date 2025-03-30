import React from "react";

const MinimalTextResume = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-16 py-12 px-4">
      {/* SIBI Experience*/}
      <section className="border-l-2 border-gray-800 pl-6 relative">
        <div className="space-y-6">
          <div>
            <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-[7px]"></div>
            <h1 className="text-white text-xl font-medium tracking-tight">
              Software Engineering Intern (AI/ML) · <span className="text-teal-400">SIBI LLC</span>
            </h1>
            <div className="text-gray-400 mt-1">
              <div className="text-sm mb-4 font-light tracking-wide">September 2024 - Present</div>
              <ul className="text-sm space-y-3 leading-relaxed list-disc list-outside ml-5">
                <li>
                  Created a dataset of 100+ Text-to-SQL queries to enhance model
                  evaluation, leading to improvement in model accuracy
                </li>
                <li>
                  Designed and implemented an evaluation framework for an
                  internal LLM assistant, incorporating new metrics from
                  EvalKit, improving performance and reliance
                </li>
                <li>
                  Integrated Claude API for Text2SQL evaluation, automating
                  query assessments and enhancing model performance analysis
                </li>
                <li>
                  Reduced token usage by <span className="text-teal-400 font-medium">70%</span> by implementing PromptAgent
                  optimization to address high token costs
                </li>
                <li>
                  Increased system efficiency by automating SQL performance
                  evaluations on Redshift, minimizing debugging time
                </li>
                <li>
                  Developed Agentic workflows to build a research agent and
                  LLM-based decision-making for appliance recommendations
                </li>
                <li>
                  Implemented a dynamic-prompting system for efficient data
                  answering using LLM, improving evaluations by <span className="text-teal-400 font-medium">20%</span>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*Mirwork Experience*/}
      <section className="border-l-2 border-gray-800 pl-6 relative">
        <div className="space-y-6">
          <div>
            <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-[7px]"></div>
            <h1 className="text-white text-xl font-medium tracking-tight">
              Software Engineering Intern (AI/ML) · <span className="text-teal-400">Mirwork Inc</span>
            </h1>
            <div className="text-gray-400 mt-1">
              <div className="text-sm mb-4 font-light tracking-wide">June 2024 - August 2024</div>
              <ul className="text-sm space-y-3 leading-relaxed list-disc list-outside ml-5">
                <li>
                  Engineered and optimized data extraction pipelines using
                  YouTube API to process audio, gathering about 70+ hours of
                  content
                </li>
                <li>
                  Designed, implemented, and maintained{" "}
                  <span className="text-teal-400 font-medium">MongoDB</span> database to
                  efficiently store and manage extensive audio data sets
                </li>
                <li>
                  Utilized YouTube data to fine-tune{" "}
                  <span className="text-teal-400 font-medium">LLM</span> to improve the
                  accuracy and effectiveness of interview assessment tools
                </li>
                <li>
                  Implemented speaker Darization techniques for structuring data
                  and enhancing LLM fine-tuning for interview assessments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Psych for Life Experience*/}
      <section className="border-l-2 border-gray-800 pl-6 relative">
        <div className="space-y-6">
          <div>
            <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-[7px]"></div>
            <h1 className="text-white text-xl font-medium tracking-tight">
              Software Developer · <span className="text-teal-400">Psych for Life</span>
            </h1>
            <div className="text-gray-400 mt-1">
              <div className="text-sm mb-4 font-light tracking-wide">August 2023 - Present</div>
              <ul className="text-sm space-y-3 leading-relaxed list-disc list-outside ml-5">
                <li>
                  Migrated web app from NPM to{" "}
                  <span className="text-teal-400 font-medium">PNPM</span>, cutting build times
                  and boosting reliability with efficient dependency linking and
                  content-addressable storage
                </li>
                <li>
                  Achieved <span className="text-teal-400 font-medium">80%</span> reduction in research time by utilizing{" "}
                  <span className="text-teal-400 font-medium">Prompt Engineering</span> for
                  enhanced efficiency
                </li>
                <li>
                  Enhanced content management systems by fixing bugs and
                  integrating transcript functionality into the dashboard for
                  streamlined content updates
                </li>
                <li>
                  Leading integration of <span className="text-teal-400 font-medium">AI</span>{" "}
                  into the writing process for enhanced efficiency, resulting in
                  a streamlined timeframe
                </li>
                <li>
                  Orchestrated the development and implementation of custom
                  prompt engineering solutions, resulting in a <span className="text-teal-400 font-medium">50%</span> reduction in
                  process cycle time and a <span className="text-teal-400 font-medium">30%</span> increase in team productivity
                </li>
                <li>
                  Conducted research, literature reviews, data analysis, and
                  fact-checking for 65+ scientific documents
                </li>
                <li>
                  Implemented version control, conducted unit testing, and
                  resolved platform bugs in TypeScript, ensuring code stability
                </li>
                <li>
                  Led collaboration with Luminosity Labs for platform
                  development, which streamlined operations and enhanced
                  communication
                </li>
                <li>
                  Employed caching techniques, resulting in a reduction in <span className="text-teal-400 font-medium">70%</span>
                  decrease in rendering delay and improving website performance
                </li>
                <li>
                  Migrated from NPM to <span className="text-teal-400 font-medium">PNPM</span>
                  , reducing package install time by <span className="text-teal-400 font-medium">40%</span> improving dependency
                  management and build reliability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-l-2 border-gray-800 pl-6 relative">
        <div className="space-y-6">
          <div>
            <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-[7px]"></div>
            <h1 className="text-white text-xl font-medium tracking-tight">
              Software Engineering Intern (CV) · <span className="text-teal-400">eInfochips</span>
            </h1>
            <div className="text-gray-400 mt-1">
              <div className="text-sm mb-4 font-light tracking-wide">Jan 2023 - June 2023</div>
              <ul className="text-sm space-y-3 leading-relaxed list-disc list-outside ml-5">
                <li>
                  Led a team of 3 to develop a real-time vehicle detection system for visually impaired individuals, achieving <span className="text-teal-400 font-medium">65.4%</span> average precision and <span className="text-teal-400 font-medium">70.7%</span> for car detection using{" "}
                  <span className="text-teal-400 font-medium">YOLOv5</span>
                </li>
                <li>
                  Achieved an <span className="text-teal-400 font-medium">86.5%</span> reduction in resource usage by filter pruning algorithm while maintaining a mean precision of <span className="text-teal-400 font-medium">42%</span>
                </li>
                <li>
                  Computed{" "}<span className="text-teal-400 font-medium">CNN</span>{" "}models on 16,000 image datasets for vehicle detection, designed to aid visually impaired individuals
                </li>
                <li>
                  Enhanced real-time safety detection in YOLO by implementing Safety Detection Algorithm, achieving a <span className="text-teal-400 font-medium">25 fps</span> detection rate
                </li>
                <li>
                  Applied precision-focused strategies and{" "}<span className="text-teal-400 font-medium">fine-tuned</span>{" "}the model using Indian traffic data to enhance accuracy in detecting vehicles within specific environmental conditions
                </li>
                <li>
                  Collaborated with engineers to streamline training processes, document methodologies, and advance{" "}<span className="text-teal-400 font-medium">computer vision</span>{" "}technology for traffic surveillance and safety applications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="border-l-2 border-gray-800 pl-6 relative">
        <div className="space-y-6">
          <div>
            <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-[7px]"></div>
            <h1 className="text-white text-xl font-medium tracking-tight">
              Software Engineering Intern · <span className="text-teal-400">Oxvi Respire Solutions</span>
            </h1>
            <div className="text-gray-400 mt-1">
              <div className="text-sm mb-4 font-light tracking-wide">May 2022 - July 2022</div>
              <ul className="text-sm space-y-3 leading-relaxed list-disc list-outside ml-5">
                <li>
                  Developed an{" "}<span className="text-teal-400 font-medium">Android</span>{" "}app to plot real-time values from a prototype ventilator with live{" "}<span className="text-teal-400 font-medium">Data Visualization</span>
                </li>
                <li>
                  Integrated{" "}<span className="text-teal-400 font-medium">Firebase</span>{" "}for real-time communication, enabling data transmission between the device and application
                </li>
                <li>
                  Implemented communication protocols to embedded C components in the prototype for data exchange within a <span className="text-teal-400 font-medium">5ms</span> lag
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MinimalTextResume;
