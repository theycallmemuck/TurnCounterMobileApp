export const formatSeconds = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours > 0 ? `${hours}ч, ` : "";
  const formattedMinutes = minutes > 0 ? `${minutes}м, ` : "";
  const formattedSeconds = `${remainingSeconds}с`;

  return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
};
