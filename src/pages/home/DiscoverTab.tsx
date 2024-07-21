import React from 'react';
import {
  Grid,
  Title,
  Box,
  EmbedCard,
  Pill,
  Column,
  Columns,
  Carousel,
} from '@canva/app-ui-kit';

const DiscoverTab: React.FC = () => {
   return (
     <div style={{ padding: '10px' }} className="scrollContainer">
       <div style={{ marginBottom: '10px' }}>
         <Carousel>
           <Pill ariaLabel="a pill" onClick={() => {}} text="Adventure" />
           <Pill ariaLabel="a pill" onClick={() => {}} text="Birthday" />
           <Pill ariaLabel="a pill" onClick={() => {}} text="Science" />
           <Pill ariaLabel="a pill" onClick={() => {}} text="Travel" />
           <Pill ariaLabel="a pill" onClick={() => {}} text="Language Study" />
           <Pill ariaLabel="a pill" onClick={() => {}} text="Family" />
         </Carousel>
       </div>
       <div style={{ marginTop: '10px' }}>
         <Grid alignX="stretch" alignY="stretch" columns={2} spacing="1u">
           <EmbedCard
             ariaLabel="Add embed to design"
             description="Puppyhood"
             onClick={() => {}}
             onDragStart={() => {}}
             thumbnailUrl="https://www.canva.dev/example-assets/images/puppyhood.jpg"
             title="Heartwarming Chatter: Adorable Conversation with a puppy"
           />
           <EmbedCard
             ariaLabel="Add embed to design"
             description="Puppyhood"
             onClick={() => {}}
             onDragStart={() => {}}
             thumbnailUrl="https://www.canva.dev/example-assets/images/puppyhood.jpg"
             title="Heartwarming Chatter: Adorable Conversation with a puppy"
           />
           <EmbedCard
             ariaLabel="Add embed to design"
             description="Puppyhood"
             onClick={() => {}}
             onDragStart={() => {}}
             thumbnailUrl="https://www.canva.dev/example-assets/images/puppyhood.jpg"
             title="Heartwarming Chatter: Adorable Conversation with a puppy"
           />
           <EmbedCard
             ariaLabel="Add embed to design"
             description="Puppyhood"
             onClick={() => {}}
             onDragStart={() => {}}
             thumbnailUrl="https://www.canva.dev/example-assets/images/puppyhood.jpg"
             title="Heartwarming Chatter: Adorable Conversation with a puppy"
           />
         </Grid>
       </div>
     </div>
   );
};

export default DiscoverTab;
