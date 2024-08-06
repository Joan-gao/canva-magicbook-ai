import React from "react";
import {
  Rows,
  Columns,
  Column,
  Text,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
  ProgressBar,
} from "@canva/app-ui-kit";

interface DesignLoadingProps {
  goToPage: (page: string) => void;
}

const DesignLoading: React.FC<DesignLoadingProps> = ({ goToPage }) => {
  return (
    <Box paddingTop="2u" paddingEnd="2u" paddingBottom="3u">
      <Rows spacing="3u">
        {/* Page Title / Navigation */}
        <Columns spacing="1.5u">
          <Column width="containedContent">
            <div
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => goToPage("DesignDescribe")}
            >
              <ArrowLeftIcon />
            </div>
          </Column>

          <Column width="containedContent">
            <Title tone="primary" size="medium" alignment="start">
              Generating Design
            </Title>
          </Column>
        </Columns>

        <ProgressBar size="medium" tone="info" value={10} />

        {/* REMOVE LATER */}
        {/* <Button
        variant="primary"
        stretch={true}
        onClick={() => goToPage('VoiceoverDescribe')}
      >
        Continue
      </Button> */}
      </Rows>
    </Box>
  );
};

export default DesignLoading;
