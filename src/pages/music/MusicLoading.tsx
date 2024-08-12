import React from "react";
import {
  Rows,
  Columns,
  Column,
  Title,
  Box,
  ArrowLeftIcon,
  ProgressBar,
} from "@canva/app-ui-kit";

interface MusicLoadingProps {
  goToPage: (page: string) => void;
}

const MusicLoading: React.FC<MusicLoadingProps> = ({ goToPage }) => {
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

          <Column width="containedContent">
            <Title tone="primary" size="medium" alignment="start">
              Generating Music
            </Title>
          </Column>
        </Columns>

        <ProgressBar size="medium" tone="info" value={10} />
      </Rows>
    </Box>
  );
};

export default MusicLoading;
