import React from "react";
import { BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

function Home(): JSX.Element {
  return (
    <div>
      <div className="mb-5">
        <span style={{ fontSize: "2em" }}>
          <span>I'm a </span>{" "}
          <TypeAnimation
            sequence={["Software Engineer", 1000, "Student at UWaterloo", 1000]}
            speed={30}
            repeat={Infinity}
          />
        </span>
      </div>
      <div>
        <p>
          Hi! I'm Daniel, a mechatronics engineering student at the University
          of Waterloo with an option in computing set to graduate April 2024.
        </p>
        <br />
        <p className="text-xl">Past</p>
        <p>
          Previously, I've interned as a backend developer and software engineer
          at Pepperdata, IBM and Lumenix. Since then, I've had the opportunity
          to work many languages and frameworks. Through many experiences, I
          learned to be efficient in different development environments such as
          startups, being able to rapidly developing applications to production
          and at larger companies, extending more established codebases.
        </p>
        <br />
        <p className="text-xl">Now</p>
        <p>
          I'm currently doing my final internship as a software engineer intern
          at Databricks in San Francisco.
        </p>
        <hr className="mt-2 mb-4" />
        <div>
          <BsMailbox className="inline mr-2" />
          <a href="mailto:d274lee@uwaterloo.ca" className="inline italic">
            d274lee@uwaterloo.ca
          </a>
        </div>
        <div className="mt-2 mb-2">
          <BsLinkedin className="inline mr-2" />
          <a
            href="https://www.linkedin.com/in/danielbl01/"
            className="inline italic"
            target="_blank"
          >
            linkedin.com/in/danielbl01
          </a>
        </div>
        <div>
          <BsGithub className="inline mr-2" />
          <a
            href="https://github.com/DanielBL01"
            className="inline italic"
            target="_blank"
          >
            github.com/danielBL01
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
