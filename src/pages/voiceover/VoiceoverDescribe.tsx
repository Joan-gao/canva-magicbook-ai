import React, { useState } from "react";
import {
  Rows,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
  PlayFilledIcon,
  Columns,
  Column,
  Select,
  Carousel,
} from "@canva/app-ui-kit";
import DesignStyle from "../../components/DesignStyle";
import { useViewContext } from "src/context/contentContext";

interface VoiceoverDescribeProps {
  goToPage: (page: string) => void;
}

const VoiceoverDescribe: React.FC<VoiceoverDescribeProps> = ({ goToPage }) => {
  const { chapterData, setAudioData } = useViewContext();
  const [loading, setLoading] = useState(false);
  const [ageGroup, setAgeGroup] = useState("Middle-Aged");
  const [gender, setGender] = useState("Male");
  const [style, setStyle] = useState("StoryTelling");
  const [language, setLanguage] = useState("English");

  const requestForVoice = async () => {
    console.log(chapterData);
    try {
      setLoading(true);

      // await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await fetch("http://127.0.0.1:5000/generate/voice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          story: chapterData.scence,
          language: language,
          ageGroup: ageGroup,
          style: style,
          gender: gender,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.status === "success") {
        console.log(result.voiceData);
        const voiceFiles = result.videoData;
        const scenes = Object.entries(voiceFiles).map(([scenceName, url]) => ({
          scenceName,
          url,
        }));
        setAudioData(scenes);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("error", error.message);
      }
    } finally {
      setLoading(false);

      goToPage("VoiceoverGenerate");
    }
  };
  return (
    <Box paddingTop="2u" paddingEnd="2u" paddingBottom="3u">
      <Rows spacing="3u">
        {/* Page Title / Navigation */}
        <Columns spacing="1.5u">
          <Column width="containedContent">
            <div
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => goToPage("Summary")}
            >
              <ArrowLeftIcon />
            </div>
          </Column>

          <Column width="containedContent">
            <Title tone="primary" size="medium" alignment="start">
              Voiceover Description
            </Title>
          </Column>
        </Columns>

        {/* Characters Selection */}
        {/* <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Voice Character
          </Title>

          <Carousel>
            <DesignStyle StyleName={"Style1"}></DesignStyle>
            <DesignStyle StyleName={"Style2"}></DesignStyle>
            <DesignStyle StyleName={"Style3"}></DesignStyle>
            <DesignStyle StyleName={"Style4"}></DesignStyle>
          </Carousel>
        </Rows> */}

        {/* Language Selection */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Language
          </Title>

          <Select
            onChange={(value) => setLanguage(value)}
            id="language"
            options={[
              {
                label: "English",
                value: "English",
              },
              {
                label: "Chinese",
                value: "Chinese",
              },
            ]}
          />
        </Rows>
        {/* Gender Selection */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Gender
          </Title>

          <Select
            onChange={(value) => setGender(value)}
            id="gender"
            options={[
              {
                label: "Male",
                value: "Male",
              },
              {
                label: "Female",
                value: "Female",
              },
              {
                label: "Non-Binary",
                value: "Non-Binary",
              },
            ]}
          />
        </Rows>
        {/* Age group */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Age group
          </Title>

          <Select
            onChange={(value) => setAgeGroup(value)}
            id="ageGroup"
            options={[
              {
                label: "Children",
                value: "Children",
              },
              {
                label: "Young",
                value: "Young",
              },
              {
                label: "Middle-Aged",
                value: "Middle-Aged",
              },
              {
                label: "Senior",
                value: "Senior",
              },
            ]}
          />
        </Rows>
        {/* Voice Style Selection */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Voice Style
          </Title>

          <Select
            onChange={(value) => setStyle(value)}
            id="voiceStyle"
            options={[
              {
                label: "StoryTelling",
                value: "Storytelling",
              },
              {
                label: "Casual",
                value: "Casual",
              },
              {
                label: "Friendly",
                value: "Friendly",
              },
              {
                label: "Cheerful",
                value: "Cheerful",
              },
            ]}
          />
        </Rows>

        {/* Preview / Generate Button */}
        <Rows spacing="1u">
          <Button
            variant="secondary"
            stretch={true}
            icon={PlayFilledIcon}
            onClick={() => {}}
          >
            Preview Speech
          </Button>

          <Button variant="primary" stretch={true} onClick={requestForVoice}>
            Generate
          </Button>
        </Rows>
      </Rows>
    </Box>
  );
};

export default VoiceoverDescribe;
