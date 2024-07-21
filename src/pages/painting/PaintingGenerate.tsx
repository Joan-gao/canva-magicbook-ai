import React from 'react';
import { Rows, Text, Button, Title } from '@canva/app-ui-kit';

interface PaintingGenerateProps {
  goToPage: (page: string) => void;
}

const PaintingGenerate: React.FC<PaintingGenerateProps> = ({ goToPage }) => {
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


export default PaintingGenerate;
