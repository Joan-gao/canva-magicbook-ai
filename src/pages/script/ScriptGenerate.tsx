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
              Generate your Script
            </Title>
          </Column>
        </Columns>

        {/* Title Generated */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Title:
          </Title>

          <Text size='medium'>
            Xiaomei's Family Summer Adventure in Perth
          </Text>
        </Rows>

        {/* Characters Generated */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Characters:
          </Title>

          <Text size='medium'>
            Xiaomei, Xiaomei's mom, Xiaomei's Dad
          </Text>
        </Rows>
        
        {/* Title Generated */}
        <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Chapters:
          </Title>

          <Text size='medium'>
            Chapter 1:
            <br />
            Xiaomei's family set off from busy Shanghai, ready to start their
            long-awaited trip to Perth. At the airport, Xiaomei excitedly said,
            "I can't wait to see the koalas and kangaroos!" Mom and Dad smiled
            at Xiaomei and said, "Perth is sure to bring us many surprises!"
            <br />
            <br />
            Chapter 2:
            <br />
            One summer morning, Xiaomei and her family visited the famous
            Crawley Edge Boatshed. It is a blue boathouse built by the water,
            looking very beautiful. The sun was shining brightly, and it was a
            bit hot. Xiaomei's dad said, "Let's take a family photo!" "Yes!"
            Xiaomei and her mom said happily. They posed and took a beautiful
            photo with big smiles.
          </Text>
        </Rows>

        {/* Submit Button */}
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
              onClick={() => goToPage('PaintingDescribe')}
            >
              Submit
            </Button>
          </Column>
        </Columns>
      </Rows>
    </Box>
  );
};

export default ScriptGenerate;
