import React, { useState } from "react";
import {
  Badge,
  Box,
  Tab,
  Tabs,
  TabList,
  Rows,
  TabPanels,
  TabPanel,
  Title,
  Button,
  Column,
  Columns,
  ArrowLeftIcon,
} from "@canva/app-ui-kit";
import SummaryChapters from "src/components/Summary/SummaryChapters";
import SummaryAnimations from "src/components/Summary/SummaryAnimations";
import { useViewContext } from "src/context/contentContext";

interface SummaryPageProps {
  goToPage: (page: string) => void;
}

const Summary: React.FC<SummaryPageProps> = ({ goToPage }) => {
  const [currentPage, setCurrentPage] = useState<string>("illustrations");
  const { example } = useViewContext();
  const handleClick = () => {
    setCurrentPage("illustrations");
  };
  // Illustrations Tab
  const illustrationsTab = (
    <Box paddingTop="2u" paddingBottom="3u">
      <SummaryAnimations />
    </Box>
  );

  // Chapters Text Tab
  const chaptersTab = (
    <Box paddingTop="2u" paddingBottom="3u">
      <SummaryChapters />
    </Box>
  );

  return (
    <Box paddingTop="1u" paddingEnd="2u" paddingBottom="3u">
      <Tabs>
        <Rows spacing="1u">
          <Columns spacing="1.5u">
            {/* Back Button */}
            <Column width="containedContent">
              <div
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() =>
                  example ? goToPage("Main") : goToPage("MusicDescribe")
                }
              >
                <ArrowLeftIcon />
              </div>
            </Column>

            <Column width="fluid">
              <Title tone="primary" size="medium" alignment="start">
                {example ? "Return to Home" : " Generated Contents"}
              </Title>
            </Column>

            <Column width='containedContent'>
              <div
                style={{background: 'none', border: 'none', cursor:'pointer'}}
                onClick={() => goToPage('HomePage')}
              >
                <Badge
                  ariaLabel='Home'
                  text='Home'
                  tone='assist'
                  wrapInset='-0.5u'
                />
              </div>
            </Column>
          </Columns>

          {/* Tabs Button */}
          <Column width="fluid">
            <TabList>
              <Tab id="illustrations" onClick={handleClick}>
                Illustrations
              </Tab>
              <Tab id="chapters" onClick={() => setCurrentPage("chapters")}>
                Chapters
              </Tab>
            </TabList>
          </Column>

          {/* Tabs Content*/}
          <TabPanels>
            <TabPanel id="illustrations">{illustrationsTab}</TabPanel>
            <TabPanel id="chapters">{chaptersTab}</TabPanel>
          </TabPanels>
        </Rows>
      </Tabs>
    </Box>
  );
};

export default Summary;
