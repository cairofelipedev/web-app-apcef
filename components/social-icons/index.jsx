import Mail from "./mail.svg";
import Calendar from "./calendar.svg";
import Github from "./github.svg";
import Facebook from "./facebook.svg";
import Youtube from "./youtube.svg";
import Linkedin from "./linkedin.svg";
import Twitter from "./twitter.svg";
import Brazil from "./brazil.svg";
import Whats from "./whats.svg";
import Insta from "./insta.svg";
import In from "./in.svg";

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  brazil: Brazil,
  whats: Whats,
  insta: Insta,
  in: In,
  calendar: Calendar,
};

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-white hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
