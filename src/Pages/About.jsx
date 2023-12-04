function About() {
  return (
    <div className="container w-full mx-0 p-4  md:p-8 pt-10 bg-grey">
      <h1 className="text-3xl font-bold leading-tight text-center md:text-4xl">
        About Us
      </h1>

      <div className="space-y-3 ">
        <div className=" flex items-center gap-2">
          <img
            src="./land.svg"
            alt="About Image"
            className="w-full md:w-1/2 xl:w-1/3 lg:w-1/4 rounded-md shadow-md"
          />
          <p className="text-lg leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed Sit
            amet nulla auctor, vestibulum magna sed, convallis ex. Cras
            ultricies ligula sed magna dictum porta. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div className="flex  items-center gap-2">
          <p className="text-lg leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed Sit
            amet nulla auctor, vestibulum magna sed, convallis ex. Cras
            ultricies ligula sed magna dictum porta. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
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
