import React from 'react';

import { Rows, Text, Button, Title } from '@canva/app-ui-kit';

interface MusicDescribeProps {
  goToPage: (page: string) => void;
}

const MusicDescribe: React.FC<MusicDescribeProps> = ({ goToPage }) => {
  return (
    <div className="scrollContainer">
      <h1>Music Describe</h1>
      <Button variant="primary" onClick={() => goToPage('GenerateTab')}>
        Back to GenerateTab
      </Button>
      {/* Add your Script Describe content here */}
    </div>
  );
};


export default MusicDescribe;
