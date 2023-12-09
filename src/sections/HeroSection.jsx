function HeroSection() {
  return (
    <section
      id="home"
      className="flex h-screen w-full flex-col items-center justify-center "
    >
      <h1 className="flex -translate-y-8 flex-col items-center justify-center gap-4 text-4xl font-bold tracking-wider sm:text-6xl">
        <span>
          You{" "}
          <span className="inline-block">
            Dream
            <span className="block h-1 w-full rounded-full bg-highlight/70 duration-300 "></span>
          </span>{" "}
          It,
        </span>
        <span>
          We{" "}
          <span className="inline-block">
            Build
            <span className="block h-1 w-full rounded-full bg-highlight/70 duration-300"></span>
          </span>{" "}
          It.
        </span>
      </h1>
    </section>
  );
}
export default HeroSection;
