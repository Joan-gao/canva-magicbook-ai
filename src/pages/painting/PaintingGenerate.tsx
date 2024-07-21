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
  Select,
  FormField,
  ArrowLeftIcon,
} from '@canva/app-ui-kit';
import PaintingStyle from '../../components/paintingStyle';

interface PaintingGenerateProps {
  goToPage: (page: string) => void;
}

const PaintingGenerate: React.FC<PaintingGenerateProps> = ({ goToPage }) => {
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
            onClick={() => goToPage('PaintingDescribe')}
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
            Generate your Designs
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
          <div 
            style={{ height: '120px', width: '120px', cursor: 'pointer'}}
            onClick={() => {}}
          >
            <PaintingStyle StyleName={'Style1'}></PaintingStyle>
          </div>

          <div 
            style={{ height: '120px', width: '120px', cursor: 'pointer'}}
            onClick={() => {}}
          >
            <PaintingStyle StyleName={'Style2'}></PaintingStyle>
          </div>

          <div 
            style={{ height: '120px', width: '120px', cursor: 'pointer'}}
            onClick={() => {}}
          >
            <PaintingStyle StyleName={'Style3'}></PaintingStyle>
          </div>

          <div 
            style={{ height: '120px', width: '120px', cursor: 'pointer'}}
            onClick={() => {}}
          >
            <PaintingStyle StyleName={'Style4'}></PaintingStyle>
          </div>
        </Carousel>

        {/* Regenerate and Fine-Tuning Button */}
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
            <PaintingStyle StyleName={'Style1'}></PaintingStyle>
          </div>

          <div 
            style={{ height: '120px', width: '120px', cursor: 'pointer'}}
            onClick={() => {}}
          >
            <PaintingStyle StyleName={'Style2'}></PaintingStyle>
          </div>

          <div 
            style={{ height: '120px', width: '120px', cursor: 'pointer'}}
            onClick={() => {}}
          >
            <PaintingStyle StyleName={'Style3'}></PaintingStyle>
          </div>

          <div 
            style={{ height: '120px', width: '120px', cursor: 'pointer'}}
            onClick={() => {}}
          >
            <PaintingStyle StyleName={'Style4'}></PaintingStyle>
          </div>
        </Carousel>

        {/* Regenerate and Fine-Tuning Button */}
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
          Story Length (seconds)
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

        {/* Motion Tool */}
        <FormField
          label="Motion Tool"
          control={(props) => (
            <Select
              {...props}
              options={[
                { value: "aiMotion", label: "AI Motion" },
                { value: "parallaxMotion", label: "Parallax Motion" },
              ]}
            />
          )}
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
        onClick={() => goToPage('VoiceoverDescribe')}
      >
        Generate
      </Button>
    </Rows>
  </Box>
  );
};

export default PaintingGenerate;
