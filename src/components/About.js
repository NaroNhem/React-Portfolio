export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#605770] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#F7C4A5]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Justin, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Highly motivated with a passion for learning all things tech. I
              started coding in university and have since then developed a
              passion for the tech industry. As a developer I am always looking
              to learn and apply new technologies to my projects. I am driven
              and ready for any challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
