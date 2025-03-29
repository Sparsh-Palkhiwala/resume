import React from "react";

const MinimalTextResume = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-16">
      {/* SIBI Experience*/}
      <section>
        <div className="space-y-6">
          <div>
            <h2 className="text-white text-lg font-normal tracking-tight">
              Software Engineering Intern (AI/ML) · SIBI LLC
            </h2>
            <div className="text-gray-400 mt-1">
              <div className="text-sm mb-3">September 2024 - Present</div>
              <ul className="text-sm space-y-2 leading-relaxed list-disc list-inside">
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
                  Reduced token usage by 70% by implementing PromptAgent
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
                  answering using LLM, improving evaluations by 20%.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*Mirwork Experience*/}
      <section>
        <div className="space-y-6">
          <div>
            <h2 className="text-white text-lg font-normal tracking-tight">
              Software Engineering Intern (AI/ML) · Mirwork Inc
              {/*
              <span className="text-teal-400 text-sm hover:text-teal-300 transition-colors">
                ↗
              </span>
              */}
            </h2>
            <div className="text-gray-400 mt-1">
              <div className="text-sm mb-3">June 2024 - August 2024</div>
              <ul className="text-sm space-y-2 leading-relaxed list-disc list-inside">
                <li>
                  Engineered and optimized data extraction pipelines using
                  YouTube API to process audio, gathering about 70+ hours of
                  content
                </li>
                <li>
                  Designed, implemented, and maintained{" "}
                  <span className="font-medium">MongoDB</span> database to
                  efficiently store and manage extensive audio data sets
                </li>
                <li>
                  Utilized YouTube data to fine-tune{" "}
                  <span className="font-medium">LLM</span> to improve the
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
      <section>
        <div className="space-y-6">
          <div>
            <h2 className="text-white text-lg font-normal tracking-tight">
              Software Developer · Psych for Life
            </h2>
            <div className="text-gray-400 mt-1">
              <div className="text-sm mb-3">August 2023 - Present</div>
              <ul className="text-sm space-y-2 leading-relaxed list-disc list-inside">
                <li>
                  Migrated web app from NPM to{" "}
                  <span className="font-medium">PNPM</span>, cutting build times
                  and boosting reliability with efficient dependency linking and
                  content-addressable storage
                </li>
                <li>
                  Achieved 80% reduction in research time by utilizing{" "}
                  <span className="font-medium">Prompt Engineering</span> for
                  enhanced efficiency
                </li>
                <li>
                  Enhanced content management systems by fixing bugs and
                  integrating transcript functionality into the dashboard for
                  streamlined content updates
                </li>
                <li>
                  Leading integration of <span className="font-medium">AI</span>{" "}
                  into the writing process for enhanced efficiency, resulting in
                  a streamlined timeframe
                </li>
                <li>
                  Orchestrated the development and implementation of custom
                  prompt engineering solutions, resulting in a 50% reduction in
                  process cycle time and a 30% increase in team productivity
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
                  Employed caching techniques, resulting in a reduction in 70%
                  decrease in rendering delay and improving website performance
                </li>
                <li>
                  Migrated from NPM to <span className="font-medium">PNPM</span>
                  , reducing package install time by 40% improving dependency
                  management and build reliability
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
