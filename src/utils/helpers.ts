export function bytesToMB(bytes: number) {
  const megabytes = bytes / (1024 * 1024);
  return megabytes.toFixed(2); // Return the result rounded to 2 decimal places
}
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "auto" });
}

export function calculateTimeElapsed(timestamp: string) {
  const commentDate = new Date(timestamp);

  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - commentDate.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let timeString = "";

  if (days > 0) {
    timeString += `${days} days  `;
  }

  if (hours > 0) {
    timeString += `${hours % 24} hours  `;
  }

  if (minutes > 0) {
    timeString += `${minutes % 60} minutes  `;
  }

  if (timeString === "") {
    timeString = "Just now";
  }

  return `${timeString} ${timeString !== "Just now" ? "ago" : ""}`;
}
