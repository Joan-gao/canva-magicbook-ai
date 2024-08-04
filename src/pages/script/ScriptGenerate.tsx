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
} from '@canva/app-ui-kit';

// Define placeholder data
const storyBackground = "Once upon a time in a land far away, a magical adventure was about to begin. The sun was setting, casting a golden glow over the tranquil village, and everyone was eagerly anticipating the start of the journey.";

const characters = [
  { name: 'Lia', description: 'A brave young girl with a knack for solving mysteries.' },
  { name: 'Rex', description: 'A loyal dog who never leaves Lia’s side.' },
  { name: 'Professor Oak', description: 'An old wise man who provides guidance to the heroes.' },
];

const chapters = [
  { title: 'The Mysterious Forest', description: 'Lia and Rex enter the forest, encountering strange creatures and finding clues about the ancient legend.' },
  { title: 'The Hidden Temple', description: 'The duo discovers a hidden temple and faces challenges to uncover its secrets.' },
];

interface ScriptGenerateProps {
  goToPage: (page: string) => void;
}

const ScriptGenerate: React.FC<ScriptGenerateProps> = ({ goToPage }) => {
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
              onClick={() => goToPage('ScriptDescribe')}
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
              Script Generation
            </Title>
          </Column>
        </Columns>

        {/* Story Background */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='medium'
            alignment='start'
          >
            Story Background:
          </Title>

          <Text size='medium' tone='secondary'>
            {storyBackground}
          </Text>
        </Rows>

        {/* Main Characters */}
        <Rows spacing='2u'>
          <Title
            tone='primary'
            size='medium'
            alignment='start'
          >
            Main Characters:
          </Title>
          {characters.map((character, index) => (
            <Box>
              <Title
                tone='primary'
                size='small'
                alignment='start'
              >
                {character.name}:
              </Title>

              <Text key={index} size='medium' tone='secondary'>
                {character.description}
              </Text>
            </Box>
          ))}
        </Rows>
        
        {/* Story Outline */}
        <Rows spacing='2u'>
          <Title
            tone='primary'
            size='medium'
            alignment='start'
          >
            Story Outline:
          </Title>
          {chapters.map((chapter, index) => (
            <Box>
              <Title
                tone='primary'
                size='small'
                alignment='start'
              >
                Chapter {index + 1}:
              </Title>

              <Text key={index} size='medium' tone='secondary'>
                <strong>{chapter.title}:</strong> {chapter.description}
              </Text>
            </Box>
          ))}
        </Rows>

        {/* Regenerate/Continue Button */}
        <Columns spacing="1u">
          <Column>
            <Button variant="primary" stretch={true}>
              Regenerate
            </Button>
          </Column>

          <Column>
            <Button
              variant="primary"
              stretch={true}
              onClick={() => goToPage('DesignDescribe')}
            >
              Continue
            </Button> 
          </Column>
        </Columns>
      </Rows>
    </Box>
  );
};

export default ScriptGenerate;
