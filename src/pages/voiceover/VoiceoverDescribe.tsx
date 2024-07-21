import React from 'react';
import {
  Rows,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
  PlayFilledIcon,
  Columns,
  Column,
  MultilineInput,
  Select,
  Carousel,
} from '@canva/app-ui-kit';
import DesignStyle from '../../components/DesignStyle';


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
              onClick={() => goToPage('DesignGenerate')}
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
              Voiceover Description
            </Title>
          </Column>
        </Columns>

        {/* Characters Selection */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Voice Character
          </Title>

          <Carousel>
            <DesignStyle StyleName={'Style1'}></DesignStyle>
            <DesignStyle StyleName={'Style2'}></DesignStyle>
            <DesignStyle StyleName={'Style3'}></DesignStyle>
            <DesignStyle StyleName={'Style4'}></DesignStyle>
          </Carousel>
        </Rows>

        {/* Language Selection */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Language
          </Title>

          <Select
            id='language'
            options={[
              {
                label: 'English (US)',
                value: 'EnglishUS'
              },
              {
                label: 'English (UK)',
                value: 'EnglishUK'
              },
              {
                label: 'English (AUS)',
                value: 'EnglishAUS'
              },
              {
                label: 'French',
                value: 'French'
              },
              {
                label: 'Chinese (Mandarin)',
                value: 'ChineseMandarin'
              },
              {
                label: 'Japanese',
                value: 'Japanese'
              },
            ]}
          />
        </Rows>

        {/* Voice Tone Selection */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Language
          </Title>

          <Select
            id='voiceTone'
            options={[
              {
                label: 'Formal',
                value: 'Formal'
              },
              {
                label: 'Casual',
                value: 'Casual'
              },
              {
                label: 'Casual',
                value: 'Casual'
              },
              {
                label: 'Friendly',
                value: 'Friendly'
              },
              {
                label: 'Narrative',
                value: 'Narrative'
              },
            ]}
          />
        </Rows>

        {/* Story Description Input */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Script
          </Title>

          <MultilineInput
            autoGrow
            minRows={2}
            placeholder="Write your script here..."
          />
        </Rows>

        {/* Preview / Generate Button */}
        <Rows spacing='1u'>
          <Button
            variant="secondary"
            stretch={true}
            icon={PlayFilledIcon}
            onClick={() => {}}
          >
            Preview Speech
          </Button>

          <Button
            variant="primary"
            stretch={true}
            onClick={() => goToPage('VoiceoverGenerate')}
          >
            Submit
          </Button>
        </Rows>
      </Rows>
    </Box>
  );
};

export default VoiceoverDescribe;