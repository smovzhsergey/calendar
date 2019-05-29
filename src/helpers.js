import moment from 'moment';

const momentObj = moment();
const currentMonthIndex = momentObj.month();
const currentYear = momentObj.year();

const getMonthInfo = ( year = currentYear, month = currentMonthIndex ) => ({
    firstMonthDayInWeek: momentObj.year(year).month(month).startOf('month').format('d') - 1,
    daysInCurrentMonth: momentObj.year(year).month(month).daysInMonth(),
})


const getMonthName = index => moment.months()[index];

const getWeekDays = (() => {
    const week = moment.weekdaysShort();
    const day = week.splice(0,1)

    return [...week, ...day];
})();

export { currentMonthIndex, currentYear, getMonthInfo, getMonthName, getWeekDays };