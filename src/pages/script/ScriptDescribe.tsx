import React from 'react';
import {
  Rows,
  Text,
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

interface ScriptDescribeProps {
  goToPage: (page: string) => void;
}

const ScriptDescribe: React.FC<ScriptDescribeProps> = ({ goToPage }) => {
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
      <div style={{ marginTop: '10px' }}>
        <text style={{ fontSize: '15px', fontWeight: 'bold' }}>
          Story Description
        </text>
        <div style={{ marginTop: '10px' }}>
          <MultilineInput
            autoGrow
            minRows={2}
            placeholder="Write your script here..."
          />
        </div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <text style={{ fontSize: '15px', fontWeight: 'bold' }}>Age Range</text>
        <div style={{ marginTop: '10px' }}>
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
        </div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <text style={{ fontSize: '15px', fontWeight: 'bold' }}>Story Type</text>
        <div style={{ marginTop: '10px' }}>
          {' '}
          <Carousel>
            <Pill ariaLabel="a pill" onClick={() => {}} text="Adventure" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Birthday" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Science" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Travel" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Language Study" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Family" />
          </Carousel>
        </div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <text style={{ fontSize: '15px', fontWeight: 'bold' }}>
          Teaching Content (Optional)
        </text>
        <div style={{ marginTop: '10px' }}>
          <MultilineInput
            autoGrow
            minRows={2}
            placeholder="Write the knowledge you wanna involve..."
          />
        </div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <text style={{ fontSize: '15px', fontWeight: 'bold' }}>
          Story Length
        </text>
        <div style={{ marginTop: '10px' }}>
          <Slider defaultValue={3} max={10} min={3} step={1} />
        </div>
      </div>
      <div style={{ marginTop: '10px' }}>{/* <Button>Submit</Button> */}</div>
    </div>
  );
};

export default ScriptDescribe;

