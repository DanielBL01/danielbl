import React from "react";

function About(): JSX.Element {
  return (
    <div>
      <div>
        <img src="/about.jpg" alt="about" className="shadow-lg rounded-3xl" />
        <br />
        <p>
          I am a Canadian-Korean student at the university of waterloo studying
          mechatronics engineering, an interdisciplinary program incorporating
          mechanical, computer and systems design engineering. I declared the
          computing option in my senior year to really concentrate on software
          and computing systems.
        </p>
        <p className="mt-2">
          I find that instead of being interested in one specific area of
          software development, I generally just enjoy the aspects of being a
          software engineer, that is to constantly learn new programming
          languages and frameworks as well as understanding codebases and
          complex systems to improve performance, extend those systems and work
          to keep things flexible and scalable.
        </p>
        <p className="mt-2">
          As an engineer, I care about making impact and that means solving
          meaningful problems and innovating on new ideas.
        </p>
      </div>
      <br />
    </div>
  );
}

export default About;
