import React, { useState } from 'react';
import {
  Rows,
  TypographyCard,
  Text,
  Title,
  Box,
} from '@canva/app-ui-kit';

const chaptersData = [
  { title: "Chapter 1", description: "Chapter Descriptions" },
  { title: "Chapter 2", description: "Chapter Descriptions" },
  { title: "Chapter 3", description: "Chapter Descriptions" },
  { title: "Chapter 4", description: "Chapter Descriptions" },
  { title: "Chapter 5", description: "Chapter Descriptions" },
  { title: "Chapter 6"  , description: "Chapter Descriptions" }
];

const SummaryChapters: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Rows spacing='3u'>
      {chaptersData.map((chapter, index) => (
        <Box key={index}>
          <Rows key={index} spacing='1u'>
            <Title size='small'>
              {chapter.title}
            </Title>

            <Box
              background='neutralLow'
              borderRadius='large'
              padding='2u'
            >
              <Text>{chapter.description}</Text>
            </Box>
          </Rows>
        </Box>
      ))}
    </Rows>
  );
};

export default SummaryChapters;
