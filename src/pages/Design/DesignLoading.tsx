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
  ProgressBar,
} from '@canva/app-ui-kit';

interface DesignLoadingProps {
  goToPage: (page: string) => void;
}

const DesignLoading: React.FC<DesignLoadingProps> = ({ goToPage }) => {
  return (
    <Box 
    paddingTop='2u'
    paddingEnd='2u'
    paddingBottom='3u'
    height='full'
    justifyContent='center'
    alignItems='center'
  >
    <Rows spacing='3u'>
      {/* Page Title / Navigation */}
      <Columns spacing='1.5u'>
        <Column width='containedContent'>
          <div
            style={{background: 'none', border: 'none', cursor:'pointer'}}
            onClick={() => goToPage('ScriptDescribe')}
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
            Generating Script
          </Title>
        </Column>
      </Columns>

      <Box
        paddingTop='2u'
        paddingBottom='2u'
        height='full'
      >
        <Rows spacing='2u'>
          <Title 
            size='medium'
            alignment='center'
          >
            Generating...
          </Title>

          <ProgressBar
            size="medium"
            tone="info"
            value={10}
          />
          
          <Rows spacing='0'>
            <Text 
              size='medium'
              alignment='center'
            >
              Please wait while we bring your image to life.
            </Text>

            <Text 
              size='medium'
              alignment='center'
            >
              This could take 1-2 minutes
            </Text>
          </Rows>
        </Rows>
      </Box>

      <Button
        variant="secondary"
        stretch={true}
        onClick={() => {}}
      >
        Cancel
      </Button>


      {/* REMOVE LATER */}
      <Button
        variant="primary"
        stretch={true}
        onClick={() => goToPage('ScriptGenerate')}
      >
        Continue
      </Button>
    </Rows>
  </Box>
  );
};

export default DesignLoading;
