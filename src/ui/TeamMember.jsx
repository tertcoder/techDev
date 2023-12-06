import { twMerge } from "tailwind-merge";
import { useDark } from "../hooks/useDark";
import LinkedInSVG from "../assets/LinkedIn.svg";

function TeamMember({ imgSrc, imgContent, className, linkedInLink }) {
  const { isDark } = useDark();
  return (
    <div
      className={twMerge(
        `group h-40 w-40 overflow-hidden rounded-full  border border-highlight/30 shadow-md`,
        `${className} 
        ${
          isDark
            ? "bg-secondaryBg/50 shadow-highlight/30"
            : "bg-slate-100 shadow-highlight/10"
        }
        `,
      )}
    >
      <img src={imgSrc} alt={imgContent} className="w-full scale-110" />
      <a
        href={linkedInLink}
        rel="noreferrer"
        target="_blank"
        className={twMerge(
          `absolute -bottom-14 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-highlight/30 shadow-sm duration-150 group-hover:bottom-0`,
          `   ${
            isDark
              ? "bg-secondaryBg/50 shadow-highlight/30"
              : "bg-slate-100/30 shadow-highlight/10"
          }`,
        )}
      >
        <img src={LinkedInSVG} alt={`${imgContent}, LinkedIn Profile Link`} />
      </a>
    </div>
  );
}

export default TeamMember;
