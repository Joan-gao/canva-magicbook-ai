import React, { useState } from "react";
import {
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

interface SummaryPageProps {
  goToPage: (page: string) => void;
}

const Summary: React.FC<SummaryPageProps> = ({ goToPage }) => {
  const [currentPage, setCurrentPage] = useState<string>("illustrations");
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
                onClick={() => goToPage("MusicDescribe")}
              >
                <ArrowLeftIcon />
              </div>
            </Column>

            <Column width="containedContent">
              <Title tone="primary" size="medium" alignment="start">
                Generated Contents
              </Title>
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

      {/* Continue Button */}
      <Button
        variant="primary"
        stretch={true}
        onClick={() => goToPage("HomePage")}
      >
        Continue
      </Button>
    </Box>
  );
};

export default Summary;
