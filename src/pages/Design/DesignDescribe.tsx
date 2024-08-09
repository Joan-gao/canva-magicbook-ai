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
  MultilineInput,
  Select,
  LoadingIndicator,
} from "@canva/app-ui-kit";
import DesignStyle from "../../components/DesignStyle";
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
  const [imageStyle, setImageStyple] = useState("");
  const [size, setSize] = useState("Landscape");
  const requestForImage = async () => {
    // console.log(chapterData);
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await fetch("http://127.0.0.1:5000/generate/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          scenePrompts: chapterData.scenceImagePrompts,
          imageStyle: imageStyle,
          size: size,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.status === "success") {
        console.log(result.imageData);
        const imageFiles = result.imageData;
        const scenes = Object.entries(imageFiles).map(([scenceName, url]) => ({
          scenceName,
          url,
        }));
        console.log(scenes);
        setImageData({ imageFiles: scenes });
      }

      // const imageFiles = {
      //   "The Hidden Treasure":
      //     "https://cloud.appwrite.io/v1/storage/buckets/66ab98e800074cb72188/files/8wwxaa985fgdaf35761n/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
      // };

      // 转换成 [{ scenceName: string; url: string }] 结构
    } catch (error) {
      if (error instanceof Error) {
        console.log("error", error.message);
      }
    } finally {
      setLoading(false);

      goToPage("VoiceoverDescribe");
    }
  };
  // if (loading) return <DesignLoading goToPage={goToPage} />;

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
            <Pill
              ariaLabel="a pill"
              onClick={() => setImageStyple("Japanese anime")}
              selected={imageStyle == "Japanese anime" ? true : false}
              text="Japanese anime"
            />
            <Pill
              ariaLabel="a pill"
              onClick={() => setImageStyple("Disney")}
              selected={imageStyle == "Disney" ? true : false}
              text="Disney"
            />
            <Pill
              ariaLabel="a pill"
              onClick={() => setImageStyple("Clay")}
              selected={imageStyle == "Clay" ? true : false}
              text="Clay"
            />
            <Pill
              ariaLabel="a pill"
              onClick={() => setImageStyple("American Marvel")}
              selected={imageStyle == "American Marvel" ? true : false}
              text="American Marvel"
            />
            <Pill
              ariaLabel="a pill"
              onClick={() => setImageStyple("Realistic")}
              selected={imageStyle == "Clay" ? true : false}
              text="Realistic"
            />
          </Carousel>
        </Rows>

        {/* Dimension Selections */}
        <Rows spacing="1u">
          <Title tone="primary" size="small" alignment="start">
            Design Dimension
          </Title>

          <Select
            id="dimenions"
            onChange={(value) => setSize(value)}
            options={[
              {
                label: "Landscape (16:9)",
                value: "Landscape",
              },
              {
                label: "Portrait (9:16)",
                value: "Portrait",
              },
              {
                label: "Square (1:1)s",
                value: "Square",
              },
            ]}
          ></Select>
        </Rows>

        {/* Generate Button */}
        <Button variant="primary" stretch={true} onClick={requestForImage}>
          Generate
        </Button>
      </Rows>
    </Box>
  );
};

export default DesignDescribe;
