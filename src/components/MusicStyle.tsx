import { Pill } from "@canva/app-ui-kit";
import { musicStyleOptions } from "./MusicStyleOption";
import { useState } from "react";
import { useViewContext } from "src/context/contentContext";

const MusicStyles = () => {
  const { setMusicOption } = useViewContext();
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const handleStyleSelection = (style: string) => {
    setSelectedStyle(style);
    setMusicOption(style);
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", width: "100%", gap: "8px" }}
    >
      {musicStyleOptions.map((option, index) => (
        <Pill
          key={index}
          ariaLabel={option.text}
          onClick={() => handleStyleSelection(option.text)}
          text={option.text}
          selected={selectedStyle === option.text}
        />
      ))}
    </div>
  );
};

export default MusicStyles;
