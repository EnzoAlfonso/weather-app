export function timeConverter(timeStamp) {
  const date = new Date(timeStamp * 1000);
  const options = {hour12: false};
  const fullTime = date.toLocaleTimeString('en-US', options);
  return fullTime;
}

export function getHours(timeStamp) {
  const date = new Date(timeStamp * 1000);
  const hour = date.getHours();
  return hour;
}
