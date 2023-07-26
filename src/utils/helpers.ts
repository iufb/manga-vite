export function bytesToMB(bytes: number) {
  const megabytes = bytes / (1024 * 1024);
  return megabytes.toFixed(2); // Return the result rounded to 2 decimal places
}
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "auto" });
}
