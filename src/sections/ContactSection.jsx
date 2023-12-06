import { HiMiniAtSymbol, HiMiniPhone } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import { useDark } from "../hooks/useDark";

function ContactSection() {
  const { isDark } = useDark();
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center pt-40"
    >
      <h2 className="mb-8 text-center text-4xl font-semibold">Contact Us</h2>
      <p className="text-center text-lg">
        Have a project in mind or just want to say hello? <br></br> We'd love to
        hear from you! Reach out to us through the following channels
      </p>
      <div className="mt-9 flex w-full ">
        <div className=" flex-1 space-y-5 pt-8 ">
          <div className="flex items-center gap-4 text-lg">
            <HiMiniAtSymbol className="text-2xl" />
            <span>techdevs023@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <HiMiniPhone className="text-2xl" /> <span>(+257) 65 849 761</span>
          </div>
        </div>
        <div className="flex-1">
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="name">
                Your Name:
              </label>
              <input
                className={twMerge(
                  `rounded-lg border border-transparent px-3 py-2 outline-none  focus:border-highlight/20 focus:shadow-sm focus:shadow-highlight/10`,
                  `${isDark ? "bg-secondaryBg/50" : " bg-slate-50 "}`,
                )}
                type="text"
                id="name"
                name="user_name"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="email">
                Your Email Address:
              </label>
              <input
                className={twMerge(
                  `rounded-lg border border-transparent px-3 py-2 outline-none  focus:border-highlight/20 focus:shadow-sm focus:shadow-highlight/10`,
                  `${isDark ? "bg-secondaryBg/50" : " bg-slate-50 "}`,
                )}
                type="email"
                id="email"
                name="user_name"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="message">
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                className={twMerge(
                  `min-h-[150px] w-full resize-none rounded-lg border border-transparent px-3 py-2 outline-none focus:border-highlight/20 focus:shadow-sm focus:shadow-highlight/10`,
                  `${isDark ? "bg-secondaryBg/50" : " bg-slate-50 "}`,
                )}
                placeholder="Enter your message..."
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
