import React from 'react';
import {
  Text,
  Rows,
  Grid,
  Box,
  Slider
} from '@canva/app-ui-kit';
import { musicParameterOptions } from './MusicParameterOption';

const MusicParameter = () => {
  return (
    <Rows spacing="0">
      {musicParameterOptions.map((option, index) => (
        <React.Fragment key={index}>
          <Grid
            alignX="stretch"
            alignY="stretch"
            columns={2}
            spacing="8u"
          >
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
            />
          </Box>
        </React.Fragment>
      ))}
    </Rows>
  );
};

export default MusicParameter;
