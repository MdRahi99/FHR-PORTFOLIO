import React from "react";
import Marquee from "react-marquee-slider";

const LogoMarquee = () => {
  const cardInfo = [
    { title: "Years of Experience", value: 2 },
    { title: "Completed Projects", value: 3 },
    { title: "GitHub Contributions", value: 50 },
    { title: "Open Source Projects", value: 1 },
  ];

  return (
    <Marquee velocity={30} minScale={0.7} resetAfterTries={200}>
      {cardInfo.map((info, index) => (
        <div
          key={`card-${index}`}
          className="mx-4 flex items-center gap-2 rounded-md bg-secondary border-r-2 border-hover"
        >
          <div className="flex items-center w-96 justify-center gap-2 px-3 py-2">
            <h1 className="font-bold text-hover">{info.value}</h1>
            <h3>{info.title}</h3>
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default LogoMarquee;
