// array storing the days of the week
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// array storing special days
const specialDays = [
  "Conference1234",
  "Conference567",
  "Conference1234567",
  "Minimumday",
  "Minimumday1234",
  "AssemblyPepRally",
  "Assembly",
  "Assembly1hr",
  "Caaspp",
];

// store the dates for specialDays
const specialDaysDates = {
  Conference1234: ["2023-10-02", "2023-10-04", "2024-03-20"],
  Conference567: ["2023-10-03", "2023-10-05", "2024-03-21"],
  Conference1234567: ["2023-10-06", "2024-03-22"],
  Minimumday: ["2023-08-10", "2023-10-31", "2023-12-20", "2024-06-05"],
  Minimumday1234: ["2024-05-31"],
  AssemblyPepRally: [],
  Assembly: ["2023-08-11", "2024-01-09"],
  Assembly1hr: ["2023-10-09"],
  Caaspp: ["2024-05-07", "2024-05-08"],
};

// Each period has a start time, end time, room number, and teacher
const period1 = {
  startTime: "8:00",
  endTime: "8:50",
  name: "1",
  room: "A1",
  teacher: "Mr. A",
};

const MTFSchedule = [
  {
    startTime: "8:15",
    endTime: "9:11",
    name: "1",
    room: "IMR",
    teacher: "Brown, Jeanette",
  },
  {
    startTime: "9:15",
    endTime: "10:00",
    name: "2",
    room: "109",
    teacher: "Laake, Sarah",
  },
  {
    startTime: "10:00",
    endTime: "10:10",
    name: "Break",
    room: "",
    teacher: "",
  },
  {
    startTime: "10:14",
    endTime: "10:59",
    name: "3",
    room: "IMR",
    teacher: "Olds, Ronald",
  },
  {
    startTime: "11:03",
    endTime: "11:48",
    name: "4",
    room: "GYM",
    teacher: "Adragna, Katherine",
  },
  {
    startTime: "11:48",
    endTime: "12:18",
    name: "Lunch",
    room: "",
    teacher: "",
  },
  {
    startTime: "12:22",
    endTime: "13:07",
    name: "5",
    room: "104",
    teacher: "Mihin, Tina",
  },
  {
    startTime: "13:11",
    endTime: "13:56",
    name: "6",
    room: "104",
    teacher: "Mihin, Tina",
  },
  {
    startTime: "14:00",
    endTime: "14:45",
    name: "7",
    room: "104",
    teacher: "Mihin, Tina",
  },
];

