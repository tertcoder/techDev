import { HiMiniAtSymbol, HiMiniPhone } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import { useDark } from "../hooks/useDark";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useRef, useState } from "react";

function ContactSection() {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMsg, setClientMsg] = useState("");
  //loading handler
  const [isLoading, setIsLoading] = useState(false);
  //inputs refs
  const nameInput = useRef();
  const emailInput = useRef();
  const msgInput = useRef();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (clientName < 1) {
      nameInput.current.focus();
      return;
    }

    if (clientEmail.length < 1 || !clientEmail.includes("@")) {
      emailInput.current.focus();
      return;
    }

    if (clientMsg.length < 1) {
      msgInput.current.focus();
      return;
    }

    setIsLoading(true);
    emailjs
      .sendForm(
        "service_5f7z30k",
        "template_rd3rkp8",
        form.current,
        "rOqjgNQ2sPTweiWYn",
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setIsLoading(false);
            toast.success("Sent successfully", {
              duration: 2000,
              position: "top-center",
              className: `${
                isDark
                  ? "bg-secondaryBg text-primaryColor/90"
                  : "bg-slate-50 text-primaryBg/80"
              }`,
            });
          }
        },
        () => {
          setIsLoading(false);
          toast.error("Oops something went wrong", {
            duration: 2000,
            position: "top-center",
            className: `${
              isDark
                ? "bg-secondaryBg text-primaryColor/90"
                : "bg-slate-50 text-primaryBg/80"
            }`,
          });
        },
      );
    //email sending
  };

  const { isDark } = useDark();
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center px-8 pt-40 xl:px-0"
    >
      <Toaster />
      <h2 className="mb-8 text-center text-4xl font-semibold">Contact Us</h2>
      <p className="text-center text-lg">
        Have a project in mind or just want to say hello? <br></br> We'd love to
        hear from you! Reach out to us through the following channels
      </p>
      <div className="mt-9 flex w-full flex-col lg:flex-row">
        <div className="flex-1 space-y-5 self-center pt-8 ">
          <div className="flex items-center gap-4 text-lg font-medium">
            <HiMiniAtSymbol className="text-2xl" />
            <span>techdevs023@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-lg font-medium">
            <HiMiniPhone className="text-2xl" /> <span>(+257) 65 849 761</span>
          </div>
        </div>
        <div className="flex-1">
          <form
            className="mt-8 space-y-4 lg:mt-0"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-col">
              <label className="mb-2 font-medium" htmlFor="name">
                Your Name:
              </label>
              <input
                className={twMerge(
                  `rounded-lg border border-highlight/10 px-3  py-2 outline-none  duration-150 focus:border-highlight/20 focus:shadow-sm focus:shadow-highlight/10`,
                  `${isDark ? "bg-secondaryBg/50" : " bg-slate-50 "}`,
                )}
                type="text"
                ref={nameInput}
                id="name"
                name="user_name"
                onChange={(e) => {
                  setClientName(e.target.value);
                }}
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium" htmlFor="email">
                Your Email Address:
              </label>
              <input
                onChange={(e) => {
                  setClientEmail(e.target.value);
                }}
                ref={emailInput}
                className={twMerge(
                  `rounded-lg border border-highlight/10 px-3  py-2 outline-none  duration-150 focus:border-highlight/20 focus:shadow-sm focus:shadow-highlight/10`,
                  `${isDark ? "bg-secondaryBg/50" : " bg-slate-50 "}`,
                )}
                type="text"
                id="email"
                name="user_email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium" htmlFor="message">
                Your Message:
              </label>
              <textarea
                ref={msgInput}
                onChange={(e) => {
                  setClientMsg(e.target.value);
                }}
                id="message"
                name="message"
                className={twMerge(
                  `min-h-[150px] w-full resize-none rounded-lg border border-highlight/10 px-3  py-2 outline-none duration-150 focus:border-highlight/20 focus:shadow-sm focus:shadow-highlight/10`,
                  `${isDark ? "bg-secondaryBg/50" : " bg-slate-50 "}`,
                )}
                placeholder="Enter your message..."
              ></textarea>
            </div>
            <div>
              <button
                className={twMerge(
                  `rounded-lg border border-highlight/10 bg-white px-5 py-2 text-lg font-medium shadow-sm duration-150 focus:border-highlight/20`,
                  `${
                    isDark
                      ? "bg-secondaryBg/50 shadow-highlight/10"
                      : "bg-slate-50"
                  }`,
                )}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
