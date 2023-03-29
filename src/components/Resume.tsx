import React from "react";

function Resume(): JSX.Element {
  return (
    <div>
      <div>
        <p>
          My up-to-date resume. You can also download my PDF resume{" "}
          <a className="underline" href="">
            here
          </a>
          .
        </p>
        <div className="mt-2">
          <p className="text-lg">Experience</p>
          <hr className="mt-1" />
          <div className="ml-2">
            <div className="mt-2">
              <p className="text-base">Databricks</p>
              <p className="text-sm italic">
                Software Engineer Intern, San Francisco, CA, USA • on-site
              </p>
              <p className="text-sm italic">May 2023 - August 2023</p>
              <p className="text-sm mt-2 ml-5">Incoming Summer 2023.</p>
            </div>
            <div className="mt-2">
              <p className="text-base">Pepperdata</p>
              <p className="text-sm italic">
                Backend Developer Intern, Toronto, ON, Canada • remote
              </p>
              <p className="text-sm italic">May 2022 - Aug 2022</p>
              <p className="text-sm mt-2 ml-5">
                Reduced average cloud installation time by over 94% by designing
                and implementing an internal provisioning tool written in Java,
                Spark Web Framework for configuration files stored on Amazon S3.
              </p>
              <p className="text-sm mt-2 ml-5">
                Increased efficiency of establishing proof of concept (PoC) by
                leading the research and development of a serverless metrics
                ingestion tool to collect and ingest 100,000+ data points per
                day of historical cluster metrics using Java, Maven and deployed
                to AWS Lambda, leading to a 7 day reduction in establishment
                time.
              </p>
            </div>
            <div className="mt-2">
              <p className="text-base">IBM</p>
              <p className="text-sm italic">
                Backend Developer Intern, Ottawa, ON, Canada • remote
              </p>
              <p className="text-sm italic">Sep 2021 - Dec 2021</p>
              <p className="text-sm mt-2 ml-5">
                Implemented an HTTP client library used by engineering team for
                certificate signing requests to connect to microservices written
                in Java using Apache HttpComponents.
              </p>
              <p className="text-sm mt-2 ml-5">
                Resolved a critical logging defect neglected for over 3 months
                by reproducing failures and logs on CentOS.
              </p>
            </div>
            <div className="mt-2">
              <p className="text-base">Lumenix</p>
              <p className="text-sm italic">
                Software Engineer Intern, Etobicoke, ON, Canada • remote
              </p>
              <p className="text-sm italic">
                Jul 2020 - Aug 2020 & Jan 2021 - Apr 2021
              </p>
              <p className="text-sm mt-2 ml-5">
                Launched AIMS, a monitoring platform displaying data of over
                50,000 patients by designing and developing a fullstack web
                application using Python, Django, jQuery and Chart.js.
              </p>
              <p className="text-sm mt-2 ml-5">
                Led the design and implementation of a data pipeline using
                Amazon DynamoDB streams and AWS Lambda triggers for real-time
                events, leading to increased visibility.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-lg">Projects</p>
          <hr className="mt-1" />
          <div className="ml-2">
            <div className="mt-2">
              <p className="text-base">Stock Price Discovery</p>
              <p className="text-sm">
                <a
                  href="https://github.com/DanielBL01/stock-price-discovery"
                  className="inline underline"
                  target="_blank"
                >
                  github
                </a>{" "}
                |{" "}
                <a href="" className="inline underline">
                  website
                </a>
              </p>
              <p className="text-sm mt-2 ml-5">
                A web app to efficiently predict the change of stock prices by
                providing real-time processed and labeled news data.
              </p>
              <p className="text-sm mt-2 ml-5">
                Built front end in TypeScript, React utilizing server-sent
                events (SSE) for real-time data.
              </p>
              <p className="text-sm mt-2 ml-5">
                Developed microservices backend using Java, Spring which
                includes a data scraping service, real-time data processing
                service using Apache Kafka and a service for RESTful APIs,
                persisting data on PostgreSQL and deployed using Docker.
              </p>
            </div>
            <div className="mt-2">
              <p className="text-base">danielbl</p>
              <p className="text-sm">
                <a
                  href="https://github.com/DanielBL01/danielbl"
                  className="inline underline"
                  target="_blank"
                >
                  github
                </a>{" "}
                |{" "}
                <a
                  href="https://danielbl.com/"
                  className="inline underline"
                  target="_blank"
                >
                  website
                </a>
              </p>
              <p className="text-sm mt-2 ml-5">
                A personal web app built with TypeScript, React, Firebase,
                Tailwind CSS and Vite.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-lg">Education</p>
          <hr className="mt-1" />
          <div className="ml-2">
            <div className="mt-2">
              <p className="text-base">University of Waterloo</p>
              <p className="text-sm italic">
                Bachelor of Applied Science in Mechatronics Engineering,
                Computing Option
              </p>
              <p className="text-sm italic">September 2019 - April 2024</p>
              <p className="text-sm mt-2 ml-5">
                Relevant Coursework: Object-Oriented Programming, Algorithms,
                Real-Time Systems
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Resume;
