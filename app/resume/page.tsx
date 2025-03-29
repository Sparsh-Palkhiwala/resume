import React from "react";

const MinimalTextResume = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-16">
      {/* Main experience section*/}
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
    </div>
  );
};

export default MinimalTextResume;
