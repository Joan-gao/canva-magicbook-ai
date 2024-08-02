import React, { useState } from 'react';
import {
  Box,
  Tab,
  Tabs,
  TabList,
  Rows,
  SegmentedControl,
  Slider,
  Text,
  TabPanels,
  TabPanel,
  Title,
  Button,
  Carousel,
  Column,
  Columns,
  Pill,
  EmbedCard,
  Grid,
  ArrowLeftIcon,
} from '@canva/app-ui-kit';
import SummaryIllustrations from 'src/components/Summary/SummaryIllustrations';
import SummaryChapters from 'src/components/Summary/SummaryChapters';

interface SummaryPageProps {
  goToPage: (page: string) => void;
}

const Summary: React.FC<SummaryPageProps> = ({ goToPage }) => {
  const [currentPage, setCurrentPage] = useState<string>('illustrations');
  // Illustrations Tab
  const illustrationsTab = (
    <Box 
      paddingTop='2u'
      paddingBottom='3u'
    >
      <SummaryIllustrations />
    </Box>
  );

  // Chapters Text Tab
  const chaptersTab = (
    <Box 
      paddingTop='2u'
      paddingBottom='3u'
    >
      <SummaryChapters />
    </Box>
  );

  return (
    <Box 
      paddingTop='1u'
      paddingEnd='2u'
      paddingBottom='3u'
    >
      <Tabs>
        <Rows spacing="1u">
          <Columns spacing='1.5u'>
            {/* Back Button */}
            <Column width='containedContent'>
              <div
                style={{background: 'none', border: 'none', cursor:'pointer'}}
                onClick={() => goToPage('DesignDescribe')}
              >
                <ArrowLeftIcon />
              </div>
            </Column>
              
            {/* Tabs Button */}
            <Column width='fluid'>
              <TabList>
                <Tab 
                  id="illustrations"
                  onClick={() => setCurrentPage('illustrations')}
                >
                  Illustrations
                </Tab>
                <Tab 
                  id="chapters"
                  onClick={() => setCurrentPage('chapters')}
                >
                  Chapters
                </Tab>
              </TabList>
            </Column>
          </Columns>

          {/* Tabs Content*/}
          <TabPanels>
            <TabPanel id="illustrations">{illustrationsTab}</TabPanel>
            <TabPanel id="chapters">{chaptersTab}</TabPanel>
          </TabPanels>
        </Rows>
      </Tabs>

      {/* Continue Button */}
      <Button
        variant="primary"
        stretch={true}
        onClick={() => goToPage('VoiceoverDescribe')}
      >
        Continue
      </Button>
    </Box>
  );
};

export default Summary;
