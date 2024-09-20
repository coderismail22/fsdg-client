import AnimatedNumber from "react-animated-numbers";

const Counter = () => {
  const transitionTween = (index) => ({
    type: "tween",
    duration: index + 1.5,
    damping: 5,
    mass: 1,
  });

  // const staff = 50;
  const offices = 3;
  const projects = 45;
  const workingDistricts = 4;

  return (
    <div className="mt-5 relative h-[800px] md:h-[700px]  max-h-[1100px]">
      {/* Image Container */}
      <div className="absolute inset-0">
        <img
          src="/assets/overlay-bg.jpg"
          alt="image"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
      {/* Stats */}
      <div className="relative flex items-center justify-center h-full font-yeseva">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {/* <div className="flex flex-col rounded-lg bg-zinc-400 bg-opacity-20 px-4 py-8 text-center drop-shadow-lg">
                  <dt className="order-last text-2xl font-medium text-white">
                    Staff
                  </dt>

                  <div className="flex flex-col items-center text-2xl font-extrabold text-[#FFCD05]">
                    <AnimatedNumber
                      transitions={() => transitionTween(1)}
                      includeComma
                      animateToNumber={staff}
                      locale="en-US"
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                        { mass: 1, tension: 180, friction: 135 },
                        { mass: 1, tension: 260, friction: 100 },
                        { mass: 1, tension: 210, friction: 180 },
                      ]}
                    ></AnimatedNumber>
                  </div>
                </div> */}
                <div className="flex flex-col rounded-lg bg-zinc-400 bg-opacity-20 px-4 py-8 text-center drop-shadow-lg">
                  <dt className="order-last text-2xl font-medium text-white">
                    Offices across Bangladesh
                  </dt>
                  <div className="flex flex-col items-center text-2xl font-extrabold text-[#FFCD05]">
                    <AnimatedNumber
                      includeComma
                      animateToNumber={offices}
                      transitions={() => transitionTween(2)}
                      locale="en-US"
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                        { mass: 1, tension: 180, friction: 135 },
                        { mass: 1, tension: 260, friction: 100 },
                        { mass: 1, tension: 210, friction: 180 },
                      ]}
                    ></AnimatedNumber>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg bg-zinc-400 bg-opacity-20 px-4 py-8 text-center drop-shadow-lg">
                  <dt className="order-last text-2xl font-medium text-white">
                    Projects implemented till date
                  </dt>
                  <div className="flex flex-col items-center text-2xl font-extrabold text-[#FFCD05]">
                    <AnimatedNumber
                      includeComma
                      animateToNumber={projects}
                      transitions={() => transitionTween(3)}
                      locale="en-US"
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                      ]}
                    ></AnimatedNumber>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg bg-zinc-400 bg-opacity-20 px-4 py-8 text-center drop-shadow-lg">
                  <dt className="order-last text-2xl font-medium text-white">
                    Present working districts of Bangladesh
                  </dt>
                  <div className="flex flex-col items-center text-2xl font-extrabold text-[#FFCD05]">
                    <AnimatedNumber
                      includeComma
                      animateToNumber={workingDistricts}
                      transitions={() => transitionTween(4)}
                      locale="en-US"
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                      ]}
                    ></AnimatedNumber>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Counter;
