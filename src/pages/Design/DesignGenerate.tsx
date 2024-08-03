import React from 'react';
import {
  Box,
  Rows,
  Columns,
  Column,
  Button,
  Title,
  Carousel,
  Slider,
  ArrowLeftIcon,
  SegmentedControl,
} from '@canva/app-ui-kit';
import DesignStyle from '../../components/DesignStyle';

interface DesignGenerateProps {
  goToPage: (page: string) => void;
}

const DesignGenerate: React.FC<DesignGenerateProps> = ({ goToPage }) => {
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

        <Column width='containedContent'>
          <Title 
            tone='primary'
            size='medium'
            alignment='start'
          >
            Design Generation
          </Title>
        </Column>
      </Columns>

      {/* Character Models */}
      <Rows spacing='1u'>
        <Title
          tone='primary'
          size='small'
          alignment='start'
        >
          Character Models:
        </Title>

        <Carousel>
          <DesignStyle StyleName={'Style1'}></DesignStyle>
          <DesignStyle StyleName={'Style2'}></DesignStyle>
          <DesignStyle StyleName={'Style3'}></DesignStyle>
          <DesignStyle StyleName={'Style4'}></DesignStyle>
        </Carousel>

        {/* Regenerate and Fine-Tuning Button */}
        <Box
          paddingY='1u'
          paddingX='1u'
          borderRadius='large'
        >
          <Columns spacing="1u">
            <Column>
              <Button variant="secondary" stretch={true}>
                Regenerate
              </Button>
            </Column>

            <Column>
              <Button
                variant="secondary"
                stretch={true}
                onClick={() => {}}
              >
                Fine-Tune
              </Button>
            </Column>
          </Columns>
        </Box>
      </Rows>

      {/* Background Models */}
      <Rows spacing='1u'>
        <Title
          tone='primary'
          size='small'
          alignment='start'
        >
          Background Models:
        </Title>

        <Carousel>
          <div 
            style={{ height: '120px', width: '120px', cursor: 'pointer'}}
            onClick={() => {}}
          >
            <DesignStyle StyleName={'Style1'}></DesignStyle>
          </div>

          <div 
            style={{ height: '120px', width: '120px', cursor: 'pointer'}}
            onClick={() => {}}
          >
            <DesignStyle StyleName={'Style2'}></DesignStyle>
          </div>

          <div 
            style={{ height: '120px', width: '120px', cursor: 'pointer'}}
            onClick={() => {}}
          >
            <DesignStyle StyleName={'Style3'}></DesignStyle>
          </div>

          <div 
            style={{ height: '120px', width: '120px', cursor: 'pointer'}}
            onClick={() => {}}
          >
            <DesignStyle StyleName={'Style4'}></DesignStyle>
          </div>
        </Carousel>

        {/* Regenerate and Fine-Tuning Button */}
        <Box
          paddingY='1u'
          paddingX='1u'
          borderRadius='large'
        >
          <Columns spacing="1u">
            <Column>
              <Button variant="secondary" stretch={true}>
                Regenerate
              </Button>
            </Column>

            <Column>
              <Button
                variant="secondary"
                stretch={true}
                onClick={() => {}}
              >
                Fine-Tune
              </Button>
            </Column>
          </Columns>
        </Box>
      </Rows>


      {/* Animation Settings */}
      <Rows spacing='1u'>
        <Title
          tone='primary'
          size='small'
          alignment='start'
        >
          Animation Settings (optional)
        </Title>


      {/* Story Length Slider */}
        <Title
          tone='primary'
          size='xsmall'
          alignment='start'
        >
          Motion Length (seconds)
        </Title>
        
        <Box
          paddingStart='2u'
        >
          <Slider
            id='motionLength'
            defaultValue={3}
            max={10}
            min={3}
            step={1}
          />
        </Box>

        {/* Motion Tool */}
        <SegmentedControl
          id='motionTool'
          options={[
            { value: "aiMotion", label: "AI Motion" },
            { value: "parallaxMotion", label: "Parallax Motion" },
          ]}
        />
        
        <Button
          variant="secondary"
          stretch={true}
          onClick={() => {}}
        >
          Animate
        </Button>
      </Rows>

      {/* Generate Button */}
      <Button
        variant="primary"
        stretch={true}
        onClick={() => goToPage('Summary')}
      >
        Generate
      </Button>
    </Rows>
  </Box>
  );
};

export default DesignGenerate;
