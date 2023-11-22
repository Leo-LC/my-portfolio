import { useEffect, useState } from "react";

const date = new Date();

const CurrentYear = date.getFullYear();

const CurrentDate = () => {
  const [displayDate, setDisplayDate] = useState<string>("");
  const desktopOptions = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  } as Intl.DateTimeFormatOptions;

  const tabletOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "2-digit",
  } as Intl.DateTimeFormatOptions;

  const mobileOptions = {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  } as Intl.DateTimeFormatOptions;

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const formattedDate = date.toLocaleDateString(
      "en-GB",
      windowWidth > 1024
        ? desktopOptions
        : windowWidth > 768
          ? tabletOptions
          : mobileOptions,
    );
    setDisplayDate(formattedDate);
  }, []);

  return (
    <p className="footer_text" id="dateAPI">
      {displayDate}
    </p>
  );
};

export { CurrentDate, CurrentYear };
