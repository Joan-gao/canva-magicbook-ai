// 映射视图名称到组件
// ViewContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
} from "react";

interface ScriptData {
  scriptContent: string;
  ageRange: string;
  storyType: string;
  teachingContent?: string;
  length: number;
}

interface ChapterData {
  storyTitle: string;
  Characters: [{ name: string; description: string }];
  storyBackground: string;
  storyOutline: [{ title: string; content: string }];
  scence: [
    { scenceName: string; scenceDescription: string; narrationDialogue: string }
  ];
  scenceImagePrompts: [{ scenceName: string; prompt: string }];
  // charactImagePrompts: [{ character: string; prompt: string }];
}
interface ImageData {
  imageFiles: [{ scenceName: string; url: string }];
}
interface VideoData {
  videoFiles: [{ scenceName: string; url: string }];
}
interface AudioData {
  audioFiles: [{ scenceName: string; url: string[] }];
}
interface MusicData {
  musicUrl: string;
}
// interface ExampleData {
//   title: string;
//   chapterContent: [
//     {
//       content: string;
//       imageUrl: string;
//       des: string;
//       alt: string;
//     }
//   ];
// }
// const defaultExample: ExampleData = {
//   title: "",
//   chapterContent: [
//     {
//       content: "",
//       imageUrl: "",
//       des: "",
//       alt: "",
//     },
//   ],
// };
const defaultImageData: ImageData = {
  imageFiles: [{ scenceName: "", url: "" }],
};

const defaultVideoData: VideoData = {
  videoFiles: [{ scenceName: "", url: "" }],
};
const defaultAudioData: AudioData = {
  audioFiles: [{ scenceName: "", url: [""] }],
};
const defaultMusicData: MusicData = {
  musicUrl: "",
};
const defaultScriptData: ScriptData = {
  scriptContent: "",
  ageRange: "",
  storyType: "",
  teachingContent: "",
  length: 3,
};
const defaultChapterData: ChapterData = {
  storyTitle: "",
  Characters: [{ name: "", description: "" }],
  storyBackground: "",
  storyOutline: [{ title: "", content: "" }],
  scence: [{ scenceName: "", scenceDescription: "", narrationDialogue: "" }],
  scenceImagePrompts: [{ scenceName: "", prompt: "" }],
};

interface ViewContextProps {
  scriptData: ScriptData;
  setScriptData: (data: any) => void;
  chapterData: ChapterData;
  setChapterData: (data: any) => void;
  imageData: ImageData;
  setImageData: (data: any) => void;
  videoData: VideoData;
  setVideoData: (data: any) => void;
  audioData: AudioData;
  setAudioData: (data: any) => void;
  example: boolean;
  setExample: (data: any) => void;
  musicData: MusicData;
  setMusicData: (data: any) => void;
}

export const ViewContext = createContext<ViewContextProps>({
  scriptData: defaultScriptData,
  setScriptData: () => {},
  chapterData: defaultChapterData,
  setChapterData: () => {},
  imageData: defaultImageData,
  setImageData: () => {},
  videoData: defaultVideoData,
  setVideoData: () => {},
  audioData: defaultAudioData,
  setAudioData: () => {},
  example: false,
  setExample: () => {},
  musicData: defaultMusicData,
  setMusicData: () => {},
});

export const useViewContext = () => useContext(ViewContext);
interface ViewProviderProps {
  children: ReactNode;
}

export const ViewProvider: FC<ViewProviderProps> = ({ children }) => {
  const [scriptData, setScriptData] = useState<ScriptData>(defaultScriptData);
  //   const [exampleData, setExampleData] = useState<ExampleData>(defaultExample);
  const [chapterData, setChapterData] =
    useState<ChapterData>(defaultChapterData);
  const [imageData, setImageData] = useState<ImageData>(defaultImageData);
  const [videoData, setVideoData] = useState<VideoData>(defaultVideoData);
  const [audioData, setAudioData] = useState<AudioData>(defaultAudioData);
  const [example, setExample] = useState(false);
  const [musicData, setMusicData] = useState<MusicData>(defaultMusicData);

  return (
    <ViewContext.Provider
      value={{
        scriptData,
        setScriptData,
        chapterData,
        setChapterData,
        imageData,
        setImageData,
        videoData,
        setVideoData,
        audioData,
        setAudioData,
        example,
        setExample,
        musicData,
        setMusicData,
        // exampleData,
        // setExampleData,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};
