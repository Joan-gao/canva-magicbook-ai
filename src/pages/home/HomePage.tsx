import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  TabList,
  Rows,
  Text,
  TabPanels,
  TabPanel,
  Title,
  Button,
  Carousel,
  Pill,
  EmbedCard,
  Grid,
} from "@canva/app-ui-kit";
import { useViewContext } from "src/context/contentContext";
import {
  example1,
  example2,
  example3,
  example4,
  example5,
} from "src/constants";
import {
  example1Begining,
  example1Battle,
  example1Decision,
  example1Farewell,
  example1Messenger,
  example1Returning,
  example1Army,
  example2Bird,
  example2FLower,
  example2Moon,
  example2Women,
  example3Girl,
  example3Tiger,
  example3Play,
  example3Picnic,
  example4Arrive,
  example4Depature,
  example4Play,
  example4Returning,
  example4Shopping,
  example4Zoo,
  example5Baking,
  example5Dreaming,
  example5Sleep,
  example5Waking,
  example5Passing,
  example5Watching,
  example5Star,
} from "src/assets";
interface HomePageProps {
  goToPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ goToPage }) => {
  const {
    setChapterData,
    setImageData,
    setAudioData,
    setVideoData,
    setExample,
    setMusicData,
  } = useViewContext();
  const [currentPage, setCurrentPage] = useState<string>("Discover");
  const handleExample = (title: string) => {
    setExample(true);
    if (title === "example1") {
      setChapterData(example1);
      setMusicData({
        musicUrl:
          "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66af8c180032024c5cce/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
      });
      setImageData({
        imageFiles: [
          {
            scenceName: "Beginning",
            url: example1Begining,
          },
          {
            scenceName: "Messenger Arrives",
            url: example1Messenger,
          },
          {
            scenceName: "Mulan's Decision",
            url: example1Decision,
          },
          {
            scenceName: "Family Farewell",
            url: example1Farewell,
          },
          {
            scenceName: "Army Camp",
            url: example1Army,
          },
          {
            scenceName: "The Battle",
            url: example1Battle,
          },

          {
            scenceName: "Returning Home",
            url: example1Returning,
          },
        ],
      });
      setAudioData({
        audioFiles: [
          {
            scenceName: "Beginning",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae219b003c74332baa/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Messenger Arrives",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21ae00238b152f10/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Mulan's Decision",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae2186000e520883cd/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Family Farewell",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21a8001e6503031b/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21b70005dbebe6c6/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Army Camp",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae218000285552fd91/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "The Battle",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae2192000b4fd920ec/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },

          {
            scenceName: "Returning Home",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21a30027c89a31ed/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
        ],
      });
      setVideoData({
        videoFiles: [
          {
            scenceName: "Beginning",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1dfa001e72057f1a/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Messenger Arrives",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1e2f003cf801ac8d/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Mulan's Decision",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1e3600274be907c4/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Family Farewell",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1e25001d5b6e8289/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Army Camp",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1e14001a30728b8e/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "The Battle",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1e990003aa10c7e9/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },

          {
            scenceName: "Returning Home",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1e3d0003d2a65ce1/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
        ],
      });
    } else if (title === "example2") {
      setMusicData({
        musicUrl:
          "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66af8c20002069ebe367/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
      });
      setChapterData(example2);
      setImageData({
        imageFiles: [
          {
            scenceName: "Spring morning unaware of dawn",
            url: example2Women,
          },
          {
            scenceName: "Everywhere I hear birds singing",
            url: example2Bird,
          },
          {
            scenceName: "In the night came the sound of wind and rain",
            url: example2Moon,
          },
          {
            scenceName: "How many flowers have fallen",
            url: example2FLower,
          },
        ],
      });
      setVideoData({
        videoFiles: [
          {
            scenceName: "Spring morning unaware of dawn",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1f180029f76e5993/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Everywhere I hear birds singing",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1f140011318af638/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "In the night came the sound of wind and rain",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1f03000074619d29/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "How many flowers have fallen",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1f0c0026711d3047/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
        ],
      });
      setAudioData({
        audioFiles: [
          {
            scenceName: "Spring morning unaware of dawn",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21bf001ed56a8633/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Everywhere I hear birds singing",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21ca0000c7190b07/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "In the night came the sound of wind and rain",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21c50000dc4e3c1e/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "How many flowers have fallen",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21ce001865b4e006/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
        ],
      });
    } else if (title === "example3") {
      setMusicData({
        musicUrl:
          "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66af8c2e00395007dfbb/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
      });
      setChapterData(example3);
      setImageData({
        imageFiles: [
          {
            scenceName: "Exploring the Forest",
            url: example3Girl,
          },
          {
            scenceName: "Meeting the Little Tiger",
            url: example3Tiger,
          },
          {
            scenceName: "Becoming Friends and Playing Together",
            url: example3Play,
          },
          {
            scenceName: "Picnic on the Grass",
            url: example3Picnic,
          },
        ],
      });
      setVideoData({
        videoFiles: [
          {
            scenceName: "Exploring the Forest",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1f4f0012a80c581c/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Meeting the Little Tiger",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1f620020eef0b44b/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Becoming Friends and Playing Together",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1f6900226673220f/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Picnic on the Grass",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae204900054d9cff4c/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
        ],
      });
      setAudioData({
        audioFiles: [
          {
            scenceName: "Exploring the Forest",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21e000194aaa027f/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Meeting the Little Tiger",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21d80015d2880cb8/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Becoming Friends and Playing Together",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21e6000c664b6616/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Picnic on the Grass",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21ea002511bb27b7/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
        ],
      });
    } else if (title === "example4") {
      setMusicData({
        musicUrl:
          "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66af8e970006bbf0632d/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
      });
      setChapterData(example4);
      setImageData({
        imageFiles: [
          {
            scenceName: "Departure from Shanghai",
            url: example4Depature,
          },
          {
            scenceName: "Arrival in Sydney",
            url: example4Arrive,
          },
          {
            scenceName: "Playing at Bondi Beach",
            url: example4Play,
          },
          {
            scenceName: "Visiting Taronga Zoo",
            url: example4Zoo,
          },
          {
            scenceName: "Shopping in Sydney",
            url: example4Shopping,
          },
          {
            scenceName: "Return to Shanghai",
            url: example4Returning,
          },
        ],
      });
      setVideoData({
        videoFiles: [
          {
            scenceName: "Departure from Shanghai",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae20690037fc35d217/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Arrival in Sydney",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1ff5001474731e9b/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Playing at Bondi Beach",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1fe8002d8c8e5e60/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Visiting Taronga Zoo",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae205500034c239081/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Shopping in Sydney",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae205e0014fae7e7ce/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Return to Shanghai",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1ffb001aca986a29/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
        ],
      });
      setAudioData({
        audioFiles: [
          {
            scenceName: "Departure from Shanghai",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae249700077bce5408/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21f40039cd9bf342/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Arrival in Sydney",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66af8122003c18d10c23/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Playing at Bondi Beach",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae21fd00211a9ea80c/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae249a002de7555874/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Visiting Taronga Zoo",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae221800367018e4ac/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Shopping in Sydney",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae2212001a39aa2a2a/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae24a20035affd9862/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Return to Shanghai",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae22090011c7df5cb3/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
        ],
      });
    } else {
      setMusicData({
        musicUrl:
          "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66af8c3b0019564da1d9/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
      });
      setChapterData(example5);
      setImageData({
        imageFiles: [
          {
            scenceName: "Baking Together",
            url: example5Baking,
          },
          {
            scenceName: "The Story of Stars",
            url: example5Star,
          },
          {
            scenceName: "Grandma's Passing",
            url: example5Passing,
          },
          {
            scenceName: "Falling Asleep",
            url: example5Sleep,
          },
          {
            scenceName: "Dreaming of Grandma",
            url: example5Dreaming,
          },
          {
            scenceName: "Watching the Stars",
            url: example5Watching,
          },
          {
            scenceName: "Waking Up",
            url: example5Waking,
          },
        ],
      });
      setVideoData({
        videoFiles: [
          {
            scenceName: "Baking Together",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae202f001decedc36a/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "The Story of Stars",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1fee0003370bc85d/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Grandma's Passing",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae20010018d19f5724/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Falling Asleep",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae2038002f9dfd9794/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Dreaming of Grandma",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae1fe30009154e6dee/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Watching the Stars",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae20740022bda3df74/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
          {
            scenceName: "Waking Up",
            url: "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66ae204900054d9cff4c/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
          },
        ],
      });
      setAudioData({
        audioFiles: [
          {
            scenceName: "Baking Together",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae24e80024aa69ad7e/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae24f9001a1809ee43/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "The Story of Stars",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae24e3001bc69e09c0/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae24f10032bc6109c1/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae24fd00026c96b573/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Grandma's Passing",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae24de00291dc90da3/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae252600169972e873/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Falling Asleep",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66af83f5000d3570cca5/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Dreaming of Grandma",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66af84b9001ce2427764/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Watching the Stars",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae24d50039d8e72c51/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae24f600000be9ad25/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
          {
            scenceName: "Waking Up",
            url: [
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae24d10026d093ddc4/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
              "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66ae2501002650d8e67f/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
            ],
          },
        ],
      });
    }

    goToPage("Summary");
  };
  // Discover Tab
  const discoverTab = (
    <Box paddingTop="2u" paddingBottom="3u">
      <Rows spacing="3u">
        <Rows spacing="1u">
          <Carousel>
            <Pill ariaLabel="a pill" onClick={() => {}} text="Adventure" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Birthday" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Science" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Travel" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Language Study" />
            <Pill ariaLabel="a pill" onClick={() => {}} text="Family" />
          </Carousel>
        </Rows>

        <Rows spacing="1u">
          <Grid alignX="stretch" alignY="stretch" columns={2} spacing="1u">
            <EmbedCard
              ariaLabel="Add embed to design"
              description=""
              onClick={() => handleExample("example1")}
              onDragStart={() => {}}
              thumbnailUrl={example1Begining}
              title={example1.storyTitle}
            />
            <EmbedCard
              ariaLabel="Add embed to design"
              description=""
              onClick={() => handleExample("example2")}
              onDragStart={() => {}}
              thumbnailUrl={example2Women}
              title={example2.storyTitle}
            />
            <EmbedCard
              ariaLabel="Add embed to design"
              description=""
              onClick={() => handleExample("example3")}
              onDragStart={() => {}}
              thumbnailUrl={example3Girl}
              title={example3.storyTitle}
            />
            <EmbedCard
              ariaLabel="Add embed to design"
              description="Puppyhood"
              onClick={() => handleExample("example4")}
              onDragStart={() => {}}
              thumbnailUrl={example4Depature}
              title={example4.storyTitle}
            />
            <EmbedCard
              ariaLabel="Add embed to design"
              description=""
              onClick={() => handleExample("example5")}
              onDragStart={() => {}}
              thumbnailUrl={example5Baking}
              title={example5.storyTitle}
            />
          </Grid>
        </Rows>
      </Rows>
    </Box>
  );
  // Generate Tab
  const generateTab = (
    <Box paddingTop="2u" paddingBottom="3u">
      <Rows spacing="3u">
        <Rows spacing="1u">
          <Title>Finally, you're here! 😊❤️</Title>
          <Text>
            We're excited to offer you a one-stop platform for creating
            children's audiobooks with script generation, character and scene
            creation, AI narration, and AI music.
            <br />
            Let’s embark on this journey together and make something truly
            special! 🎨📚✨
          </Text>
        </Rows>

        <Button
          variant="primary"
          stretch={true}
          onClick={() => goToPage("ScriptDescribe")}
        >
          Start your journey here
        </Button>
      </Rows>
    </Box>
  );

  return (
    <Box paddingTop="1u" paddingEnd="2u" paddingBottom="3u">
      <Tabs>
        <Rows spacing="1u">
          <TabList>
            <Tab id="discover" onClick={() => setCurrentPage("Discover")}>
              Discover
            </Tab>
            <Tab id="generate" onClick={() => setCurrentPage("Generate")}>
              Generate
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel id="discover">{discoverTab}</TabPanel>
            <TabPanel id="generate">{generateTab}</TabPanel>
          </TabPanels>
        </Rows>
      </Tabs>
    </Box>
  );
};

export default HomePage;
