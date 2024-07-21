import {
  Pill
} from '@canva/app-ui-kit';
import { musicStyleOptions } from './MusicStyleOption';

const MusicStyles = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', gap: '8px' }}>
      {musicStyleOptions.map((option, index) => (
          <Pill
            ariaLabel={option.text}
            onClick={() => {}}
            text={option.text}
          />
      ))}
    </div>
  );
};

export default MusicStyles;
