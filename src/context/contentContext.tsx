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
  Title: string;
  Characters: string[];
  ChapterList: [{ chapterTitle: string; chapterContent: string }];
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

const defaultScriptData: ScriptData = {
  scriptContent: "",
  ageRange: "",
  storyType: "",
  teachingContent: "",
  length: 3,
};
const defaultChapterData: ChapterData = {
  Title: "",
  Characters: [],
  ChapterList: [{ chapterTitle: "", chapterContent: "" }],
};

interface ViewContextProps {
  scriptData: ScriptData;
  setScriptData: (data: any) => void;
  chapterData: ChapterData;
  setChapterData: (data: any) => void;

  //   exampleData: ExampleData;
  //   setExampleData: (data: any) => void;
}

export const ViewContext = createContext<ViewContextProps>({
  scriptData: defaultScriptData,
  setScriptData: () => {},
  chapterData: defaultChapterData,
  setChapterData: () => {},
  //   exampleData: defaultExample,
  //   setExampleData: () => {},
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

  return (
    <ViewContext.Provider
      value={{
        scriptData,
        setScriptData,
        chapterData,
        setChapterData,
        // exampleData,
        // setExampleData,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};
