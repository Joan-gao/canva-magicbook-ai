import React from 'react';
import {
  Rows,
  Columns,
  Column,
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
    <Box 
    paddingTop='2u'
    paddingEnd='2u'
    paddingBottom='3u'
  >
    <Rows spacing='3u'>
      {/* Page Title / Navigation */}
      <Columns spacing='1.5u'>
        <Column width='containedContent'>
          <div
            style={{background: 'none', border: 'none', cursor:'pointer'}}
            onClick={() => goToPage('VoiceoverDescribe')}
          >
            <ArrowLeftIcon />
          </div>
        </Column>

        <Column width='containedContent'>
          <Title 
            tone='primary'
            size='medium'
            alignment='start'
          >
            Voice Generation
          </Title>
        </Column>
      </Columns>


      {/* Generate Button */}
      <Button
        variant="primary"
        stretch={true}
        onClick={() => goToPage('MusicDescribe')}
      >
        Generate
      </Button>
    </Rows>
  </Box>
  );
};

export default VoiceoverGenerate;
