export const mergeStrings = ({ joinValue = " ", values = [] }) =>
  values.filter(Boolean).join(joinValue);
