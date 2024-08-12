import React, { useState } from "react";
import {
  MultilineInput,
  Rows,
  Columns,
  Column,
  Badge,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
} from "@canva/app-ui-kit";
import MusicStyles from "src/components/MusicStyle";
import { useViewContext } from "src/context/contentContext";
import MusicLoading from "./MusicLoading";
import CustomLoading from "src/components/CustomProgress";

interface MusicDescribeProps {
  goToPage: (page: string) => void;
}

const MusicDescribe: React.FC<MusicDescribeProps> = ({ goToPage }) => {
  const [loading, setLoading] = useState(false);
  const [musicDescription, setMusicDescription] = useState<string>("");
  const { setMusicData, musicOption } = useViewContext();

  const requestForMusic = async () => {
    setLoading(true);

    try {
      // Step 1: Trigger the generation of the music
      const generateResponse = await fetch(
        // "http://127.0.0.1:5000/generate/music",
        "https://canva-childbook-70af20fccda3.herokuapp.com/generate/music",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            option: musicOption,
            description: musicDescription,
          }),
        }
      );

      if (!generateResponse.ok) {
        throw new Error("Failed to generate music");
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
                body: JSON.stringify({ task: "music" }), // 将task参数传递为POST请求的body内容
              }
            );

            if (!statusResponse.ok) {
              throw new Error("Failed to check data status");
            }

            const statusResult = await statusResponse.json();

            if (statusResult.status === "success") {
              // 如果状态为成功，停止轮询并进行后续操作
              console.log(statusResult.data); // 打印获取到的数据
              setMusicData({ musicUrl: statusResult.data });

              setLoading(false);
              goToPage("Summary");
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
  // const requestForMusic = async () => {
  //   try {
  //     setLoading(true);

  //     const response = await fetch(
  //       "http://127.0.0.1:5000/generate/music",
  //       //  "https://canva-childbook-70af20fccda3.herokuapp.com/generate/music",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //         body: JSON.stringify({
  //           option: musicOption,
  //           description: musicDescription,
  //         }),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const result = await response.json();

  //     if (result.status === "success") {
  //       setMusicData({ musicUrl: result.musicData });
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log("error", error.message);
  //     }
  //   } finally {
  //     setLoading(false);
  //     goToPage("Summary");
  //   }
  // };

  const isButtonDisabled = !musicOption || !musicDescription.trim();

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

        {/* Descriptions */}
        <Rows spacing="2u">
          <Columns spacing="2u">
            <Column width="containedContent">
              <Badge tone="assist" shape="circle" ariaLabel="1" text="1" />
            </Column>

            <Column>
              <Title tone="primary" size="small" alignment="start">
                Descriptions
              </Title>
            </Column>
          </Columns>

          <MultilineInput
            id="musicDescriptions"
            autoGrow
            minRows={2}
            placeholder="Write your music descriptions here..."
            value={musicDescription}
            onChange={(value: string) => setMusicDescription(value)}
          />
        </Rows>

        {/* Styles Selection */}
        <Rows spacing="1u">
          <Columns spacing="2u">
            <Column width="containedContent">
              <Badge tone="assist" shape="circle" ariaLabel="2" text="2" />
            </Column>

            <Column>
              <Title tone="primary" size="small" alignment="start">
                Choose Style
              </Title>
            </Column>
          </Columns>

          <MusicStyles />
        </Rows>

        {/* Music Choice */}
        {/* <Rows spacing="2u">
          <Columns spacing="2u">
            <Column width="containedContent">
              <Badge tone="assist" shape="circle" ariaLabel="3" text="3" />
            </Column>

            <Column>
              <Title tone="primary" size="small" alignment="start">
                Music Choice
              </Title>
            </Column>
          </Columns>
          
          <Switch id="isInstrumental" label="Instrumental" />
        </Rows> */}

        {/* Generate Button */}
        <Button
          variant="secondary"
          stretch={true}
          onClick={() => goToPage("Summary")}
        >
          Skip
        </Button>
        <Button
          variant="primary"
          stretch={true}
          onClick={requestForMusic}
          disabled={isButtonDisabled}
        >
          Generate
        </Button>
      </Rows>
    </Box>
  );
};

export default MusicDescribe;
