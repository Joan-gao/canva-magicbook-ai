import React from "react";

import {
  Text,
  TextInput,
  Rows,
  Columns,
  Column,
  Badge,
  Button,
  Title,
  Box,
  Slider,
  Grid,
  ArrowLeftIcon,
} from "@canva/app-ui-kit";
import MusicStyles from "src/components/MusicStyle";
import MusicParameter from "src/components/MusicParameter";

interface MusicDescribeProps {
  goToPage: (page: string) => void;
}

const MusicDescribe: React.FC<MusicDescribeProps> = ({ goToPage }) => {
  return (
    <Box paddingTop="2u" paddingEnd="2u" paddingBottom="3u">
      <Rows spacing="3u">
        {/* Page Title / Navigation */}
        <Columns spacing="1.5u">
          <Column width="containedContent">
            <div
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => goToPage("VoiceoverDescribe")}
            >
              <ArrowLeftIcon />
            </div>
          </Column>

          <Column width="fluid">
            <Title tone="primary" size="medium" alignment="start">
              Music Descriptions
            </Title>
          </Column>

          <Column width="containedContent">
            <div
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => goToPage("Summary")}
            >
              <Badge
                ariaLabel="skip"
                text="Skip"
                tone="assist"
                wrapInset="-0.5u"
              />
            </div>
          </Column>
        </Columns>

        {/* Styles Selection */}
        <Rows spacing="1u">
          <Columns spacing="2u">
            <Column width="containedContent">
              <Badge
                tone="assist"
                shape="circle"
                ariaLabel="1"
                text="1"
              ></Badge>
            </Column>

            <Column>
              <Title tone="primary" size="small" alignment="start">
                Choose Style
              </Title>
            </Column>
          </Columns>

          <MusicStyles />
        </Rows>

        {/* Music Parameters */}
        <Rows spacing="2u">
          <Columns spacing="2u">
            <Column width="containedContent">
              <Badge
                tone="assist"
                shape="circle"
                ariaLabel="2"
                text="2"
              ></Badge>
            </Column>

            <Column>
              <Title tone="primary" size="small" alignment="start">
                Refine Music Parameters
              </Title>
            </Column>
          </Columns>

          <MusicParameter />
        </Rows>

        {/* Durations */}
        <Rows spacing="1u">
          <Columns spacing="2u">
            <Column width="containedContent">
              <Badge
                tone="assist"
                shape="circle"
                ariaLabel="3"
                text="3"
              ></Badge>
            </Column>

            <Column>
              <Title tone="primary" size="small" alignment="start">
                Set Duration
              </Title>
            </Column>
          </Columns>

          <TextInput placeholder="Enter value from 5.0 to 300.0" />
        </Rows>

        {/* Generate Button */}
        <Button
          variant="primary"
          stretch={true}
          onClick={() => goToPage("MusicLoading")}
        >
          Generate
        </Button>
      </Rows>
    </Box>
  );
};

export default MusicDescribe;
