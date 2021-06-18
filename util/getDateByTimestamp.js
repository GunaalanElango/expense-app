const getDateByTimestamp = (timestamp) => {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const a = date.getHours() >= 12 ? "PM" : "AM";

  let isToday = false;
  const todayDate = new Date();
  if (
    day == todayDate.getDate() &&
    month == todayDate.getMonth() &&
    year == todayDate.getFullYear()
  ) {
    isToday = true;
  }

  if (isToday) {
    return `Today, ${hours}:${minutes} ${a}`;
  }

  return `${day}/${month}/${year}, ${hours}:${minutes} ${a}`;
};

export default getDateByTimestamp;
