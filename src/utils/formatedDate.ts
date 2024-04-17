export function formatDate(dateYYYYMMDDHHMMSS: string) {
  const [date, hour] = dateYYYYMMDDHHMMSS.slice(0,16).split(' ');
  const formatDate = date.split('-').reverse().join('/')
  
  return `${formatDate} ${hour}`;
}
