import { useEffect, useState } from 'react'
import NepaliDate from "nepali-date-converter"

const nepaliMonths = [
  'बैशाख',
  'जेठ',
  'असार',
  'साउन',
  'भदौ',
  'असोज',
  'कात्तिक',
  'मंसिर',
  'पौष',
  'माघ',
  'फागुन',
  'चैत'
];

const nepaliNumerals = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

const convertToNepaliNumerals = (number) => {
  return number.toString().split('').map(digit => nepaliNumerals[parseInt(digit)]).join('');
};

export const useDateTime = (options = {}) => {
  const {
    updateInterval = 1000,
    timeZone = "Asia/Kathmandu",
    includeTime = true,
    includeDate = true,
    dateStyle = "full",
    timeStyle = "medium"
  } = options;

  const [dateTime, setDateTime] = useState({
    englishDate: "",
    englishTime: "",
    englishDateTime: "",
    nepaliDate: "",
    nepaliTime: "",
    nepaliDateTime: "",
    bsDate: "",
    bsYear: "",
    bsMonth: "",
    bsDay: "",
    rawDate: null
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();

      let englishDateStr = "";
      let englishTimeStr = "";
      let englishDateTimeStr = "";
      let nepaliDateStr = "";
      let nepaliTimeStr = "";
      let nepaliDateTimeStr = "";

      if (includeDate) {
        englishDateStr = new Intl.DateTimeFormat("en-US", {
          timeZone,
          dateStyle
        }).format(now);

        nepaliDateStr = new Intl.DateTimeFormat("ne-NP", {
          timeZone,
          dateStyle
        }).format(now);
      }

      if (includeTime) {
        englishTimeStr = new Intl.DateTimeFormat("en-US", {
          timeZone,
          timeStyle
        }).format(now);

        nepaliTimeStr = new Intl.DateTimeFormat("ne-NP", {
          timeZone,
          timeStyle
        }).format(now);
      }

      if (includeDate && includeTime) {
        englishDateTimeStr = new Intl.DateTimeFormat("en-US", {
          timeZone,
          dateStyle,
          timeStyle
        }).format(now);

        nepaliDateTimeStr = new Intl.DateTimeFormat("ne-NP", {
          timeZone,
          dateStyle,
          timeStyle
        }).format(now);
      }

      const nepaliDateObj = new NepaliDate(now);
      const year = nepaliDateObj.getYear();
      const month = nepaliDateObj.getMonth();
      const day = nepaliDateObj.getDate();
      const nepaliMonthName = nepaliMonths[month];
      const nepaliYear = convertToNepaliNumerals(year);
      const nepaliDay = convertToNepaliNumerals(day);
      const bsDate = `${nepaliYear} ${nepaliMonthName} ${nepaliDay}`;

      setDateTime({
        englishDate: englishDateStr,
        englishTime: englishTimeStr,
        englishDateTime: englishDateTimeStr || englishDateStr || englishTimeStr,
        nepaliDate: nepaliDateStr,
        nepaliTime: nepaliTimeStr,
        nepaliDateTime: nepaliDateTimeStr || nepaliDateStr || nepaliTimeStr,
        bsDate,
        bsYear: nepaliYear,
        bsMonth: nepaliMonthName,
        bsDay: nepaliDay,
        rawDate: now
      });
    };

    update();
    const interval = setInterval(update, updateInterval);
    return () => clearInterval(interval);
  }, [updateInterval, timeZone, includeTime, includeDate, dateStyle, timeStyle]);

  return dateTime;
};

