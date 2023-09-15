import {RRule} from 'rrule';

const computeWeekly = ({ interval, days }) => ({
  freq: RRule.WEEKLY,
  interval,
  byweekday: Object.values(days)
    .reduce((activeDays:number[], isDayActive:boolean, dayIndex:number) => {
      if (isDayActive) {
        activeDays.push(dayIndex);
      }
      return activeDays;
    }, []),
});
export default computeWeekly;
