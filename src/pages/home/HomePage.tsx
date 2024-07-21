import React, { useState } from 'react';
import {
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
    <div style={{ padding: '15px' }}>
      <div style={{ marginBottom: '15px' }}>
        <Carousel>
          <Pill ariaLabel="a pill" onClick={() => {}} text="Adventure" />
          <Pill ariaLabel="a pill" onClick={() => {}} text="Birthday" />
          <Pill ariaLabel="a pill" onClick={() => {}} text="Science" />
          <Pill ariaLabel="a pill" onClick={() => {}} text="Travel" />
          <Pill ariaLabel="a pill" onClick={() => {}} text="Language Study" />
          <Pill ariaLabel="a pill" onClick={() => {}} text="Family" />
        </Carousel>
      </div>
      <div style={{ marginTop: '15px' }}>
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
      </div>
    </div>
  );
  // Generate Tab
  const generateTab = (
    <div style={{ padding: '15px' }}>
      <Rows spacing="2u">
        <Title>Finally, you're here! 😊❤️</Title>
        <Text>
          We're excited to offer you a one-stop platform for creating children's
          audiobooks with script generation, character and scene creation, AI
          narration, and AI music.
          <br />
          Let’s embark on this journey together and make something truly
          special! 🎨📚✨
        </Text>
        <Button
          variant="primary"
          stretch={true}
          onClick={() => goToPage('ScriptDescribe')}
        >
          Start your journey here
        </Button>
      </Rows>
    </div>
  );

  return (
    <div className="scrollContainer">
      <Tabs>
        <Rows spacing="1u">
          <TabList>
            <Tab id="discover" onClick={() => setCurrentPage('Discover')}>
              Discover
            </Tab>
            <Tab id="generate" onClick={() => setCurrentPage('Generate')}>
              Generate
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel id="discover">{discoverTab}</TabPanel>
            <TabPanel id="generate">{generateTab}</TabPanel>
          </TabPanels>
        </Rows>
      </Tabs>
    </div>
  );
};

export default HomePage;
