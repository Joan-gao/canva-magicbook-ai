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

interface PaintingDescribeProps {
  goToPage: (page: string) => void;
}

const PaintingDescribe: React.FC<PaintingDescribeProps> = ({ goToPage }) => {
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
            Describe your Painting
          </text>
        </div>
      </Box>
      <div style={{ marginTop: '15px' }}>
        <text style={{ fontSize: '15px', fontWeight: 'bold' }}>
          Painting Style:
        </text>
        <div style={{ marginTop: '15px' }}>
          {' '}
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
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <text style={{ fontSize: '15px', fontWeight: 'bold' }}>
          Caracter Model Choose:
        </text>
        <div style={{ marginTop: '15px' }}>
          <Carousel>
            <div style={{ height: '120px', width: '120px' }}>
              <Box
                background="neutralLow"
                borderRadius="standard"
                height="full"
                padding="2u"
              >
                <Title size="xsmall">Xiaomei</Title>
              </Box>
            </div>
            <div style={{ height: '120px', width: '120px' }}>
              <Box
                background="neutralLow"
                borderRadius="standard"
                height="full"
                padding="2u"
              >
                <Title size="xsmall">Xiaomei's mom</Title>
              </Box>
            </div>
            <div style={{ height: '120px', width: '120px' }}>
              <Box
                background="neutralLow"
                borderRadius="standard"
                height="full"
                padding="2u"
              >
                <Title size="xsmall">Xiaomei's Dad</Title>
              </Box>
            </div>
          </Carousel>
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <Button
          variant="primary"
          stretch={true}
          onClick={() => goToPage('PaintingGenerate')}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default PaintingDescribe;
