import React from "react";

function AboutSection() {
  return (
    <section
      id="about"
      className="text-gray-700 dark:text-gray-300 body-font bg-white dark:bg-gray-900"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900 dark:text-white">
              About ColleLink
            </h1>
            <div className="h-1 w-24 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-base text-gray-600 dark:text-gray-400">
            ColleLink is your ultimate campus companion — a platform designed to
            connect college students, clubs, and communities through events,
            collaboration, and opportunities. Create, explore, and apply for
            college events with ease. We’re building a smarter, more connected
            campus experience — one link at a time.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {[
            {
              title: "Create & Manage Events",
              subtitle: "FOR CLUBS & SOCIETIES",
              image: "/about/create.svg",
              desc: "Easy tools for clubs and societies to publish and organize events effortlessly.",
            },
            {
              title: "Apply & Participate",
              subtitle: "FOR STUDENTS",
              image: "/about/ticket.svg",
              desc: "Students can browse and register for events that match their interests.",
            },
            {
              title: "Collaborate",
              subtitle: "CONNECT & NETWORK",
              image: "/about/collab.svg",
              desc: "Clubs and students can connect, share ideas, and collaborate on exciting initiatives.",
            },
            {
              title: "Stay Updated",
              subtitle: "EVENT TRACKING",
              image: "/about/update.svg",
              desc: "Always stay in the loop with upcoming events and campus opportunities.",
            },
          ].map((card, idx) => (
            <div key={idx} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 dark:bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={card.image}
                  alt={card.title}
                />
                <h3 className="tracking-widest text-indigo-500 dark:text-indigo-400 text-xs font-medium title-font">
                  {card.subtitle}
                </h3>
                <h2 className="text-lg text-gray-900 dark:text-white font-semibold title-font mb-2">
                  {card.title}
                </h2>
                <p className="leading-relaxed text-sm text-gray-700 dark:text-gray-300">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
