export const getIndianTime = (): string => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const timeString: string = formatter.format(new Date());

  return `${timeString} UTC+5:30`;
};
