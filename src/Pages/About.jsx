function About() {
  return (
    <div className="container w-full mx-0 p-4  md:p-8 pt-10 bg-grey">
      

      <div className="space-y-3 ">
        <div className=" flex items-center gap-2">
          <img
            src="./youth.svg"
            alt="About Image"
            className="w-full md:w-1/2 xl:w-1/3 lg:w-1/4 rounded-md shadow-md border-radius-[50%]"
          />

<div className="flex flex-col gap-2">
  <h1 className="text-3xl font-bold leading-tight text-center md:text-4xl">
        About Us:
      </h1>
          <p className="text-sm leading-relaxed text-gray-700">
            About Mindscape: Welcome to Mindscape, a pioneering web application
            designed exclusively for the youth, redefining the landscape of
            mental health support. At Mindscape, we recognize the unique
            challenges faced by young individuals in today's fast-paced world,
            and we're dedicated to providing a safe and empowering space for
            them to prioritize their mental well-being. Our platform is a result
            of careful consideration and user-centric design, ensuring that
            every feature is tailored to meet the diverse needs of the youth
            demographic.
          </p>
</div>
        </div>
        <div className="flex  items-center gap-2">
        <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold leading-tight text-center md:text-4xl">
        Our Vision:
      </h1>
          <p className="text-sm leading-relaxed text-gray-700">
             Mindscape envisions a world where mental health is a
            priority, and seeking support is as natural as any other aspect of
            well-being. We strive to destigmatize mental health discussions,
            empower the youth to take control of their emotional health, and
            foster a community of resilience.
          </p>
        </div>
          <img
            src="./land.svg"
            alt="About Image"
            className="w-full md:w-1/2 xl:w-1/3 lg:w-1/4 rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
