import { styled } from 'stitches.config';

export const Box = styled('div', {
  variants: {
    display: {
      block: {
        display: 'block',
      },
      flex: {
        display: 'flex',
      },
    },
    alignItems: {
      center: {
        alignItems: 'center',
      },
    },
    space: {
      sm: {
        '& > *': {
          marginRight: '8px',
        },
      },
    },
  },
});
