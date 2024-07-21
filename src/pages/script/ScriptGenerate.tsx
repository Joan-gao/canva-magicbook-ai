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
    <div className="scrollContainer">
      <Box>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}
        >
          <div style={{ marginRight: '15px' }} onClick={() => goToPage('Main')}>
            <ArrowLeftIcon />
          </div>
          <text style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Generate your Script
          </text>
        </div>
      </Box>
      <div style={{ marginTop: '15px' }}>
        <div style={{ marginTop: '15px' }}>
          <text style={{ fontSize: '15px', fontWeight: 'bold' }}>Title:</text>
          <Text>Xiaomei's Family Summer Adventure in Perth</Text>
        </div>
        <div style={{ marginTop: '15px' }}>
          <text style={{ fontSize: '15px', fontWeight: 'bold' }}>
            Characters:
          </text>
          <Text>Xiaomei, Xiaomei's mom, Xiaomei's Dad</Text>
        </div>
        <div style={{ marginTop: '15px' }}>
          <text style={{ fontSize: '15px', fontWeight: 'bold' }}>
            Chapters:
          </text>
          <Text>
            Chapter 1:
            <br />
            Xiaomei's family set off from busy Shanghai, ready to start their
            long-awaited trip to Perth. At the airport, Xiaomei excitedly said,
            "I can't wait to see the koalas and kangaroos!" Mom and Dad smiled
            at Xiaomei and said, "Perth is sure to bring us many surprises!"
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
        </div>
        <div style={{ marginTop: '15px' }}>
          <Columns spacing="2u">
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
        </div>
      </div>
    </div>
  );
};

export default ScriptGenerate;
