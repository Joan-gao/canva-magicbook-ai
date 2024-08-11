import React, { useState } from "react";
import {
  Rows,
  Text,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
  Columns,
  Column,
} from "@canva/app-ui-kit";
import { useViewContext } from "src/context/contentContext";
import ScriptLoading from "./ScriptLoading";

interface ScriptGenerateProps {
  goToPage: (page: string) => void;
}

const ScriptGenerate: React.FC<ScriptGenerateProps> = ({
  goToPage,
}: ScriptGenerateProps) => {
  const { scriptData, chapterData, setChapterData } = useViewContext();

  const [loading, setLoading] = useState(false);
  const characters = chapterData.Characters;
  const storyOutline = chapterData.storyOutline;
  console.log(characters);
  console.log(storyOutline);
  const regenerateStory = async () => {
    try {
      setLoading(true);
      // await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await fetch("http://127.0.0.1:5000/generate/story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ generatePrompt: scriptData }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.status === "success") {
        console.log(result.story);
        setChapterData(result.story);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("error", error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <ScriptLoading goToPage={goToPage} />;

  return (
    <Box paddingTop="2u" paddingEnd="2u" paddingBottom="3u">
      <Rows spacing="3u">
        {/* Page Title / Navigation */}
        <Columns spacing="1.5u">
          <Column width="containedContent">
            <div
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => goToPage("ScriptDescribe")}
            >
              <ArrowLeftIcon />
            </div>
          </Column>

          <Column width="containedContent">
            <Title tone="primary" size="medium" alignment="start">
              Script Generation
            </Title>
          </Column>
        </Columns>

        {/* Story Background */}
        <Rows spacing="1u">
          <Title tone="primary" size="medium" alignment="start">
            Story Background:
          </Title>

          <Text size="medium" tone="secondary">
            {chapterData.storyBackground}
          </Text>
        </Rows>

        {/* Main Characters */}
        <Rows spacing="2u">
          <Title tone="primary" size="medium" alignment="start">
            Main Characters:
          </Title>
          {characters.map((character, index) => (
            <Box>
              <Title tone="primary" size="small" alignment="start">
                {character.name}:
              </Title>

              <Text key={index} size="medium" tone="secondary">
                {character.description}
              </Text>
            </Box>
          ))}
        </Rows>

        {/* Story Outline */}
        <Rows spacing="2u">
          <Title tone="primary" size="medium" alignment="start">
            Story Outline:
          </Title>
          {storyOutline.map((item, index) => (
            <Box>
              <Title tone="primary" size="small" alignment="start">
                Chapter {index + 1}:
              </Title>

              <Text key={index} size="medium" tone="secondary">
                <strong>{item.title}:</strong> {item.content}
              </Text>
            </Box>
          ))}
        </Rows>

        {/* Regenerate/Continue Button */}
        <Columns spacing="1u">
          <Column>
            <Button variant="primary" stretch={true} onClick={regenerateStory}>
              Regenerate
            </Button>
          </Column>

          <Column>
            <Button
              variant="primary"
              stretch={true}
              onClick={() => goToPage("DesignDescribe")}
            >
              Continue
            </Button>
          </Column>
        </Columns>
      </Rows>
    </Box>
  );
};

export default ScriptGenerate;
