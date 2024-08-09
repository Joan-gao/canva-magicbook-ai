import React, { useState } from 'react';
import {
  Rows,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
  Columns,
  Column,
  MultilineInput,
  Slider,
  Carousel,
  Pill,
  CheckboxGroup,
} from '@canva/app-ui-kit';

interface ScriptDescProps {
  goToPage: (page: string) => void;
}

const ScriptDesc: React.FC<ScriptDescProps> = ({ goToPage }) => {
  // State for form inputs
  const [storyDescription, setStoryDescription] = useState('');
  const [selectedAgeRanges, setSelectedAgeRanges] = useState<string[]>([]);
  const [selectedStoryType, setSelectedStoryType] = useState<string | null>(null);

  // Function to check if the form is complete
  const isFormComplete = () => {
    return (
      storyDescription.trim().length > 0 &&
      selectedAgeRanges.length > 0 &&
      selectedStoryType !== null
    );
  };

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
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => goToPage('HomePage')}
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
              Script Descriptions
            </Title>
          </Column>
        </Columns>
        
        {/* Story Description Input */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Story Description
          </Title>

          <MultilineInput
            id='scriptDescriptions'
            autoGrow
            minRows={2}
            placeholder="Write your script here..."
            value={storyDescription}
            onChange={(value) => setStoryDescription(value)}
          />
        </Rows>

        {/* Age Range Checkbox */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Age Range
          </Title>

          <CheckboxGroup
            options={[
              { label: '1-3 years old', value: '13' },
              { label: '3-6 years old', value: '36' },
              { label: '6-10 years old', value: '610' },
              { label: '10+ years old', value: '10' },
            ]}
            onChange={(selected) => setSelectedAgeRanges(selected)}
          />
        </Rows>

        {/* Story Type Carousel */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Story Type
          </Title>

          <Carousel>
            {['Adventure', 'Birthday', 'Science', 'Travel', 'Language Study', 'Family'].map(
              (type) => (
                <Pill
                  key={type}
                  ariaLabel={type}
                  onClick={() => setSelectedStoryType(type)}
                  text={type}
                  selected={selectedStoryType === type}
                />
              )
            )}
          </Carousel>
        </Rows>

        {/* Teaching Content Input */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Teaching Content (Optional)
          </Title>
          
          <MultilineInput
            autoGrow
            minRows={2}
            placeholder="Write the knowledge you wanna involve..."
          />
        </Rows>

        {/* Story Length Slider */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Story Length
          </Title>
          
          <Box paddingStart='2u'>
            <Slider 
              defaultValue={3}
              max={10}
              min={3}
              step={1}
            />
          </Box>
        </Rows>

        {/* Generate Button */}
        <Button
          variant="primary"
          stretch={true}
          onClick={() => goToPage('ScriptLoading')}
          disabled={!isFormComplete()}
        >
          Generate
        </Button>
      </Rows>
    </Box>
  );
};

export default ScriptDesc;
