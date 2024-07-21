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

interface VoiceoverDescribeProps {
  goToPage: (page: string) => void;
}

const VoiceoverDescribe: React.FC<VoiceoverDescribeProps> = ({ goToPage }) => {
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
            onClick={() => goToPage('DesignDescribe')}
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
            Generate your Designs
          </Title>
        </Column>
      </Columns>


      {/* Generate Button */}
      <Button
        variant="primary"
        stretch={true}
        onClick={() => goToPage('VoiceoverDescribe')}
      >
        Generate
      </Button>
    </Rows>
  </Box>
  );
};

export default VoiceoverDescribe;
