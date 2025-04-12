import Image from "next/image";
import { Button } from "../ui/button";

function Hero() {
  return (
    <section className="bg-background text-foreground ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-card-foreground">
            Welcome to{" "}
            <span className="text-primary inline-block">Collelink</span>{" "}
            Connecting Colleges and Clubs Through Events
          </h1>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            Empower your college community with Collelink, the ultimate platform
            for organizing and participating in campus events. Whether you're a
            student club looking to host an engaging workshop or a college
            committee planning a vibrant cultural fest, Collelink brings your
            ideas to life.
          </p>
          <div className="flex justify-center">
            <a href="#about">
              <Button variant="outline">Learn More</Button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            width={500}
            height={500}
            src="/hero.svg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
