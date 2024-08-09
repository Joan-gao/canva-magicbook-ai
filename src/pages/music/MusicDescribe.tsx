import React, { useContext, useState } from "react";

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
import { useViewContext } from "src/context/contentContext";
import MusicLoading from "./MusicLoading";
import CustomLoading from "src/components/CustomProgress";

interface MusicDescribeProps {
  goToPage: (page: string) => void;
}

const MusicDescribe: React.FC<MusicDescribeProps> = ({ goToPage }) => {
  const [loading, setLoading] = useState(false);
  const { setMusicData, musicOption, musicParameters } = useViewContext();
  const requestForMusic = async () => {
    try {
      setLoading(true);

      // await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await fetch("http://127.0.0.1:5000/generate/music", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          option: musicOption,
          parameters: musicParameters,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.status === "success") {
        console.log(result.musicData);
        setMusicData({ musicUrl: result.musicData });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("error", error.message);
      }
    } finally {
      setLoading(false);

      goToPage("Summary");
    }
  };

  if (loading) return <CustomLoading />;
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
        {/* <Rows spacing="1u"> */}
        {/* <Columns spacing="2u">
            <Column width="containedContent">
              <Badge
                tone="assist"
                shape="circle"
                ariaLabel="3"
                text="3"
              ></Badge>
            </Column> */}

        {/* <Column>
              <Title tone="primary" size="small" alignment="start">
                Set Duration
              </Title>
            </Column>
          </Columns>

          <TextInput placeholder="Enter value from 5.0 to 300.0" />
        </Rows> */}

        {/* Generate Button */}
        <Button
          variant="secondary"
          stretch={true}
          onClick={() => goToPage("Summary")}
        >
          Skip
        </Button>
        <Button variant="primary" stretch={true} onClick={requestForMusic}>
          Generate
        </Button>
      </Rows>
    </Box>
  );
};

export default MusicDescribe;
