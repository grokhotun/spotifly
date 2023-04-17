import { styled } from 'stitches.config';

export const Button = styled('button', {
  width: '100%',
  padding: '8px 16px',
  borderRadius: '10px',
  border: 'none',
  variants: {
    type: {
      default: {
        backgroundColor: '$green9',
      },
      primary: {
        backgroundColor: 'green',
      },
      secondary: {
        backgroundColor: 'green',
      },
    },
  },
});
