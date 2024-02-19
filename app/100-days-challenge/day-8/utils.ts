export function capNumOfChars(string: string) {
  if (string.length > 100) {
    return string.slice(0, 150) + "...";
  }
  return string;
}

export function formatTime(time: number) {
  if (time < 10) {
    return `0${time}`;
  }

  return time;
}

export function outputDate(dateObj: Date) {
  const currentDate = new Date();

  const dateCondition =
    currentDate.getDate() +
      " " +
      currentDate.toLocaleString("es-ES", { month: "long" }) ===
    dateObj.getDate() +
      " " +
      dateObj.toLocaleString("es-ES", { month: "long" });

  if (dateCondition) {
    return "Today";
  }
  return `${formatTime(dateObj.getDate())} ${dateObj.toLocaleString("es-ES", { month: "long" })}`;
}
