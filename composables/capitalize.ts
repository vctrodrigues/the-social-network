function capitalizeSignal(value: string, signal: string) {
  return value
    .split(signal)
    .map((word: string) => capitalizeFirst(word))
    .join(signal);
}

function capitalizeFirst(value: string) {
  return value[0].toUpperCase() + value.substring(1);
}

function capitalizeEach(value: string) {
  return capitalizeSignal(value, " ");
}

function capitalizeDot(value: string) {
  return capitalizeSignal(value, ". ");
}

export function useCapitalize() {
  return {
    capitalizeFirst,
    capitalizeEach,
    capitalizeDot,
  };
}
