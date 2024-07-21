import React, {useState} from 'react';
import { Tab, Tabs, TabList, Rows, Text, TabPanels, TabPanel } from '@canva/app-ui-kit';
import DiscoverTab from './DiscoverTab';
import GenerateTab from './GenerateTab';

interface MainPageProps {
  goToPage: (page: string) => void;
}

const MainPage: React.FC<MainPageProps> = ({ goToPage }) => {
  const [currentTab, setCurrentTab] = useState<string>('Discover');

  const renderTab = () => {
    switch (currentTab) {
      case 'Discover':
        return <DiscoverTab />;
      case 'Generate':
        return <GenerateTab />;
      default:
        return <DiscoverTab />;
    }
  };

  return (
    <div>
      <Tabs>
        <Rows spacing="1u">
          <TabList>
            <Tab id="discover">Discover</Tab>
            <Tab id="generate">Generate</Tab>
          </TabList>
          <TabPanels>
            <TabPanel id="discover">
              <DiscoverTab />
            </TabPanel>
            <TabPanel id="generate">
              <GenerateTab />
            </TabPanel>
          </TabPanels>
        </Rows>
      </Tabs>
    </div>
  );
};

export default MainPage;
