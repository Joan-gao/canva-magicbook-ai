import React from 'react';
import {
  Rows,
  Text,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
} from '@canva/app-ui-kit';

interface VoiceoverGenerateProps {
  goToPage: (page: string) => void;
}

const VoiceoverGenerate: React.FC<VoiceoverGenerateProps> = ({ goToPage }) => {
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
      {/* Add your Script Describe content here */}
    </div>
  );
};

export default VoiceoverGenerate;
