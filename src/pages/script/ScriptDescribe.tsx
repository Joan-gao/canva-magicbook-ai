import React from 'react';
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
              onClick={() => goToPage('Main')}
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
              Describe your Script
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
            autoGrow
            minRows={2}
            placeholder="Write your script here..."
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
              {
                label: '1-3 years old',
                value: '13',
              },
              {
                label: '3-6 years old',
                value: '36',
              },
              {
                label: '6-10 years old',
                value: '610',
              },
              {
                label: '10+ years old',
                value: '10',
              },
            ]}
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
            <Pill ariaLabel="a pill" onClick={() => {}} text="Adventure" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Birthday" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Science" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Travel" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Language Study" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Family" />
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
          
          <Box
            paddingStart='2u'
          >
          <Slider 
            defaultValue={3}
            max={10}
            min={3}
            step={1}
          />
          </Box>
        </Rows>

        {/* Submit Button */}
        <Button
          variant="primary"
          stretch={true}
          onClick={() => goToPage('ScriptGenerate')}
        >
          Submit
        </Button>
      </Rows>
    </Box>
  );
};

export default ScriptDesc;