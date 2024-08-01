import React from 'react';
import {
  Rows,
  EmbedCard,
  Grid,
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
    <Rows spacing='1u'>
      <Grid alignX="stretch" alignY="stretch" columns={2} spacing="2u">
        {embedCardsData.map((card, index) => (
          <EmbedCard
            key={index}
            ariaLabel={card.ariaLabel}
            description={card.description}
            onClick={card.onClick}
            onDragStart={card.onDragStart}
            thumbnailUrl={card.thumbnailUrl}
          />
        ))}
      </Grid>
    </Rows>
  );
};

export default SummaryIllustrations;
