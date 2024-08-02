import React, { useState } from "react";
import { addAudioTrack, AudioTrack } from "@canva/design";
import { upload } from "@canva/asset";
import {
  Rows,
  Columns,
  Column,
  Text,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
  LoadingIndicator,
} from "@canva/app-ui-kit";
import { useViewContext } from "src/context/contentContext";

interface VoiceoverGenerateProps {
  goToPage: (page: string) => void;
}

const VoiceoverGenerate: React.FC<VoiceoverGenerateProps> = ({ goToPage }) => {
  const { scriptData, chapterData, setChapterData } = useViewContext();
  const [loading, setLoading] = useState(false);
  // const handleClick = async () => {
  //   // Upload an audio file
  //   const result = await upload({
  //     type: "AUDIO",
  //     title: "Example audio",
  //     url: "https://www.canva.dev/example-assets/audio-import/audio.mp3",
  //     mimeType: "audio/mp3",
  //     durationMs: 86047,
  //   });

  //   // Add the audio track to the design
  //   await addAudioTrack({
  //     ref: result.ref,
  //   });
  // };

  const handleClick = async () => {
    try {
      setLoading(true);
      // await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await fetch("http://127.0.0.1:5000/generate/audio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          story: chapterData.ChapterList,
        }),
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
              onClick={() => goToPage("VoiceoverDescribe")}
            >
              <ArrowLeftIcon />
            </div>
          </Column>

          <Column width="containedContent">
            <Title tone="primary" size="medium" alignment="start">
              Voice Generation
            </Title>
          </Column>
        </Columns>

        {/* Generate Button */}
        <Button
          variant="primary"
          stretch={true}
          // onClick={() => goToPage("MusicDescribe")}
          onClick={handleClick}
        >
          Generate
        </Button>
      </Rows>
    </Box>
  );
};

export default VoiceoverGenerate;
