import React, { useState } from "react";
import Modal from "react-modal";
import CertificateModal from "./CertificateModal";

function Resume(): JSX.Element {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [certificateImage, setCertificateImage] = useState("");

  function openModal(): void {
    setIsOpen(true);
  }

  function setImage(url: string): void {
    setCertificateImage(url);
  }

  function modalOnClick(url: string): void {
    setImage(url);
    openModal();
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <div>
      <p>My more elaborate and up-to-date web resume.</p>
      <div className="mt-2">
        <p className="text-lg font-light">Experience</p>
        <hr className="mt-1" />
        <div className="ml-2">
          <div className="mt-2">
            <p className="text-base font-medium">Databricks</p>
            <p className="text-sm italic font-extralight">
              Incoming Software Engineer Intern, San Francisco, CA, USA •
              on-site
            </p>
            <p className="text-sm italic font-extralight">
              May 2023 - August 2023 (12-weeks)
            </p>
            <p className="text-sm mt-2 ml-5 font-light">Summer 2023.</p>
          </div>
          <div className="mt-2">
            <p className="text-base font-medium">Pepperdata</p>
            <p className="text-sm italic font-extralight">
              Backend Developer Intern, Toronto, ON, Canada • remote
            </p>
            <p className="text-sm italic font-extralight">
              May 2022 - Aug 2022 (16-weeks)
            </p>
            <p className="text-sm mt-2 ml-5 font-light">
              Reduced average cloud installation time{" "}
              <span className="font-medium">by over 94%</span> by designing and
              implementing an internal provisioning tool written in Java, Spark
              Web Framework for configuration files stored on Amazon S3.
            </p>
            <p className="text-sm mt-2 ml-5 font-light">
              Increased efficiency of establishing proof of concept (
              <span className="font-medium">PoC</span>) by leading the research
              and development of a serverless metrics ingestion tool to collect
              and ingest <span className="font-medium">100,000+</span> data
              points per day of historical cluster metrics using Java, Maven and
              deployed to AWS Lambda, leading to a{" "}
              <span className="font-medium">7 day</span> reduction in
              establishment time.
            </p>
          </div>
          <div className="mt-2">
            <p className="text-base font-medium">IBM</p>
            <p className="text-sm italic font-extralight">
              Backend Developer Intern, Ottawa, ON, Canada • remote
            </p>
            <p className="text-sm italic font-extralight">
              Sep 2021 - Dec 2021 (16-weeks)
            </p>
            <p className="text-sm mt-2 ml-5 font-light">
              Implemented an HTTP client library used by engineering team for
              certificate signing requests to connect to microservices written
              in Java using Apache HttpComponents.
            </p>
            <p className="text-sm mt-2 ml-5 font-light">
              Resolved a critical logging defect neglected for{" "}
              <span className="font-medium">over 3 months</span> by reproducing
              failures and logs on CentOS.
            </p>
          </div>
          <div className="mt-2">
            <p className="text-base font-medium">Lumenix</p>
            <p className="text-sm italic font-extralight">
              Software Engineer Intern, Etobicoke, ON, Canada • remote
            </p>
            <p className="text-sm italic font-extralight">
              Jul 2020 - Aug 2020 & Jan 2021 - Apr 2021 (24-weeks, two
              internships)
            </p>
            <p className="text-sm mt-2 ml-5 font-light">
              Launched{" "}
              <a
                href="https://www.aimsplatform.io/?gclid=CjwKCAjwmJeYBhAwEiwAXlg0Ae5VO23h_9W7WayJKb2nOKiBHgcVsDoC1ta6nTBTtoiKuLeN2GF1axoCgH4QAvD_BwE"
                className="italic"
                target={"_blank"}
              >
                AIMS
              </a>
              , a monitoring platform displaying data of{" "}
              <span className="font-medium">over 50,000</span> patients by
              designing and developing a full-stack web application using
              Python, Django, jQuery and Chart.js for a minimum viable product (
              <span className="font-medium">MVP</span>).
            </p>
            <p className="text-sm mt-2 ml-5 font-light">
              Led the design and implementation of a data pipeline using Amazon
              DynamoDB streams and AWS Lambda triggers for real-time events,
              leading to increased visibility.
            </p>
            <p className="text-sm mt-2 ml-5 font-light">
              Developed a pub/sub messaging system in Python to connect{" "}
              <span className="font-medium">20+</span> IoT devices using the
              MQTT protocol.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-lg font-light">Projects</p>
        <hr className="mt-1" />
        <div className="ml-2">
          <div className="mt-2">
            <p className="text-base font-medium">Stock Price Discovery</p>
            <p className="text-sm">
              <a
                href="https://github.com/DanielBL01/stock-price-discovery"
                className="inline underline"
                target="_blank"
              >
                github
              </a>
            </p>
            <p className="text-sm mt-2 ml-5 font-light">
              A full-stack web app to efficiently predict the change of stock
              prices by providing <span className="font-medium">real-time</span>{" "}
              processed and labeled news data.
            </p>
            <p className="text-sm mt-2 ml-5 font-light">
              Built front end in TypeScript, React utilizing server-sent events
              (<span className="font-medium">SSE</span>) for real-time data.
            </p>
            <p className="text-sm mt-2 ml-5 font-light">
              Developed <span className="font-medium">microservices</span>{" "}
              backend using Java, Spring which includes a data scraping service,
              real-time data processing service using Apache Kafka and a service
              for RESTful APIs, persisting data on PostgreSQL and used Docker
              for <span className="font-medium">containerization</span>.
            </p>
          </div>
          <div className="mt-2">
            <p className="text-base font-medium">danielbl</p>
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
            <p className="text-sm mt-2 ml-5 font-light">
              A personal static web app built with TypeScript, React, Tailwind
              CSS, Vite and Firebase (Firestore Database, Storage, Hosting).
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-lg font-light">Education</p>
        <hr className="mt-1" />
        <div className="ml-2">
          <div className="mt-2">
            <p className="text-base font-medium">University of Waterloo</p>
            <p className="text-sm italic font-extralight">
              Bachelor of Applied Science in Mechatronics Engineering, Computing
              Option
            </p>
            <p className="text-sm italic font-extralight">
              September 2019 - April 2024
            </p>
            <p className="text-sm mt-2 ml-5 font-light">
              <span className="font-medium">Relevant Coursework</span>:
              Object-Oriented Programming, Algorithms & Data Structures,
              Real-Time Systems
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-lg font-light">Certifications</p>
        <hr className="mt-1" />
        <div className="ml-2">
          <div className="mt-2">
            <p className="text-sm font-medium">
              Java Multithreading, Concurrency & Performance Optimization{" "}
              <span className="text-sm font-light">
                (
                <button
                  className="italic hover:underline"
                  onClick={() =>
                    modalOnClick(
                      "https://firebasestorage.googleapis.com/v0/b/danielbl-f6569.appspot.com/o/images%2FJava%20Multithreading%2C%20Concurrency%20%26%20Performance%20Optimization.jpg?alt=media&token=d68f6aaf-10b3-4746-8f98-e4937850fdfe"
                    )
                  }
                >
                  view
                </button>
                )
              </span>
            </p>
            <p className="text-sm italic font-extralight">
              Udemy, Instructor Michael Pogrebinsky
            </p>
          </div>
          <CertificateModal
            certificateImage={certificateImage}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
          />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-lg font-light">Skills & Interests</p>
        <hr className="mt-1" />
        <div className="ml-2">
          <div className="mt-2">
            <p className="text-sm font-light">
              <span className="font-medium">Languages & Tools</span>: Java,
              Python, TypeScript, AWS, Spring, Django, React, PostgreSQL,
              MongoDB, Docker
            </p>
            <p className="text-sm font-light mt-2">
              <span className="font-medium">Want to Learn / Explore</span>: Go,
              Kubernetes, Apache Kafka, Apache Spark
            </p>
            <p className="text-sm font-light mt-2">
              <span className="font-medium">Topics</span>: Full-stack,
              Back-end/Infrastructure, Microservices, Big Data, Distributed
              Computing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
