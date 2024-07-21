import React from 'react';
import { Rows, Text, Button, Title } from '@canva/app-ui-kit';

interface PaintingDescribeProps {
  goToPage: (page: string) => void;
}

const PaintingDescribe: React.FC<PaintingDescribeProps> = ({ goToPage }) => {
  return (
    <div className="scrollContainer">
      <h1>Painting Describe</h1>
      <Button variant="primary" onClick={() => goToPage('GenerateTab')}>
        Back to GenerateTab
      </Button>
      {/* Add your Script Describe content here */}
    </div>
  );
};

export default PaintingDescribe;
