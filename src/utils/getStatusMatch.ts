type StatusMatch = 'finished' | 'lived' | 'started';

export function getStatusMatchByDateHour(dateMatch: string): StatusMatch {
  const dateMatchTime = new Date(dateMatch).getTime()
  const now = Date.now();
  const diffDatesInMilisecunds = dateMatchTime - now;

  const MinutesIntervalOfLive = 1000 * 60 * 30;
  if(diffDatesInMilisecunds + MinutesIntervalOfLive < 0) {
    return 'finished';
  }
  if(diffDatesInMilisecunds < 0) {
    return 'lived';
  }
  
  return 'started';

}
