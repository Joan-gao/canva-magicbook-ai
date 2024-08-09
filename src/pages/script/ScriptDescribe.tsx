import React, { useContext, useState } from "react";
import {
  Rows,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
  Columns,
  Column,
  MultilineInput,
  Slider,
  Carousel,
  Pill,
  CheckboxGroup,
  LoadingIndicator,
} from "@canva/app-ui-kit";
import { useViewContext } from "src/context/contentContext";
import ScriptLoading from "./ScriptLoading";

interface ScriptDescProps {
  goToPage: (page: string) => void;
}

const ScriptDesc: React.FC<ScriptDescProps> = ({ goToPage }) => {
  const { setScriptData, setChapterData } = useViewContext();
  const [loading, setLoading] = useState(false);

  const [generteData, setGenerateData] = useState({
    scriptContent: "",
    ageRange: [] as string[],
    storyType: "",
    teachingContent: "",
    length: 3,
  });

  const isFormValid = () => {
    return (
      generteData.scriptContent.trim() !== "" &&
      generteData.ageRange.length > 0 &&
      generteData.storyType.trim() !== ""
    );
  };

  const requestForStory = async () => {
    console.log(generteData);
    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:5000/generate/story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ generatePrompt: generteData }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.status === "success") {
        console.log(result.story);
        setScriptData(generteData);
        setChapterData(result.story);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("error", error.message);
      }
    } finally {
      setLoading(false);

      goToPage("ScriptGenerate");
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
              onClick={() => goToPage("Main")}
            >
              <ArrowLeftIcon />
            </div>
          </Column>

          <Column width="containedContent">
            <Title tone="primary" size="medium" alignment="start">
              Script Descriptions
            </Title>
          </Column>
        </Columns>

        {/* Story Description Input */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Story Description
          </Title>

          <MultilineInput
            autoGrow
            minRows={2}
            placeholder="Write your script here..."
            onChange={(value) =>
              setGenerateData({ ...generteData, scriptContent: value })
            }
          />
        </Rows>

        {/* Age Range Checkbox */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Age Range
          </Title>

          <CheckboxGroup
            onChange={(value) =>
              setGenerateData({ ...generteData, ageRange: value })
            }
            options={[
              {
                label: "1-3 years old",
                value: "1-3",
              },
              {
                label: "3-6 years old",
                value: "3-6",
              },
              {
                label: "6-10 years old",
                value: "6-10",
              },
              {
                label: "10+ years old",
                value: "10",
              },
            ]}
          />
        </Rows>

        {/* Story Type Carousel */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Story Type
          </Title>

          <Carousel>
            {["adventure", "birthday", "science", "travel", "language study", "family"].map((type) => (
              <Pill
                key={type}
                ariaLabel={type}
                onClick={() => setGenerateData({ ...generteData, storyType: type })}
                text={type.charAt(0).toUpperCase() + type.slice(1)}
                selected={generteData.storyType === type}
              />
            ))}
          </Carousel>
        </Rows>

        {/* Teaching Content Input */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Teaching Content (Optional)
          </Title>

          <MultilineInput
            autoGrow
            minRows={2}
            placeholder="Write the knowledge you wanna involve..."
            onChange={(value) =>
              setGenerateData({ ...generteData, teachingContent: value })
            }
          />
        </Rows>

        {/* Story Length Slider */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Story Length
          </Title>

          <Box paddingStart="2u">
            <Slider
              defaultValue={3}
              max={10}
              min={3}
              step={1}
              onChange={(value) =>
                setGenerateData({ ...generteData, length: value })
              }
            />
          </Box>
        </Rows>

        {/* Generate Button */}
        <Button
          variant="primary"
          stretch={true}
          onClick={requestForStory}
          disabled={!isFormValid()}
        >
          Generate
        </Button>
      </Rows>
    </Box>
  );
};

export default ScriptDesc;