const scheduleForDay = {
  Monday: MTFSchedule,
  Tuesday: MTFSchedule,
  Friday: MTFSchedule,
  Sunday: [],
  Saturday: [],
  Wednesday: [
    {
      startTime: "9:34",
      endTime: "10:49",
      name: "2",
      room: "109",
      teacher: "Laake, Sarah",
    },
    {
      startTime: "10:49",
      endTime: "11:00",
      name: "Break",
      room: "",
      teacher: "",
    },
    {
      startTime: "11:04",
      endTime: "11:37",
      name: "Tutorial",
      room: "",
      teacher: "",
    },
    {
      startTime: "11:37",
      endTime: "12:07",
      name: "Lunch",
      room: "",
      teacher: "",
    },
    {
      startTime: "12:11",
      endTime: "13:26",
      name: "4",
      room: "GYM",
      teacher: "Adragna, Katherine",
    },
    {
      startTime: "13:30",
      endTime: "14:45",
      name: "6",
      room: "104",
      teacher: "Mihin, Tina",
    },
  ],
  Thursday: [
    {
      startTime: "8:15",
      endTime: "9:30",
      name: "1",
      room: "IMR",
      teacher: "Brown, Jeanette",
    },
    {
      startTime: "9:34",
      endTime: "10:49",
      name: "3",
      room: "203",
      teacher: "Olds, Ronald",
    },
    {
      startTime: "10:49",
      endTime: "11:00",
      name: "Break",
      room: "",
      teacher: "",
    },
    {
      startTime: "11:04",
      endTime: "11:37",
      name: "Tutorial",
      room: "",
      teacher: "",
    },
    {
      startTime: "11:37",
      endTime: "12:07",
      name: "Lunch",
      room: "",
      teacher: "",
    },
    {
      startTime: "12:11",
      endTime: "13:26",
      name: "5",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "13:30",
      endTime: "14:45",
      name: "7",
      room: "104",
      teacher: "Mihin, Tina",
    },
  ],
  Conference1234: [
    {
      startTime: "8:15",
      endTime: "8:59",
      name: "1",
      room: "IMR",
      teacher: "Brown, Jeanette",
    },
    {
      startTime: "9:03",
      endTime: "9:47",
      name: "2",
      room: "109",
      teacher: "Laake, Sarah",
    },
    {
      startTime: "9:51",
      endTime: "10:35",
      name: "3",
      room: "203",
      teacher: "Olds, Ronald",
    },
    {
      startTime: "10:35",
      endTime: "10:52",
      name: "Break",
      room: "",
      teacher: "",
    },
    {
      startTime: "10:56",
      endTime: "11:40",
      name: "4",
      room: "GYM",
      teacher: "Adragna, Katherine",
    },
  ],
  Conference567: [
    {
      startTime: "8:15",
      endTime: "8:59",
      name: "5",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "9:03",
      endTime: "9:47",
      name: "6",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "9:51",
      endTime: "10:35",
      name: "Tutorial",
      room: "",
      teacher: "",
    },
    {
      startTime: "10:35",
      endTime: "10:52",
      name: "Break",
      room: "",
      teacher: "",
    },
    {
      startTime: "10:56",
      endTime: "11:40",
      name: "7",
      room: "104",
      teacher: "Mihin, Tina",
    },
  ],
  Conference1234567: [
    {
      startTime: "8:15",
      endTime: "8:41",
      name: "1",
      room: "IMR",
      teacher: "Brown, Jeanette",
    },
    {
      startTime: "8:45",
      endTime: "9:08",
      name: "2",
      room: "109",
      teacher: "Laake, Sarah",
    },
    {
      startTime: "9:12",
      endTime: "9:35",
      name: "3",
      room: "203",
      teacher: "Olds, Ronald",
    },
    {
      startTime: "9:39",
      endTime: "10:02",
      name: "4",
      room: "GYM",
      teacher: "Adragna, Katherine",
    },
    {
      startTime: "10:02",
      endTime: "10:19",
      name: "Break",
      room: "",
      teacher: "",
    },
    {
      startTime: "10:23",
      endTime: "10:46",
      name: "5",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "10:50",
      endTime: "11:13",
      name: "6",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "11:17",
      endTime: "11:40",
      name: "7",
      room: "104",
      teacher: "Mihin, Tina",
    },
  ],
  Minimumday: [
    {
      startTime: "8:15",
      endTime: "8:40",
      name: "1",
      room: "IMR",
      teacher: "Brown, Jeanette",
    },
    {
      startTime: "8:44",
      endTime: "9:09",
      name: "2",
      room: "109",
      teacher: "Laake, Sarah",
    },
    {
      startTime: "9:13",
      endTime: "9:38",
      name: "3",
      room: "203",
      teacher: "Olds, Ronald",
    },
    {
      startTime: "9:42",
      endTime: "10:07",
      name: "4",
      room: "GYM",
      teacher: "Adragna, Katherine",
    },
    {
      startTime: "10:07",
      endTime: "10:17",
      name: "Break",
      room: "",
      teacher: "",
    },
    {
      startTime: "10:21",
      endTime: "10:46",
      name: "5",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "10:50",
      endTime: "11:15",
      name: "6",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "11:19",
      endTime: "11:44",
      name: "7",
      room: "104",
      teacher: "Mihin, Tina",
    },
  ],
  Minimumday1234: [
    {
      startTime: "8:15",
      endTime: "8:59",
      name: "1",
      room: "IMR",
      teacher: "Brown, Jeanette",
    },
    {
      startTime: "9:03",
      endTime: "9:47",
      name: "2",
      room: "109",
      teacher: "Laake, Sarah",
    },
    {
      startTime: "9:51",
      endTime: "10:35",
      name: "3",
      room: "203",
      teacher: "Olds, Ronald",
    },
    {
      startTime: "10:35",
      endTime: "10:52",
      name: "Break",
      room: "",
      teacher: "",
    },
    {
      startTime: "10:56",
      endTime: "11:40",
      name: "4",
      room: "GYM",
      teacher: "Adragna, Katherine",
    },
  ],
  AssemblyPepRally: [
    {
      startTime: "8:15",
      endTime: "9:02",
      name: "1",
      room: "IMR",
      teacher: "Brown, Jeanette",
    },
    {
      startTime: "9:06",
      endTime: "9:46",
      name: "2",
      room: "109",
      teacher: "Laake, Sarah",
    },
    {
      startTime: "9:46",
      endTime: "9:56",
      name: "Break",
      room: "",
      teacher: "",
    },
    {
      startTime: "10:00",
      endTime: "10:40",
      name: "3",
      room: "IMR",
      teacher: "Olds, Ronald",
    },
    {
      startTime: "10:44",
      endTime: "11:24",
      name: "4",
      room: "GYM",
      teacher: "Adragna, Katherine",
    },
    {
      startTime: "11:24",
      endTime: "11:54",
      name: "Lunch",
      room: "",
      teacher: "",
    },
    {
      startTime: "11:58",
      endTime: "12:38",
      name: "5",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "12:42",
      endTime: "13:22",
      name: "6",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "13:30",
      endTime: "14:06",
      name: "7",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "14:10",
      endTime: "14:45",
      name: "Assembly",
      room: "",
      teacher: "",
    },
  ],
  Assembly: [
    {
      startTime: "8:15",
      endTime: "8:58",
      name: "1",
      room: "IMR",
      teacher: "Brown, Jeanette",
    },
    {
      startTime: "9:02",
      endTime: "9:45",
      name: "2",
      room: "109",
      teacher: "Laake, Sarah",
    },
    {
      startTime: "9:45",
      endTime: "9:55",
      name: "Break",
      room: "",
      teacher: "",
    },
    {
      startTime: "9:59",
      endTime: "10:42",
      name: "3",
      room: "IMR",
      teacher: "Olds, Ronald",
    },
    {
      startTime: "10:46",
      endTime: "11:29",
      name: "4",
      room: "GYM",
      teacher: "Adragna, Katherine",
    },
    {
      startTime: "11:29",
      endTime: "11:49",
      name: "Assembly",
      room: "",
      teacher: "",
    },
    {
      startTime: "11:49",
      endTime: "12:19",
      name: "Lunch",
      room: "",
      teacher: "",
    },
    {
      startTime: "12:23",
      endTime: "13:11",
      name: "5",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "13:15",
      endTime: "13:58",
      name: "6",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "14:02",
      endTime: "14:45",
      name: "7",
      room: "104",
      teacher: "Mihin, Tina",
    },
  ],
  Assembly1hr: [
    {
      startTime: "8:15",
      endTime: "8:55",
      name: "1",
      room: "IMR",
      teacher: "Brown, Jeanette",
    },
    {
      startTime: "8:59",
      endTime: "9:36",
      name: "2",
      room: "109",
      teacher: "Laake, Sarah",
    },
    {
      startTime: "9:36",
      endTime: "9:46",
      name: "Break",
      room: "",
      teacher: "",
    },
    {
      startTime: "9:50",
      endTime: "10:50",
      name: "Assembly",
      room: "",
      teacher: "",
    },
    {
      startTime: "10:54",
      endTime: "11:31",
      name: "3",
      room: "IMR",
      teacher: "Olds, Ronald",
    },
    {
      startTime: "11:35",
      endTime: "12:12",
      name: "4",
      room: "GYM",
      teacher: "Adragna, Katherine",
    },
    {
      startTime: "12:12",
      endTime: "12:42",
      name: "Lunch",
      room: "",
      teacher: "",
    },
    {
      startTime: "12:46",
      endTime: "13:23",
      name: "5",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "13:27",
      endTime: "14:04",
      name: "6",
      room: "104",
      teacher: "Mihin, Tina",
    },
    {
      startTime: "14:08",
      endTime: "14:45",
      name: "7",
      room: "104",
      teacher: "Mihin, Tina",
    },
  ],
  Caaspp: [
    {
      startTime: "8:15",
      endTime: "9:45",
      name: "Testing",
      room: "",
      teacher: "",
    },
    {
      startTime: "9:45",
      endTime: "9:56",
      name: "Break",
      room: "",
      teacher: "",
    },
    {
      startTime: "10:00",
      endTime: "11:30",
      name: "Testing",
      room: "",
      teacher: "",
    },
  ],
};

