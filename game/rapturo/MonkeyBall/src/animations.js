export function smoothstep(t) {
  return (3 - 2 * t) * t * t;
}

export function interpolateKeyframes(count, frames, timeSeconds) {
  if (!frames || frames.length === 0) {
    return 0;
  }
  if (count < 2 || timeSeconds <= frames[0].timeSeconds) {
    return frames[0].value;
  }
  if (timeSeconds >= frames[count - 1].timeSeconds) {
    return frames[count - 1].value;
  }

  let nextIndex = 1;
  while (nextIndex < count - 1 && frames[nextIndex].timeSeconds <= timeSeconds) {
    nextIndex += 1;
  }
  const curr = frames[nextIndex - 1];
  const next = frames[nextIndex];

  if (curr.easeType === 0) {
    return curr.value;
  }
  const dt = next.timeSeconds - curr.timeSeconds;
  const t = (timeSeconds - curr.timeSeconds) / dt;
  if (curr.easeType === 1) {
    return curr.value * (1 - t) + next.value * t;
  }
  const t2 = t * t;
  const t3 = t2 * t;
  return (
    curr.value * (1 + (2 * t3 - 3 * t2))
    + next.value * (-2 * t3 + 3 * t2)
    + dt * ((curr.tangentOut * (t + (t3 - 2 * t2))) + next.tangentIn * (t3 - t2))
  );
}
