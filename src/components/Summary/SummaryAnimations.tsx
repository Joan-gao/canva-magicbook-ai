import React, { useState } from "react";
import {
  Badge,
  Rows,
  EmbedCard,
  Grid,
  Box,
  Text,
  VideoCard,
  Title,
  Slider,
  SegmentedControl,
  Button,
  LoadingIndicator,
  Carousel,
} from "@canva/app-ui-kit";
import { useViewContext } from "src/context/contentContext";
import { upload } from "@canva/asset";
import { addNativeElement } from "@canva/design";
import MusicLoading from "src/pages/music/MusicLoading";
import CustomLoading from "../CustomProgress";
const embedCardsData = [
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 1",
    onClick: () => {},
    onDragStart: () => {},
    videoPreviewUrl:
      "https://www.canva.dev/example-assets/video-import/beach-thumbnail-video.mp4",
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg",
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 2",
    onClick: () => {},
    onDragStart: () => {},
    videoPreviewUrl:
      "https://www.canva.dev/example-assets/video-import/beach-thumbnail-video.mp4",
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg",
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 3",
    onClick: () => {},
    onDragStart: () => {},
    videoPreviewUrl:
      "https://www.canva.dev/example-assets/video-import/beach-thumbnail-video.mp4",
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg",
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 4",
    onClick: () => {},
    onDragStart: () => {},
    videoPreviewUrl:
      "https://www.canva.dev/example-assets/video-import/beach-thumbnail-video.mp4",
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg",
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 5",
    onClick: () => {},
    onDragStart: () => {},
    videoPreviewUrl:
      "https://www.canva.dev/example-assets/video-import/beach-thumbnail-video.mp4",
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg",
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 6",
    onClick: () => {},
    onDragStart: () => {},
    videoPreviewUrl:
      "https://www.canva.dev/example-assets/video-import/beach-thumbnail-video.mp4",
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg",
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 7",
    onClick: () => {},
    onDragStart: () => {},
    videoPreviewUrl:
      "https://www.canva.dev/example-assets/video-import/beach-thumbnail-video.mp4",
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg",
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 8",
    onClick: () => {},
    onDragStart: () => {},
    videoPreviewUrl:
      "https://www.canva.dev/example-assets/video-import/beach-thumbnail-video.mp4",
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg",
  },
  {
    ariaLabel: "Add embed to design",
    description: "Chapter 9",
    onClick: () => {},
    onDragStart: () => {},
    videoPreviewUrl:
      "https://www.canva.dev/example-assets/video-import/beach-thumbnail-video.mp4",
    thumbnailUrl: "https://www.canva.dev/example-assets/images/puppyhood.jpg",
  },
];

