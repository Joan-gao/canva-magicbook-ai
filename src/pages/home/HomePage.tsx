import React, { useState } from 'react';
import {
  Box,
  Tab,
  Tabs,
  TabList,
  Rows,
  Text,
  TabPanels,
  TabPanel,
  Title,
  Button,
  Carousel,
  Pill,
  EmbedCard,
  Grid,
} from '@canva/app-ui-kit';

interface HomePageProps {
  goToPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ goToPage }) => {
  const [currentPage, setCurrentPage] = useState<string>('Discover');
  // Discover Tab
  const discoverTab = (
    <Box 
      paddingTop='2u'
      paddingBottom='3u'
    >
      <Rows spacing='3u'>
        <Rows spacing='1u'>
          <Carousel>
            <Pill ariaLabel="a pill" onClick={() => {}} text="Adventure" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Birthday" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Science" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Travel" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Language Study" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Family" />
          </Carousel>
        </Rows>

        <Rows spacing='1u'>
          <Grid alignX="stretch" alignY="stretch" columns={2} spacing="1u">
            <EmbedCard
              ariaLabel="Add embed to design"
              description="Puppyhood"
              onClick={() => {}}
              onDragStart={() => {}}
              thumbnailUrl="https://www.canva.dev/example-assets/images/puppyhood.jpg"
              title="Heartwarming Chatter: Adorable Conversation with a puppy"
            />
            <EmbedCard
              ariaLabel="Add embed to design"
              description="Puppyhood"
              onClick={() => {}}
              onDragStart={() => {}}
              thumbnailUrl="https://www.canva.dev/example-assets/images/puppyhood.jpg"
              title="Heartwarming Chatter: Adorable Conversation with a puppy"
            />
            <EmbedCard
              ariaLabel="Add embed to design"
              description="Puppyhood"
              onClick={() => {}}
              onDragStart={() => {}}
              thumbnailUrl="https://www.canva.dev/example-assets/images/puppyhood.jpg"
              title="Heartwarming Chatter: Adorable Conversation with a puppy"
            />
            <EmbedCard
              ariaLabel="Add embed to design"
              description="Puppyhood"
              onClick={() => {}}
              onDragStart={() => {}}
              thumbnailUrl="https://www.canva.dev/example-assets/images/puppyhood.jpg"
              title="Heartwarming Chatter: Adorable Conversation with a puppy"
            />
          </Grid>
        </Rows>
      </Rows>
    </Box>
  );
  // Generate Tab
  const generateTab = (
    <Box 
      paddingTop='2u'
      paddingBottom='3u'
    >
      <Rows spacing="3u">
        <Rows spacing="1u">
          <Title>Finally, you're here! 😊❤️</Title>
          <Text>
            We're excited to offer you a one-stop platform for creating children's
            audiobooks with script generation, character and scene creation, AI
            narration, and AI music.
            <br />
            Let’s embark on this journey together and make something truly
            special! 🎨📚✨
          </Text>
        </Rows>

        <Button
          variant="primary"
          stretch={true}
          onClick={() => goToPage('ScriptDescribe')}
        >
          Start your journey here
        </Button>
      </Rows>
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
          <TabList>
            <Tab 
              id="discover"
              onClick={() => setCurrentPage('Discover')}
            >
              Discover
            </Tab>
            <Tab 
              id="generate"
              onClick={() => setCurrentPage('Generate')}
            >
              Generate
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel id="discover">{discoverTab}</TabPanel>
            <TabPanel id="generate">{generateTab}</TabPanel>
          </TabPanels>
        </Rows>
      </Tabs>
    </Box>
  );
};

export default HomePage;
