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

interface DesignDescribeProps {
  goToPage: (page: string) => void;
}

const DesignDescribe: React.FC<DesignDescribeProps> = ({ goToPage }) => {
  const { chapterData, setImageData } = useViewContext();
  const [loading, setLoading] = useState(false);
  const [imageStyle, setImageStyple] = useState("Disney");
  const [size, setSize] = useState("Landscape");
  const requestForImage = async () => {
    // console.log(chapterData);
    try {
      setLoading(true);

      // await new Promise((resolve) => setTimeout(resolve, 5000));

      // const response = await fetch("http://127.0.0.1:5000/generate/image", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //     // Authorization: `Bearer ${token}`,
      //   },
      //   body: JSON.stringify({
      //     scenePrompts: chapterData.scenceImagePrompts,
      //     imageStyle: imageStyle,
      //     size: size,
      //   }),
      // });

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      // const result = await response.json();

      // if (result.status === "success") {
      //   console.log(result.imageData);
      //   const imageFiles = result.imageData;
      //   const scenes = Object.entries(imageFiles).map(([scenceName, url]) => ({
      //     scenceName,
      //     url,
      //   }));
      //   console.log(scenes);
      //   setImageData(scenes);
      // }

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

      goToPage("Summary");
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
            Title:
          </Title>

          <Carousel>
            <Pill
              ariaLabel="a pill"
              onClick={() => setImageStyple("Japanese anime")}
              text="Japanese anime"
            />
            <Pill
              ariaLabel="a pill"
              onClick={() => setImageStyple("Disney")}
              text="Disney"
            />
            <Pill
              ariaLabel="a pill"
              onClick={() => setImageStyple("Clay")}
              text="Clay"
            />
            <Pill
              ariaLabel="a pill"
              onClick={() => setImageStyple("American Marvel")}
              text="American Marvel"
            />
            <Pill
              ariaLabel="a pill"
              onClick={() => setImageStyple("Realistic")}
              text="Realistic"
            />
          </Carousel>
        </Rows>

        {/* Characters Models Selection */}
        {/* <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Character Models:
          </Title>

          <Carousel>
            <DesignStyle StyleName={'Style1'}></DesignStyle>
            <DesignStyle StyleName={'Style2'}></DesignStyle>
            <DesignStyle StyleName={'Style3'}></DesignStyle>
            <DesignStyle StyleName={'Style4'}></DesignStyle>
          </Carousel>
        </Rows> */}

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
                label: "Landscape",
                value: "Landscape",
              },
              {
                label: "Portrait",
                value: "Portrait",
              },
              {
                label: "Square",
                value: "Square",
              },
            ]}
          ></Select>
        </Rows>

        {/* Teaching Content Input */}
        {/* <Rows spacing='1u'>
          <Title
            tone='primary'
            size='small'
            alignment='start'
          >
            Teaching Content (Optional)
          </Title>
          
          <MultilineInput
            autoGrow
            minRows={2}
            placeholder="Write the knowledge you wanna involve..."
          />
        </Rows> */}

        {/* Submit Button */}
        <Button variant="primary" stretch={true} onClick={requestForImage}>
          Submit
        </Button>
      </Rows>
    </Box>
  );
};

export default DesignDescribe;
