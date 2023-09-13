export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#474748] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#CA2E55]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Justin. Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a front-end developer from Philadelphia. I currently work as a
              web developer at Independence Blue Cross. I'm passionate about
              developing and designing innovative front-end experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
