// Function makeFriendlyDates
// Convert a date range of two dates (provided in YYYY-MM-DD format)
// e.g. "2016-07-01" and "2016-07-04" would be "July 1st","4th" (in array)

function makeFriendlyDates(arr) {
  // Flags
  var showBeginYear = true;
  var showEndYear = true;
  var showEndMonth = true;
  var showEndDay = true;
  
  // Harvest date information
  var beginDate = arr[0];
  var endDate = arr[1];
  var beginComponents = beginDate.split("-");
  var endComponents = endDate.split("-");
  var beginYear = parseInt(beginComponents[0]);
  var beginMonth = parseInt(beginComponents[1]);
  var beginDay = parseInt(beginComponents[2]);
  var endYear = parseInt(endComponents[0]);
  var endMonth = parseInt(endComponents[1]);
  var endDay = parseInt(endComponents[2]);
  
  // Get current date
  var currentTimestamp = new Date().toString();
  var currentComponents = currentTimestamp.split(" ");
  var currentYear = parseInt(currentComponents[3]);
  
  var numberOfDays = 0;
  var beginDT = new Date(beginDate);
  var endDT = new Date(endDate);
  var beginDateString = "";
  var endDateString = "";
  var resultArray = [];
  
  // Get number of days in range
  numberOfDays = daysBetween(beginDT, endDT);
  
  // Figure out what fields will be displayed in result
  
  // Is the current year the beginning date's year?
  if (beginYear === currentYear){
    if (beginYear === endYear){
      showBeginYear = false;
      showEndYear = false;
      if (beginMonth === endMonth){
        showEndMonth = false;
        if (beginDay === endDay){
          showEndDay = false;
        }
      }
    } else {
      if (numberOfDays < 365){
        showBeginYear = false;
        showEndYear = false;
      }
    }
  } else {
    // Current year is *not* the beginning date's year
    if (beginYear === endYear){
      showEndYear = false;
      if (beginMonth === endMonth){
        showEndMonth = false;
        if (beginDay === endDay){
          showEndDay = false;
        }
      }
    } else {
      if (numberOfDays < 365){
        showEndYear = false;
      }
    }
  }
  
  // Assemble begin / end date strings
  beginDateString += monthAsWord(beginMonth);
  if (showEndMonth){
    endDateString += monthAsWord(endMonth);
  }
  
  beginDateString += dayAsWord(beginDay);
  if (showEndDay){
    endDateString += dayAsWord(endDay);
  }
  
  if (showBeginYear){
    beginDateString += ", " + beginYear;
  }
  
  if (showEndYear){
    endDateString += ", " + endYear;
  }
  
  // Push date(s) onto result array
  if (endDateString === ""){
    resultArray.push(beginDateString);
  } else {
    resultArray.push(beginDateString, endDateString);
  }
  
  // ...and done
  return resultArray;
}

function treatAsUTC(date) {
  var result = new Date(date);
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result;
}

function daysBetween(startDate, endDate) {
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

function monthAsWord(monthNum){
  switch(monthNum){
    case 1:
      return "January ";
    case 2:
      return "February ";
    case 3:
      return "March ";
    case 4:
      return "April ";
    case 5:
      return "May ";
    case 6:
      return "June ";
    case 7:
      return "July ";
    case 8:
      return "August ";
    case 9:
      return "September ";
    case 10:
      return "October ";
    case 11:
      return "November ";
    case 12:
      return "December ";
    default:
      return "";
  }
}

function dayAsWord(dayNum){
  var tempString = "" + dayNum;
  var lastPiece = tempString[tempString.length - 1];
  
  switch(lastPiece){
    case "1":
      if (tempString === "11"){
        return String(dayNum + "th");
      } else {
        return String(dayNum + "st");
      }
      
      break;
    case "2":
      if (tempString === "12"){
        return String(dayNum + "th");
      } else {
        return String(dayNum + "nd");
      }
      
      break;
    case "3":
      if (tempString === "13"){
        return String(dayNum + "th");
      } else {
        return String(dayNum + "rd");
      }
      
      break;
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      return String(dayNum + "th");
    default:
      return "";
  }
}

makeFriendlyDates(['2016-12-01', '2017-02-03']);

// ERRATA
//
// Array MUST be given to function
// Array MUST contain AT LEAST two elemnents (ideally, ONLY 2)
// Begin date MUST be first element of array
// End date MUST be second element of array
// ONLY FIRST TWO elements of array will be used
