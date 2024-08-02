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
  LoadingIndicator,
} from "@canva/app-ui-kit";
import { useViewContext } from "src/context/contentContext";

interface ScriptGenerateProps {
  goToPage: (page: string) => void;
}

const ScriptGenerate: React.FC<ScriptGenerateProps> = ({
  goToPage,
}: ScriptGenerateProps) => {
  const { scriptData, chapterData, setChapterData } = useViewContext();

  const characters = chapterData.Characters;
  const characterString = characters.join(", ");
  const [loading, setLoading] = useState(false);
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

  if (loading) return <LoadingIndicator size="medium" />;
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

        {/* Title Generated */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Title:
          </Title>
          {/* 
          <Text size="medium">Xiaomei's Family Summer Adventure in Perth</Text> */}
          <Text size="medium">{chapterData.Title}</Text>
        </Rows>

        {/* Characters Generated */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Characters:
          </Title>

          {/* <Text size="medium">Xiaomei, Xiaomei's mom, Xiaomei's Dad</Text> */}
          <Text size="medium">{characterString}</Text>
        </Rows>

        {/* Title Generated */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Chapters:
          </Title>

          <Text size="medium">
            {chapterData.ChapterList.map((item, index) => (
              <>
                <br key={index} />
                Chapter {index + 1}: {item.chapterTitle}
                <br />
                {item.chapterContent}
                <br />
              </>
            ))}
          </Text>
        </Rows>

        {/* Submit Button */}
        <Columns spacing="1u">
          <Column>
            <Button variant="primary" stretch={true}>
              Regenerate
            </Button>
          </Column>

          <Column>
            <Button
              variant="primary"
              stretch={true}
              onClick={() => goToPage("DesignDescribe")}
            >
              Submit
            </Button>
          </Column>
        </Columns>
      </Rows>
    </Box>
  );
};

export default ScriptGenerate;
