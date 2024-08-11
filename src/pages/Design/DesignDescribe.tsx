import React, { useState } from "react";
import {
  Rows,
  Button,
  Title,
  Box,
  ArrowLeftIcon,
  Carousel,
  Pill,
  Column,
  Columns,
  Select,
} from "@canva/app-ui-kit";
import { useViewContext } from "src/context/contentContext";
import DesignLoading from "./DesignLoading";
import LoadingBar from "src/components/CustomProgress";
import CustomLoading from "src/components/CustomProgress";

interface DesignDescribeProps {
  goToPage: (page: string) => void;
}

const DesignDescribe: React.FC<DesignDescribeProps> = ({ goToPage }) => {
  const { chapterData, setImageData } = useViewContext();
  const [loading, setLoading] = useState(false);

  const [imageStyle, setImageStyle] = useState("");

  const [size, setSize] = useState<string | null>(null);
  const requestForImage = async () => {
    setLoading(true);

    try {
      // Step 1: Trigger the generation of the image
      const generateResponse = await fetch(
        "https://canva-childbook-70af20fccda3.herokuapp.com/generate/image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            scenePrompts: chapterData.scenceImagePrompts,
            imageStyle: imageStyle,
            size: size,
          }),
        }
      );

      if (!generateResponse.ok) {
        throw new Error("Failed to generate image");
      }

      const generateResult = await generateResponse.json();

      if (generateResult.status === "pending") {
        // Step 2: Start polling /check-data-status every 30 seconds
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
                body: JSON.stringify({ task: "image" }), // 将task参数传递为POST请求的body内容
              }
            );

            if (!statusResponse.ok) {
              throw new Error("Failed to check data status");
            }

            const statusResult = await statusResponse.json();

            if (statusResult.status === "success") {
              console.log(statusResult.data); // 打印获取到的数据

              const imageFiles = statusResult.data;
              const scenes = Object.entries(imageFiles).map(
                ([scenceName, url]) => ({
                  scenceName,
                  url,
                })
              );
              console.log(scenes);
              setImageData({ imageFiles: scenes });

              setLoading(false);
              goToPage("VoiceoverDescribe");
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

  const isFormValid = () => {
    return imageStyle !== "" && size !== null;
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
              onClick={() => goToPage("ScriptGenerate")}
            >
              <ArrowLeftIcon />
            </div>
          </Column>

          <Column width="containedContent">
            <Title tone="primary" size="medium" alignment="start">
              Design Descriptions
            </Title>
          </Column>
        </Columns>

        {/* Design Styles Selection */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Style
          </Title>

          <Carousel>
            {[
              "Japanese anime",
              "Disney",
              "Clay",
              "American Marvel",
              "Realistic",
            ].map((style) => (
              <Pill
                key={style}
                ariaLabel={style}
                onClick={() => setImageStyle(style)}
                text={style}
                selected={imageStyle === style}
              />
            ))}
          </Carousel>
        </Rows>

        {/* Dimension Selections */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Design Dimension
          </Title>

          <Select
            id="dimensions"
            onChange={(value) => setSize(value)}
            options={[
              { label: "Landscape (16:9)", value: "Landscape" },
              { label: "Portrait (9:16)", value: "Portrait" },
              { label: "Square (1:1)", value: "Square" },
            ]}
          />
        </Rows>

        {/* Generate Button */}
        <Button
          variant="primary"
          stretch={true}
          onClick={requestForImage}
          disabled={!isFormValid()}
        >
          Generate
        </Button>
      </Rows>
    </Box>
  );
};

export default DesignDescribe;
