import React from 'react';
import {
  Rows,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
  Carousel,
  Pill,
  Column,
  Columns,
} from '@canva/app-ui-kit';
import DesignStyle from '../../components/DesignStyle';

interface DesignDescribeProps {
  goToPage: (page: string) => void;
}

const DesignDescribe: React.FC<DesignDescribeProps> = ({ goToPage }) => {
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
              onClick={() => goToPage('ScriptGenerate')}
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
              Describe your Designs
            </Title>
          </Column>
        </Columns>

        {/* Design Styles Selection */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Title:
          </Title>

          <Carousel>
            <Pill ariaLabel="a pill" onClick={() => {}} text="Japanese anime" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Disney" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Clay" />
            <Pill
              ariaLabel="a pill"
              onClick={() => {}}
              text="American Marvel"
            />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Realistic" />
          </Carousel>
        </Rows>

        {/* Characters Models Selection */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Character Models:
          </Title>

          <Carousel>
            <div style={{ height: '120px', width: '120px' }}>
              <DesignStyle StyleName={'Style1'}></DesignStyle>
            </div>

            <div style={{ height: '120px', width: '120px' }}>
              <DesignStyle StyleName={'Style2'}></DesignStyle>
            </div>

            <div style={{ height: '120px', width: '120px' }}>
              <DesignStyle StyleName={'Style3'}></DesignStyle>
            </div>

            <div style={{ height: '120px', width: '120px' }}>
              <DesignStyle StyleName={'Style4'}></DesignStyle>
            </div>
          </Carousel>
        </Rows>

        {/* Submit Button */}
        <Button
          variant="primary"
          stretch={true}
          onClick={() => goToPage('DesignGenerate')}
        >
          Submit
        </Button>

      </Rows>
    </Box>
  );
};

export default DesignDescribe;
