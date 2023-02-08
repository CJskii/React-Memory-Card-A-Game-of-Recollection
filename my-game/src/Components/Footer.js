import React from "react";

const Footer = () => {
  return (
    <div className="footer flex justify-center items-center text-2xl text-slate-300">
      <p className="mr-1">Created by </p>
      <a
        className="link hover:text-purple-300"
        rel="noreferrer"
        href="https://github.com/CJskii/memory-card-game"
        target="_blank"
      >
        CJski
      </a>
      <img src="./github.svg" className="github h-25 w-25 ml-2" alt="github" />
    </div>
  );
};

export default Footer;
