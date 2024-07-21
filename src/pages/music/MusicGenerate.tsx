import React from 'react';

import {
  Rows,
  Text,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
} from '@canva/app-ui-kit';

interface MusicGenerateProps {
  goToPage: (page: string) => void;
}

const MusicGenerate: React.FC<MusicGenerateProps> = ({ goToPage }) => {
  return (
    <div className="scrollContainer">
      <Box>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}
        >
          <div style={{ marginRight: '15px' }} onClick={() => goToPage('Main')}>
            <ArrowLeftIcon />
          </div>
          <text style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Describe your Script
          </text>
        </div>
      </Box>
      <Button variant="primary" onClick={() => goToPage('GenerateTab')}>
        Back to GenerateTab
      </Button>
      {/* Add your Script Describe content here */}
    </div>
  );
};

export default MusicGenerate;
