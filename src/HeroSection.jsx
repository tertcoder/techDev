export function HeroSection() {
  return (
    <section
      id="home"
      className="flex h-[calc(100vh-64px)] w-full flex-col items-center justify-center px-8"
    >
      <h1 className="flex -translate-y-8 flex-col items-center justify-center gap-4 text-6xl font-bold tracking-wider">
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
