import React, { useState } from "react";
import {
  Rows,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
  Badge,
  Columns,
  Column,
  Select,
} from "@canva/app-ui-kit";
import { useViewContext } from "src/context/contentContext";
import VoiceoverLoading from "./VoiceoverLoading";

import CustomLoading from "src/components/CustomProgress";

interface VoiceoverDescribeProps {
  goToPage: (page: string) => void;
}

const VoiceoverDescribe: React.FC<VoiceoverDescribeProps> = ({ goToPage }) => {
  const { chapterData, setAudioData } = useViewContext();
  const [loading, setLoading] = useState(false);
  const [ageGroup, setAgeGroup] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [style, setStyle] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const requestForVoice = async () => {
    setLoading(true);

    try {
      // Step 1: Trigger the generation of the voice
      const generateResponse = await fetch(
        // "http://127.0.0.1:5000/generate/voice",
        "https://canva-childbook-70af20fccda3.herokuapp.com/generate/voice",
        {
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
        }
      );

      if (!generateResponse.ok) {
        throw new Error("Failed to generate voice");
      }

      const generateResult = await generateResponse.json();

      if (generateResult.status === "pending") {
        // Step 2: Start polling /check-data-status every 30 seconds using setTimeout
        const pollForStatus = async () => {
          try {
            const statusResponse = await fetch(
              // "http://127.0.0.1:5000/check-data-status",
              "https://canva-childbook-70af20fccda3.herokuapp.com/check-data-status",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({ task: "voice" }), // 将task参数传递为POST请求的body内容
              }
            );

            if (!statusResponse.ok) {
              throw new Error("Failed to check data status");
            }

            const statusResult = await statusResponse.json();

            if (statusResult.status === "success") {
              console.log(statusResult.data); // 打印获取到的数据

              const voiceFiles = statusResult.data;
              const scenes = Object.entries(voiceFiles).map(
                ([scenceName, url]) => {
                  return { scenceName, url };
                }
              );

              setAudioData({ audioFiles: scenes });

              setLoading(false);
              goToPage("MusicDescribe");
            } else {
              // 如果状态仍然是 pending，继续轮询
              setTimeout(pollForStatus, 30000); // 30秒后再次检查状态
            }
          } catch (error) {
            if (error instanceof Error) {
              console.log("error", error.message);
            }
          }
        };

        pollForStatus(); // Initial call to check status immediately
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("error", error.message);
      }
      setLoading(false);
    }
  };
  // const requestForVoice = async () => {
  //   try {
  //     setLoading(true);

  //     // await new Promise((resolve) => setTimeout(resolve, 5000));

  //     const response = await fetch(
  //       "http://127.0.0.1:5000/generate/voice",
  //       //   "https://canva-childbook-70af20fccda3.herokuapp.com/generate/voice",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //           // Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify({
  //           story: chapterData.scence,
  //           language: language,
  //           ageGroup: ageGroup,
  //           style: style,
  //           gender: gender,
  //         }),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const result = await response.json();

  //     if (result.status === "success") {
  //       console.log("result.voiceData", result.voiceData);
  //       const voiceFiles = result.voiceData;
  //       const scenes = Object.entries(voiceFiles).map(([scenceName, url]) => {
  //         return { scenceName, url };
  //       });

  //       setAudioData({ audioFiles: scenes });
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log("error", error.message);
  //     }
  //   } finally {
  //     setLoading(false);

  //     goToPage("MusicDescribe");
  //   }
  // };

  const isFormValid = () => {
    return language && gender && ageGroup && style;
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
              onClick={() => goToPage("DesignDescribe")}
            >
              <ArrowLeftIcon />
            </div>
          </Column>

          <Column width="fluid">
            <Title tone="primary" size="medium" alignment="start">
              Voiceover Description
            </Title>
          </Column>

          <Column width="containedContent">
            <div
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => goToPage("MusicDescribe")}
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

        {/* Language Selection */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Language
          </Title>
          <Select
            onChange={(value) => setLanguage(value)}
            id="language"
            options={[
              { label: "English", value: "English" },
              { label: "Chinese", value: "Chinese" },
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
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
              { label: "Non-Binary", value: "Non-Binary" },
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
              { label: "Children", value: "Children" },
              { label: "Young", value: "Young" },
              { label: "Middle-Aged", value: "Middle-Aged" },
              { label: "Senior", value: "Senior" },
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
              { label: "Storytelling", value: "Storytelling" },
              { label: "Casual", value: "Casual" },
              { label: "Friendly", value: "Friendly" },
              { label: "Cheerful", value: "Cheerful" },
            ]}
          />
        </Rows>

        {/* Preview / Generate Button */}
        <Rows spacing="1u">
          {/* <Button
            variant="primary"
            stretch={true}
            onClick={requestForVoice}
            disabled={!isFormValid()}
          >

            Preview Speech
          </Button>  */}

          <Button
            variant="secondary"
            stretch={true}
            onClick={() => goToPage("MusicDescribe")}
          >
            Skip
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
