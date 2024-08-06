import React, { useState } from "react";
import {
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
    const result = await upload({
      type: "IMAGE",
      mimeType: "image/png",
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
    console.log(imageData);
    try {
      setLoading(true);

      // await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await fetch(
        "http://127.0.0.1:5000/generate/animations",
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

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.status === "success") {
        const videoFiles = result.videoData;
        const scenes = Object.entries(videoFiles).map(([scenceName, url]) => ({
          scenceName,
          url,
        }));
        console.log(scenes);
        setVideoData({ videoFiles: scenes });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("error", error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <LoadingIndicator />;
  return (
    <Rows spacing="3u">
      <Grid alignX="stretch" alignY="stretch" columns={2} spacing="3u">
        {newEmbedCardsData.map((card, index) => (
          <Rows spacing="1u">
            <Carousel>
              <EmbedCard
                key={index}
                ariaLabel={card.ariaLabel}
                onClick={() => DesignImageClick(card.thumbnailUrl)}
                onDragStart={card.onDragStart}
                thumbnailUrl={card.thumbnailUrl}
                thumbnailHeight={80}
              />
              <VideoCard
                borderRadius="standard"
                ariaLabel={card.ariaLabel}
                onClick={() => DesignVideoClick(card.videoPreviewUrl)}
                videoPreviewUrl={card.videoPreviewUrl}
                thumbnailUrl={card.thumbnailUrl}
                mimeType="video/mp4"
                bottomEndVisibility="always"
                thumbnailHeight={80}
              />
            </Carousel>

            <Box background="neutralLow" borderRadius="large" padding="1u">
              <Text>{card.description}</Text>
            </Box>
          </Rows>
        ))}
      </Grid>

      {/* Animation Settings */}
      <Rows spacing="1u">
        {/* Motion Tool */}
        {!example && (
          <>
            <Title tone="primary" size="small" alignment="start">
              Animation Settings (optional)
            </Title>
            {/* Story Length Slider */}
            <Title tone="primary" size="xsmall" alignment="start">
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
            />

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
