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
  MultilineInput,
  Select,
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
              Design Descriptions
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
            Style
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

        {/* Dimension Selections */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Design Dimension
          </Title>
          
          <Select
            id='dimenions'
            options={[
              {
                label: 'Landscape',
                value: 'Landscape',
              },
              {
                label: 'Portrait',
                value: 'Portrait',
              },
              {
                label: 'Square',
                value: 'Square',
              }
            ]}
          >
          </Select>

        </Rows>

        {/* Generate Button */}
        <Button
          variant="primary"
          stretch={true}
          onClick={() => goToPage('DesignLoading')}
        >
          Generate
        </Button>

      </Rows>
    </Box>
  );
};

export default DesignDescribe;
