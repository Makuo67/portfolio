import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full lgl:w-1/2 md:w-1/2 flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          {/* <h2 className="text-4xl font-bold">Job Experience</h2> */}
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Engineer Intern"
            subTitle="IntelHP (March 2024 - July 2024)"
            result="Remote"
            des="Trained and deployed machine learning models on AWS servers to analyze real-time data streams.
                  Executed rigorous integration testing to validate data from EHR systems and wearable devices through AWS platforms.
                  Set up and maintained data ingestion pipelines via AWS Glue and IoT Hubs.
            "
          />
          <ResumeCard
            title="Junior Software Developer"
            subTitle=" BAG (August 2023 - December 2023)"
            result="Rwanda"
            des="Enhanced the platform's user interface by updating and redesigning frontend components using React.
              Developed and integrated a task scheduling feature, allowing users to efficiently manage their activities.
              Utilized JavaScript and Node.js to implement new functionalities and optimize existing workflows, improving overall user experience and platform performance."
          />
          <ResumeCard
            title="Business Development/Investor Relations Intern"
            subTitle="Supivaa Advisory Group (May 2024 - August 2024)"
            result="Remote"
            des="Conducted extensive data analysis across seven countries to advise the establishment of a $50 million pharmaceutical plant; interviewed key opinion leaders and regulatory authorities.
                  Assisted clients in raising over $10 million in funding rounds and expanding client exports to the European Union.
                  Crafted portfolios for investor engagement and impact investment."
          />
          <ResumeCard
            title="Deal Sourcing Intern"
            subTitle="IgniteXL Capital (Setpember 2023 - October 2023)"
            result="Rwanda (Remote)"
            des="Researched and reported eleven start-ups for potential investment opportunities"
          />
          <ResumeCard
            title="Technical Cunsulting Intern"
            subTitle="International Training Institute for Skills Development - (May 2023 - Present)"
            result="Rwanda"
            des="Currently manages the website and software architecture of the institute. Created a functional database and email administration to synchronize communication in the company"
          />
          <ResumeCard
            title="Teaching Intern"
            subTitle="St. Anthony's Comprehensive Institute - (September 2019 - September 2020)"
            result="Nigeria"
            des="Tutored grade 10 students totalling 152 in Physics classes. Mentored 38 first-year junior students leading to improved academic performance in BECE exams
            "
          />
        </div>
      </div>

      {/*       
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
