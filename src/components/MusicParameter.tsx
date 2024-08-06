import React, { useEffect, useState } from "react";
import { Text, Rows, Grid, Box, Slider } from "@canva/app-ui-kit";
import { musicParameterOptions } from "./MusicParameterOption";
import { useViewContext } from "src/context/contentContext";

const MusicParameter = () => {
  const initialParameters = musicParameterOptions.map(
    (option) => option.labelStart
  );
  const { setMusicParameters } = useViewContext();
  useEffect(() => {
    setMusicParameters(initialParameters);
  }, []);
  const handleSliderChange = (
    index: number, // 代表当前滑块的索引
    value: number,
    optionStart: string,
    optionEnd: string
  ) => {
    setMusicParameters((prevParameters) => {
      const newParameters = [...prevParameters];
      // 根据滑块的值选择 optionStart 或 optionEnd
      newParameters[index] = value <= 5 ? optionStart : optionEnd;
      return newParameters;
    });
  };

  return (
    <Rows spacing="0">
      {musicParameterOptions.map((option, index) => (
        <React.Fragment key={index}>
          <Grid alignX="stretch" alignY="stretch" columns={2} spacing="8u">
            <Text alignment="start">{option.labelStart}</Text>
            <Text alignment="center">{option.labelEnd}</Text>
          </Grid>

          <Box paddingStart="2u">
            <Slider
              defaultValue={5}
              max={10}
              min={0}
              origin={5}
              step={1}
              onChange={(value) =>
                handleSliderChange(
                  index,
                  value,
                  option.labelStart,
                  option.labelEnd
                )
              }
            />
          </Box>
        </React.Fragment>
      ))}
    </Rows>
  );
};

export default MusicParameter;
