import { styled } from 'stitches.config';

export const Button = styled('button', {
  padding: '$2 $3',
  borderRadius: '10px',
  border: 'none',

  '&:hover': {
    cursor: 'pointer',
  },

  variants: {
    size: {
      small: {},
      default: {},
      large: {},
    },
    type: {
      primary: {
        backgroundColor: '$green9',
      },
      secondary: {
        backgroundColor: '$green9',
      },
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});
