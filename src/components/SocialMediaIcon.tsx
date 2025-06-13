// mui
import { Tooltip } from "@mui/material";

// react
import { FC } from "react";

interface SocialMediaIconProps {
  imgSrc: string;
  title: string;
  href?: string; // Add href as an optional prop
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ imgSrc, title, href }) => {
  // Define the visual part of the icon (the div and img)
  const iconVisual = (
    <div
      className="flex items-center justify-center h-12 w-12 rounded-full bg-icons cursor-pointer
      hover:bg-secondary transition-all ease-linear duration-300"
    >
      <img src={imgSrc} alt={title} />
    </div>
  );

  if (href) {
    return (
      // Tooltip wraps the anchor tag
      <Tooltip title={title} placement="bottom" arrow>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title}
        >
          {iconVisual}
        </a>
      </Tooltip>
    );
  }

  // If no href, Tooltip wraps the visual part directly
  return (
    <Tooltip title={title} placement="bottom" arrow>
      {iconVisual}
    </Tooltip>
  );
};

export default SocialMediaIcon;
