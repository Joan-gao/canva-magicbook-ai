import { Pill } from "@canva/app-ui-kit";
import { musicStyleOptions } from "./MusicStyleOption";
import { useState } from "react";
import { useViewContext } from "src/context/contentContext";

const MusicStyles = () => {
  const { setMusicOption, musicOption } = useViewContext();
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", width: "100%", gap: "8px" }}
    >
      {musicStyleOptions.map((option, index) => (
        <Pill
          ariaLabel={option.text}
          onClick={() => setMusicOption(option.text)}
          selected={musicOption == option.text ? true : false}
          text={option.text}
        />
      ))}
    </div>
  );
};

export default MusicStyles;
