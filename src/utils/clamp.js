export const clamp = (x, min, max) => Math.max(min, Math.min(x, max));

export const clampToClosestValue = (x, values) => {
  return values.reduce((prev, curr) =>
    Math.abs(curr - x) < Math.abs(prev - x) ? curr : prev
  );
};
