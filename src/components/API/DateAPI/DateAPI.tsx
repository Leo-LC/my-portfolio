import { useEffect, useState } from "react";

const DateAPI = () => {
  const date = new Date();
  const [displayDate, setDisplayDate] = useState<string>("");
  const desktopOptions = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "short",
  } as Intl.DateTimeFormatOptions;

  const mobileOptions = {
    weekday: "short",
    day: "numeric",
    month: "2-digit",
    year: "2-digit",
  } as Intl.DateTimeFormatOptions;

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const formattedDate = date.toLocaleDateString(
      "en-GB",
      windowWidth < 768 ? mobileOptions : desktopOptions,
    );
    setDisplayDate(formattedDate);
  }, []);

  return <p>{displayDate}</p>;
};

export default DateAPI;
