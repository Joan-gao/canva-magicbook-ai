import React from 'react';
import { Rows, Text, Button, Title } from '@canva/app-ui-kit';

const GenerateTab: React.FC = () => {
  return (
    <div className="scrollContainer">
      <Rows spacing="2u">
        <Title>Finally, you're here! 😊❤️</Title>
        <Text>
          We're thrilled to introduce our magical app that supports amazing
          features to help you create exclusive memories with your little ones.{' '}
          <br />
          Let’s embark on this journey together and make something truly
          special! 🎨📚✨
        </Text>
        <Button variant="primary" stretch={true}>
          Start your journey here
        </Button>
      </Rows>
    </div>
  );
};

export default GenerateTab;
