import React from 'react';
import {
  Rows,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
  ArrowRightIcon,
  PlayFilledIcon,
  Columns,
  Column,
  Select,
  Carousel,
  Badge,
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

          <Column width='fluid'>
            <Title 
              tone='primary'
              size='medium'
              alignment='start'
            >
              Voiceover Description
            </Title>
          </Column>

          <Column width='containedContent'>
            <div
              style={{background: 'none', border: 'none', cursor:'pointer'}}
              onClick={() => goToPage('MusicDescribe')}
            >
              <Badge
                ariaLabel='skip'
                text='Skip'
                tone='assist'
                wrapInset='-0.5u'
              />
            </div>
          </Column>
        </Columns>

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
                label: 'English',
                value: 'English'
              },
              {
                label: 'Chinese',
                value: 'Chinese'
              },
            ]}
          />
        </Rows>

        {/* Gender Selection */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Gender
          </Title>

          <Select
            id='gender'
            options={[
              {
                label: 'Male',
                value: 'male'
              },
              {
                label: 'Female',
                value: 'female'
              },
            ]}
          />
        </Rows>

        {/* Age Group Selection */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Age Group
          </Title>

          <Select
            id='age'
            options={[
              {
                label: '0-12',
                value: 'age1'
              },
              {
                label: '13-21',
                value: 'age2'
              },
              {
                label: '21-40',
                value: 'age3'
              },
              {
                label: '40+',
                value: 'age4'
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
            Tone
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
            onClick={() => goToPage('VoiceoverLoading')}
          >
            Generate
          </Button>
        </Rows>
      </Rows>
    </Box>
  );
};

export default VoiceoverDescribe;