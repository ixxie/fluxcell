import { lighten } from 'polished';

const iconButtonThemes = {
  white: {
    background: 'white',
    border: `1px solid ${lighten(0.7, '#132E5D')}`,
    color: '#132E5D',
    clickBoxShadow: 'inset 1px 1px 1px lightgray',
  },
  lightSeaGreen: {
    background: 'lightSeaGreen',
    border: 'none',
    color: 'white',
    clickBoxShadow: 'inset 1px 1px 1px #006b65',
  },
  darkBlue: {
    background: '#132E5D',
    border: 'none',
    color: 'white',
    clickBoxShadow: 'inset 1px 1px 1px #006b65',
  },
};

export default iconButtonThemes;
