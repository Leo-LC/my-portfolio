const DateAPI = () => {
  const date = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "short",
  } as Intl.DateTimeFormatOptions;

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <>
      <div className="  text-white">{formattedDate}</div>
    </>
  );
};

export default DateAPI;
