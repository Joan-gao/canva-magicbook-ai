import React from 'react';
import {
  Box,
  Title,
} from '@canva/app-ui-kit';

interface PaintingStyleProps {
  StyleName: string;
}

const PaintingStyle: React.FC<PaintingStyleProps> = ({ StyleName }) => {
  return (
    <div style={{ height: '120px', width: '120px' }}>
      <Box
        background="neutralLow"
        borderRadius="standard"
        height="full"
        width="full"
        padding="2u"
      >
        <Title size="xsmall"> {StyleName} </Title>
      </Box>
    </div>
  );
};

export default PaintingStyle;
