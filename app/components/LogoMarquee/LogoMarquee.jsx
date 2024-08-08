import React from "react";
import Marquee from "react-fast-marquee";

const LogoMarquee = ({progress}) => {

  return (
    <Marquee>
      {progress?.map((info) => (
        <div
          key={`card-${info?._id}`}
          className="mx-4 flex items-center gap-2 rounded-md bg-secondary border-r-2 border-hover"
        >
          <div className="flex items-center w-96 justify-center gap-2 px-3 py-2">
            <h1 className="font-bold text-hover">{info.data}</h1>
            <h3>{info.title}</h3>
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default LogoMarquee;
