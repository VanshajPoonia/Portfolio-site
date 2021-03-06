import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function About() {
  useEffect(() => {
    document.title = "Vanshaj Poonia | About Me ";

    bounce();
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, Iām Vanshaj,web developer."
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              A
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              b
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              u
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              m
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
          </h1>
          <p align="LEFT">
            A skilled and knowledgeable person with extensive knowledge of{" "}
            <strong>programming</strong> and&nbsp;
            <strong>computer applications</strong> . šØāš»
            <br />
            <br />
            Well-organised enthusiastic person, problem solver, quick learner,
            debugger and,
            <br />
            a fan of "Ben 10" and Gaming.
            <br />
            <br />
            Interested in the development spectrum and actively looking for an
            opportunity in the field of Software Engineering.
            <br />
            <br />
            Follow me on&nbsp;
            <a
              href="https://www.instagram.com/vanshajpoonia/"
              style={{ color: "#23ffde" }}
            >
              Instagram&nbsp;
            </a>
            to know more or just&nbsp;
            <a href="/contact" style={{ color: "#23ffde" }}>
              contact&nbsp;
            </a>
            me.
          </p>
        </div>
        <span className="tags bottom-tags" style={{ bottom: "10px" }}>
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>
      <div id="mysvg">
        <img
          alt="hacker"
          src={`https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/code${
            Math.floor(Math.random() * 4) + 1
          }.svg`}
        />
      </div>
    </>
  );
}
