export const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Maio',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

export const zero = (value: number): string => {
  if (value < 10) {
    return `0${value}`;
  }

  return value.toString();
};

export const formatDate = (date: Date) => {
  const day = date.getDate();
  const year = date.getFullYear();
  const month = months[date.getMonth()];

  return `${month} ${day}.${year}`;
};

export const formatTime = (date: Date) => {
  const hours = zero(date.getHours());
  const minutes = zero(date.getMinutes());
  const period = date.getHours() < 12 ? 'AM' : 'PM';

  return `${hours}:${minutes} ${period}`;
};
