export const alignmentMapper = alignment =>
  [
    { text: 'center', css: 'center' },
    { text: 'right', css: 'flex-end' },
    { text: 'left', css: 'flex-start' },
    { text: 'bottom', css: 'flex-end' },
    { text: 'top', css: 'flex-start' },
  ].find(result => result.text === alignment).css
