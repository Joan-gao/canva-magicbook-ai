import React from 'react';
import {
  Rows,
  EmbedCard,
  Grid,
  Box,
  Text,
  ImageCard,
  Title,
  Slider,
  SegmentedControl,
  Button,
} from '@canva/app-ui-kit';

const embedCardsData = [
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 1",
    onClick: () => {},
    onDragStart: () => {},
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg"
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 2",
    onClick: () => {},
    onDragStart: () => {},
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg"
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 3",
    onClick: () => {},
    onDragStart: () => {},
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg"
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 4",
    onClick: () => {},
    onDragStart: () => {},
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg"
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 5",
    onClick: () => {},
    onDragStart: () => {},
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg"
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 6",
    onClick: () => {},
    onDragStart: () => {},
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg"
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 7",
    onClick: () => {},
    onDragStart: () => {},
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg"
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 8",
    onClick: () => {},
    onDragStart: () => {},
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg"
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 9",
    onClick: () => {},
    onDragStart: () => {},
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg"
  }
];

const SummaryIllustrations: React.FC = () => {
  return (
    <Rows spacing='3u'>
      <Grid alignX="stretch" alignY="stretch" columns={2} spacing="2u">
        {embedCardsData.map((card, index) => (
          <Rows spacing='1u'>
            {/* <EmbedCard
              key={index}
              ariaLabel={card.ariaLabel}
              // description={card.description}
              onClick={card.onClick}
              onDragStart={card.onDragStart}
              thumbnailUrl={card.thumbnailUrl}
            /> */}
            <ImageCard
              borderRadius='standard'
              ariaLabel={card.ariaLabel}
              onClick={card.onClick}
              thumbnailUrl={card.thumbnailUrl}
            />
            <Box
              background='neutralLow'
              borderRadius='large'
              padding='1u'
            >
              <Text>{card.description}</Text>
            </Box>
          </Rows>
        ))}
      </Grid>

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
        <Title
          tone='primary'
          size='xsmall'
          alignment='start'
        >
          Motion Tool
        </Title>
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
    </Rows>
  );
};

export default SummaryIllustrations;
