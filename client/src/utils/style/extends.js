export const pageContainer = palette => `
  padding: 24px 12px;
  flex: 1;
  border-right: 3px solid ${palette.secondary.main};
  border-left: 3px solid ${palette.secondary.main};
  border-bottom: 3px solid ${palette.secondary.main};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
`
