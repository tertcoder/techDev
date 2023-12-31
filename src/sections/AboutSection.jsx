import tertius from "../assets/tertius.png";
import toussaint from "../assets/toussaint.png";
import shukrani from "../assets/shukrani.jpg";
import TeamMember from "../ui/TeamMember";
function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center px-8 pt-40 xl:px-0"
    >
      <h2 className="mb-8 text-center text-4xl font-semibold">Meet the Team</h2>
      <div className="mt-6 grid min-h-[50vh] grid-cols-1 items-center lg:mt-0 lg:grid-cols-2">
        <div className="relative mb-6 flex h-full flex-wrap justify-center space-x-4 sm:space-x-8 lg:mb-0 lg:justify-start lg:space-x-0">
          <TeamMember
            imgSrc={toussaint}
            className="relative lg:absolute"
            imgContent="Toussaint Iradukunda"
            linkedInLink="https://bi.linkedin.com/in/iradukunda-toussaint-1861a8261"
          />
          <TeamMember
            imgSrc={tertius}
            className="relative lg:absolute lg:top-44"
            imgContent="Bon Tertius Tuyishimire"
            linkedInLink="https://www.linkedin.com/in/bon-tertius-tuyishimire-1a997321a"
          />
          <TeamMember
            imgSrc={shukrani}
            className="relative lg:absolute lg:left-44 lg:top-24 "
            imgContent="Liberatrice Bayizere"
            linkedInLink="https://www.linkedin.com/in/liberatrice-baizer-4681a7249"
          />
        </div>
        <div>
          <p className="text-center text-lg lg:text-left">
            We are a dynamic trio passionate about transforming ideas into
            reality. With expertise in UI design, front-end and back-end
            development, we thrive on creating seamless digital experiences. Our
            collaborative spirit and commitment to excellence drive us to
            deliver innovative solutions. Get to know the faces behind the code
            and design that bring your projects to life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