const SummaryAnimations: React.FC = () => {
  const { chapterData, imageData, example, videoData, setVideoData } =
    useViewContext();
  const [loading, setLoading] = useState(false);
  // Mapping scenceDescription to embedCardsData description with thumbnailUrl from urlData
  const newEmbedCardsData = chapterData.scence.map((scence, index) => {
    const imageUrlInfo = imageData.imageFiles.find(
      (urlItem) => urlItem.scenceName === scence.scenceName
    );
    const videoUrlInfo = videoData.videoFiles.find(
      (urlItem) => urlItem.scenceName === scence.scenceName
    );
    return {
      ariaLabel: `Add embed for ${scence.scenceName}`,
      description: scence.scenceDescription,
      onClick: () => {},
      onDragStart: () => {},
      videoPreviewUrl: videoUrlInfo ? videoUrlInfo.url : "", // Add appropriate URL if available
      thumbnailUrl: imageUrlInfo ? imageUrlInfo.url : "", // Use the corresponding URL or an empty string if not found
    };
  });
  const DesignImageClick = async (url: string) => {
    // Upload an image
    const imageType = example ? "image/png" : "image/webp";
    const result = await upload({
      type: "IMAGE",
      mimeType: imageType,
      url: url,
      thumbnailUrl: url,
    });

    // Add the image to the design
    await addNativeElement({
      type: "IMAGE",
      ref: result.ref,
      left: 0,
      top: 0,
      width: 400,
      height: 600,
    });
  };
  const DesignVideoClick = async (url: string) => {
    // Upload an image
    const result = await upload({
      type: "VIDEO",
      mimeType: "video/mp4",
      url: url,
      thumbnailImageUrl:
        "https://www.canva.dev/example-assets/video-import/thumbnail-image.jpg",
      thumbnailVideoUrl: url,
    });

    // Add the image to the design
    await addNativeElement({
      type: "VIDEO",
      ref: result.ref,
      left: 0,
      top: 0,
      width: 400,
      height: 600,
    });
  };
  const requestForVideo = async () => {
    setLoading(true);

    try {
      // Step 1: Trigger the generation of the video
      const generateResponse = await fetch(
        "http://127.0.0.1:5000/generate/animations",
        // "https://canva-childbook-70af20fccda3.herokuapp.com/generate/animations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            // Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            images: imageData,
          }),
        }
      );

      if (!generateResponse.ok) {
        throw new Error("Failed to generate video");
      }

      const generateResult = await generateResponse.json();

      if (generateResult.status === "pending") {
        // Step 2: Start polling /check-data-status every 30 seconds using setTimeout
        const pollForStatus = async () => {
          try {
            const statusResponse = await fetch(
              "http://127.0.0.1:5000/check-data-status",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({ task: "video" }), // 将task参数传递为POST请求的body内容
              }
            );

            if (!statusResponse.ok) {
              throw new Error("Failed to check data status");
            }

            const statusResult = await statusResponse.json();

            if (statusResult.status === "success") {
              const videoFiles = statusResult.data;
              const scenes = Object.entries(videoFiles).map(
                ([scenceName, url]) => ({
                  scenceName,
                  url,
                })
              );
              console.log(scenes);
              setVideoData({ videoFiles: scenes });

              setLoading(false);
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
  // const requestForVideo = async () => {
  //   console.log(imageData);
  //   try {
  //     setLoading(true);

  //     // await new Promise((resolve) => setTimeout(resolve, 5000));

  //     const response = await fetch(
  //       "http:127.0.0.1:5000/generate/animations",
  //       // "https://canva-childbook-70af20fccda3.herokuapp.com/generate/animations",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //           // Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify({
  //           images: imageData,
  //         }),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const result = await response.json();

  //     if (result.status === "success") {
  //       const videoFiles = result.videoData;
  //       const scenes = Object.entries(videoFiles).map(([scenceName, url]) => ({
  //         scenceName,
  //         url,
  //       }));
  //       console.log(scenes);
  //       setVideoData({ videoFiles: scenes });
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log("error", error.message);
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  if (loading) return <CustomLoading />;
  return (
    <Rows spacing="3u">
      {newEmbedCardsData.map((card, index) => (
        <Rows spacing="1u">
          <Carousel>
            <EmbedCard
              key={index}
              ariaLabel={card.ariaLabel}
              onClick={() => DesignImageClick(card.thumbnailUrl)}
              onDragStart={card.onDragStart}
              thumbnailUrl={card.thumbnailUrl}
              thumbnailHeight={160}
            />
            <VideoCard
              borderRadius="none"
              ariaLabel={card.ariaLabel}
              onClick={() => DesignVideoClick(card.videoPreviewUrl)}
              videoPreviewUrl={card.videoPreviewUrl}
              thumbnailUrl={card.thumbnailUrl}
              mimeType="video/mp4"
              bottomEndVisibility="always"
              thumbnailHeight={160}
              bottomEnd={
                <Badge
                  ariaLabel="hover to play video"
                  text="hover to play video"
                  tone="contrast"
                />
              }
            />
          </Carousel>
          <Box background="neutralLow" borderRadius="large" padding="1u">
            <Text>{card.description}</Text>
          </Box>
        </Rows>
      ))}

      {/* Animation Settings */}
      <Rows spacing="1u">
        {/* Motion Tool */}
        {!example && (
          <>
            <Title tone="primary" size="small" alignment="start">
              Create Animation for Image (optional)
            </Title>
            {/* Story Length Slider */}
            {/* <Title tone="primary" size="xsmall" alignment="start">
              Motion Length (seconds)
            </Title>

            <Box paddingStart="2u">
              <Slider
                id="motionLength"
                defaultValue={3}
                max={10}
                min={3}
                step={1}
              />
            </Box>
            <Title tone="primary" size="xsmall" alignment="start">
              Motion Tool
            </Title>
            <SegmentedControl
              id="motionTool"
              options={[
                { value: "aiMotion", label: "AI Motion" },
                { value: "parallaxMotion", label: "Parallax Motion" },
              ]}
            /> */}

            <Button
              variant="secondary"
              stretch={true}
              onClick={requestForVideo}
            >
              Animate
            </Button>
          </>
        )}
      </Rows>
    </Rows>
  );
};

export default SummaryAnimations;
