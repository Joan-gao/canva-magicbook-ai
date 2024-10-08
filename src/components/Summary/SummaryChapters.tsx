import React, { useState } from "react";
import {
  Rows,
  AudioCard,
  AudioContextProvider,
  Text,
  Title,
  Box,
} from "@canva/app-ui-kit";
import { useViewContext } from "src/context/contentContext";
import { url } from "inspector";
import { upload } from "@canva/asset";
import { addNativeElement, getCurrentPageContext } from "@canva/design";
import { addAudioTrack } from "@canva/design";
const chaptersData = [
  {
    title: "Chapter 1",
    description: "Chapter Descriptions",
    AudioTitle: "Audio 1",
    AudioPreviewURL:
      "https://www.canva.dev/example-assets/audio-import/audio.mp3",
  },
  {
    title: "Chapter 2",
    description: "Chapter Descriptions",
    AudioTitle: "Audio 2",
    AudioPreviewURL:
      "https://www.canva.dev/example-assets/audio-import/audio.mp3",
  },
  {
    title: "Chapter 3",
    description: "Chapter Descriptions",
    AudioTitle: "Audio 3",
    AudioPreviewURL:
      "https://www.canva.dev/example-assets/audio-import/audio.mp3",
  },
  {
    title: "Chapter 4",
    description: "Chapter Descriptions",
    AudioTitle: "Audio 4",
    AudioPreviewURL:
      "https://www.canva.dev/example-assets/audio-import/audio.mp3",
  },
  {
    title: "Chapter 5",
    description: "Chapter Descriptions",
    AudioTitle: "Audio 5",
    AudioPreviewURL:
      "https://www.canva.dev/example-assets/audio-import/audio.mp3",
  },
  {
    title: "Chapter 6",
    description: "Chapter Descriptions",
    AudioTitle: "Audio 6",
    AudioPreviewURL:
      "https://www.canva.dev/example-assets/audio-import/audio.mp3",
  },
];

const SummaryChapters: React.FC = () => {
  const { chapterData, musicData, audioData } = useViewContext();
  console.log("aduioData", audioData);
  const newChaptersData = chapterData.scence.map((scence) => {
    // 查找与当前 scence 相关的所有 audioData
    const urlInfos = audioData.audioFiles.find(
      (urlItem) => urlItem.scenceName === scence.scenceName
    );

    return {
      title: scence.scenceName,
      description: scence.narrationDialogue,
      AudioTitle: scence.scenceName,
      AudioPreviewURLs: urlInfos ? urlInfos.url : [], // 提取所有 url 到数组中
    };
  });
  const DesignAudioClick = async (url: string, title: string) => {
    // Upload an audio
    const result = await upload({
      type: "AUDIO",
      title: title,
      url: url,
      mimeType: "audio/mp3",
      durationMs: 86047,
    });

    // Add the image to the design
    await addAudioTrack({
      ref: result.ref,
    });
  };

  const handleClick = async (des, top) => {
    await positionText(des, top);
  };

  const positionText = async (des: string, top: number) => {
    const context = await getCurrentPageContext();
    if (!context.dimensions) {
      console.warn("The current design does not have dimensions");
      return;
    }
    const width = 300;

    const left = 450;

    await addNativeElement({
      type: "TEXT",
      children: [des],
      width,
      top,
      left,
    });
  };
  return (
    <Rows spacing="3u">
      {newChaptersData.map((chapter, index) => (
        <Box key={index}>
          <Rows key={index} spacing="1u">
            <div onClick={() => handleClick(chapter.title, 20)}>
              <Title size="small">{chapter.title}</Title>
            </div>
            <div onClick={() => handleClick(chapter.description, 50)}>
              <Box background="neutralLow" borderRadius="large" padding="2u">
                <Text>{chapter.description}</Text>
              </Box>
            </div>
            {audioData.audioFiles && (
              <Box background="neutral" borderRadius="large">
                <AudioContextProvider>
                  {chapter.AudioPreviewURLs.map((audioUrl, index) => (
                    <AudioCard
                      key={index}
                      durationInSeconds={3}
                      audioPreviewUrl={audioUrl} // 确保这里是单个 URL
                      onClick={() => DesignAudioClick(audioUrl, chapter.title)}
                      onDragStart={() => {}}
                      thumbnailUrl=""
                      title={`${chapter.AudioTitle}`} // 为每个音频添加编号
                    />
                  ))}
                </AudioContextProvider>
              </Box>
            )}
          </Rows>
        </Box>
      ))}
      {musicData.musicUrl && (
        <>
          <Box background="neutralLow" borderRadius="large" padding="2u">
            <Text>Music For The Story</Text>
          </Box>
          <Box background="neutral" borderRadius="large">
            <AudioContextProvider>
              <AudioCard
                audioPreviewUrl={musicData.musicUrl}
                durationInSeconds={60}
                onClick={() => DesignAudioClick(musicData.musicUrl, "Music")}
                onDragStart={() => {}}
                thumbnailUrl=""
                title="Music"
              />
            </AudioContextProvider>
          </Box>
        </>
      )}
    </Rows>
  );
};

export default SummaryChapters;
