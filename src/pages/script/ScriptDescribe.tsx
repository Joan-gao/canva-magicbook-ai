import React from 'react';
import { Rows, Text, Button, Title } from '@canva/app-ui-kit';

interface ScriptDescribeProps {
  goToPage: (page: string) => void;
}

const ScriptDescribe: React.FC<ScriptDescribeProps> = ({ goToPage }) => {
  return (
    <div>
      <h1>Script Describe</h1>
      <Button variant="primary" onClick={() => goToPage('GenerateTab')}>
        Back to GenerateTab
      </Button>
      {/* Add your Script Describe content here */}
    </div>
  );
};

export default ScriptDescribe;
