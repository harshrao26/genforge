import React from "react";
import "./AnimatedBackground.css"; // We'll extract styles separately

const AnimatedBackground = ({className}) => {
  return (
    <div  className={`hero__bg h-screen bg-transparent pt-60 lack ${className}`}>
      <div className="hero__bg-wrap  h-screen overflow-hidden">
        <div className="liq-elem-1">
          <div className="svg">
            <svg width="100%" height="100%" viewBox="0 0 465 656" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M159.149 10.1811C325.285 56.1473 434.794 254.687 462.755 368.162C479.307 465.457 374.521 583.768 257.269 635.822C140.017 687.876 73.5224 638.489 111.035 484.352C115.905 464.339 150.656 439.464 53.3154 260.936C-44.0254 82.408 -6.98747 -35.7851 159.149 10.1811Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div className="liq-elem-2">
          <div className="svg">
            <svg width="100%" height="100%" viewBox="0 0 641 906" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M219.45 14.1937C448.769 77.6412 599.924 351.687 638.52 508.317C661.367 642.614 516.73 805.919 354.886 877.769C193.042 949.62 101.259 881.452 153.038 668.695C159.761 641.071 207.728 606.735 73.3675 360.312C-60.9926 113.889 -9.8689 -49.2538 219.45 14.1937Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div className="liq-elem-3">
          <div className="svg">
            <svg width="100%" height="100%" viewBox="0 0 928 1198" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.9"
                d="M698.24 985.192C321.86 1041.02 646.399 1198.79 459.491 1197.06C272.583 1195.33 105.248 1012.81 158.676 974.89C280.662 888.32 304.998 797.409 233.712 665.811C162.425 534.213 -88.3203 338.604 33.8754 177.485C286.806 -156.012 642.196 50.8888 637.012 244.307C633.385 379.645 632.473 691.362 810.134 779.408C987.796 867.454 975.437 944.077 698.24 985.192Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
