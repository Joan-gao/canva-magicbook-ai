import React from 'react';
import {
  Rows,
  Text,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
  Carousel,
  Pill,
  Column,
  Columns,
  PencilIcon,
  EmbedCard,
} from '@canva/app-ui-kit';
import PaintingStyle from '../../components/paintingStyle';

interface PaintingDescribeProps {
  goToPage: (page: string) => void;
}

const PaintingDescribe: React.FC<PaintingDescribeProps> = ({ goToPage }) => {
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

        {/* Painting Styles Selection */}
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
              <PaintingStyle StyleName={'Style1'}></PaintingStyle>
            </div>

            <div style={{ height: '120px', width: '120px' }}>
              <PaintingStyle StyleName={'Style2'}></PaintingStyle>
            </div>

            <div style={{ height: '120px', width: '120px' }}>
              <PaintingStyle StyleName={'Style3'}></PaintingStyle>
            </div>

            <div style={{ height: '120px', width: '120px' }}>
              <PaintingStyle StyleName={'Style4'}></PaintingStyle>
            </div>
          </Carousel>
        </Rows>

        {/* Submit Button */}
        <Button
          variant="primary"
          stretch={true}
          onClick={() => goToPage('PaintingGenerate')}
        >
          Submit
        </Button>

      </Rows>
    </Box>
  );
};

export default PaintingDescribe;
