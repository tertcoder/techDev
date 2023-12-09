import { twMerge } from "tailwind-merge";

function DarkToggle({ isDark, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `flex h-[32px] w-[56px] cursor-pointer items-center justify-between rounded-full   p-[5px] 
       duration-300`,
        `${isDark ? "bg-secondaryBg " : "bg-slate-100"} ${className}`,
      )}
    >
      <span className="pl-1 font-semibold">L</span>
      <div
        className={`absolute h-[24px] w-[24px] rounded-full 
      ${isDark ? "translate-x-full bg-primaryBg " : "bg-primaryColor"}
       duration-300`}
      ></div>
      <span className="pr-1 font-semibold text-secondaryColor">D</span>
    </button>
  );
}

export default DarkToggle;