//function to check if the input date is a special day and return the special day
function checkSpecialDay(date) {
  for (let i = 0; i < specialDays.length; i++) {
    if (specialDaysDates[specialDays[i]].includes(date)) {
      return specialDays[i];
    }
  }
  return false;
}

//function to return the day of the week given the date
function getDay(date) {
  let day = new Date(date).getUTCDay();
  return days[day];
}

//function to return the schedule for the day given the date
function getSchedule(date) {
  let day = getDay(date);
  let specialDay = checkSpecialDay(
    new Date(date).toISOString().substring(0, 10)
  );
  if (specialDay) {
    return scheduleForDay[specialDay];
  }
  return scheduleForDay[day];
}

//function to generate table for the schedule with thead and tbody and rows
function generateTable(date) {
  let schedule = getSchedule(date);
  let table = document.getElementById("schedule");
  // empty the table
  table.innerHTML = "";
  let tableHead = document.createElement("thead");
  let tableBody = document.createElement("tbody");
  tableBody.id = "scheduleBody";
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  let row = document.createElement("tr");
  let period = document.createElement("th");
  let startTime = document.createElement("th");
  let endTime = document.createElement("th");
  let room = document.createElement("th");
  let teacher = document.createElement("th");
  period.innerHTML = "Period";
  startTime.innerHTML = "Start Time";
  endTime.innerHTML = "End Time";
  room.innerHTML = "Room";
  teacher.innerHTML = "Teacher";
  row.appendChild(period);
  row.appendChild(startTime);
  row.appendChild(endTime);
  row.appendChild(room);
  row.appendChild(teacher);
  tableHead.appendChild(row);
  for (let i = 0; i < schedule.length; i++) {
    let row = document.createElement("tr");
    let period = document.createElement("td");
    let startTime = document.createElement("td");
    let endTime = document.createElement("td");
    let room = document.createElement("td");
    let teacher = document.createElement("td");
    period.innerHTML = schedule[i].name;
    if (schedule[i].name === "Break") {
      row.className = "break";
    } else if (schedule[i].name === "Lunch") {
      row.className = "lunch";
    }
    startTime.innerHTML = schedule[i].startTime;
    endTime.innerHTML = schedule[i].endTime;
    room.innerHTML = schedule[i].room;
    teacher.innerHTML = schedule[i].teacher;
    row.appendChild(period);
    row.appendChild(startTime);
    row.appendChild(endTime);
    row.appendChild(room);
    row.appendChild(teacher);
    tableBody.appendChild(row);
  }
}
