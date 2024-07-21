import React from 'react';
import { Rows, Text, Button, Title } from '@canva/app-ui-kit';

interface ScriptGenerateProps {
  goToPage: (page: string) => void;
}

const ScriptGenerate: React.FC<ScriptGenerateProps> = ({ goToPage }) => {
  return (
    <div className="scrollContainer">
      <h1>Script Generate</h1>
      {/* Add your Script Describe content here */}
    </div>
  );
};

export default ScriptGenerate;
