import { Pill } from "@canva/app-ui-kit";
import { musicStyleOptions } from "./MusicStyleOption";
import { useState } from "react";
import { useViewContext } from "src/context/contentContext";

const MusicStyles = () => {
  const { setMusicOption } = useViewContext();
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", width: "100%", gap: "8px" }}
    >
      {musicStyleOptions.map((option, index) => (
        <Pill
          ariaLabel={option.text}
          onClick={() => setMusicOption(option.text)}
          text={option.text}
        />
      ))}
    </div>
  );
};

export default MusicStyles;
