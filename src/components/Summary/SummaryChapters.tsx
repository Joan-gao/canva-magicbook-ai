import React, { useState } from 'react';
import {
  Rows,
  AudioCard,
  AudioContextProvider,
  Text,
  Title,
  Box,
} from '@canva/app-ui-kit';

const chaptersData = [
  { title: "Chapter 1", description: "Chapter Descriptions", AudioTitle: "Audio 1", AudioPreviewURL: "https://www.canva.dev/example-assets/audio-import/audio.mp3"},
  { title: "Chapter 2", description: "Chapter Descriptions", AudioTitle: "Audio 2", AudioPreviewURL: "https://www.canva.dev/example-assets/audio-import/audio.mp3"},
  { title: "Chapter 3", description: "Chapter Descriptions", AudioTitle: "Audio 3", AudioPreviewURL: "https://www.canva.dev/example-assets/audio-import/audio.mp3"},
  { title: "Chapter 4", description: "Chapter Descriptions", AudioTitle: "Audio 4", AudioPreviewURL: "https://www.canva.dev/example-assets/audio-import/audio.mp3"},
  { title: "Chapter 5", description: "Chapter Descriptions", AudioTitle: "Audio 5", AudioPreviewURL: "https://www.canva.dev/example-assets/audio-import/audio.mp3"},
  { title: "Chapter 6"  , description: "Chapter Descriptions", AudioTitle: "Audio 6", AudioPreviewURL: "https://www.canva.dev/example-assets/audio-import/audio.mp3"}
];

const SummaryChapters: React.FC = () => {
  return (
    <Rows spacing='3u'>
      {chaptersData.map((chapter, index) => (
        <Box key={index}>
          <Rows key={index} spacing='1u'>
            <Title size='small'>
              {chapter.title}
            </Title>

            <Box
              background='neutralLow'
              borderRadius='large'
              padding='2u'
            >
              <Text>{chapter.description}</Text>
            </Box>
            
            <Box background='neutral' borderRadius='large'>
              <AudioContextProvider>
                <AudioCard
                  audioPreviewUrl={chapter.AudioPreviewURL}
                  durationInSeconds={60}
                  onClick={() => {}}
                  onDragStart={() => {}}
                  thumbnailUrl=""
                  title={chapter.AudioTitle}
                />
              </AudioContextProvider>
            </Box>
          </Rows>
        </Box>
      ))}
    </Rows>
  );
};

export default SummaryChapters;
