import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-bold">
          Everything <br />
          is better with <br />a <span className="text-primary">Pizza</span>
        </h1>
        <p className="text-gray-400 my-6 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-primary text-white py-2 px-4 font-semibold uppercase rounded-full text-sm">
            Order now &nbsp; &rarr;
          </button>
          <button className=" text-gray-500 border-0">Learn more &nbsp; &rarr;</button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          alt="pizza"
          layout={"fill"}
          objectFit={"contain"}
        />
      </div>
    </section>
  );
};

export default Hero;
