import { TimeSlot } from "@/interfaces/TimeSlot";

// TODO: delete this mfer
export const generateTimeSlots = (courtName: string): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  console.log(courtName);
  for (let hour = 0; hour < 24; hour++) {
    const startTime = `${hour.toString().padStart(2, "0")}:00`;
    const endTime = `${(hour + 1).toString().padStart(2, "0")}:00`;

    const status: "boş" | "dolu" = Math.random() < 0.4 ? "dolu" : "boş";

    const slot: TimeSlot = {
      time: `${startTime} - ${endTime}`,
      status: status,
    };

    if (status === "dolu") {
      slot.user = {
        name: ["Ahmet", "Mehmet", "Ali", "burak", "kaan"][
          Math.floor(Math.random() * 5)
        ],
        surname: ["Yılmaz", "Kaya", "Demir", "Filicioglan", "Şahin"][
          Math.floor(Math.random() * 5)
        ],
        phone: `5${Math.floor(Math.random() * 1000000000)
          .toString()
          .padStart(9, "0")}`,
      };
    }

    slots.push(slot);
  }

  return slots;
};

export const getFormattedDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if day is single digit
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() returns 0-based month (January is 0)
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export const prettyHour = (hour: number) => {
  if (hour < 10) {
    return "0" + hour + ":" + "00";
  } else {
    return hour + ":" + "00";
  }
};

export const formatInstantAsDate = (isoString: string): string => {
  const date = new Date(isoString);

  // Array of month names in Turkish
  const turkishMonths = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  // Get the day, month index, and year
  const day = date.getDate();
  const month = turkishMonths[date.getMonth()]; // Month is 0-based
  const year = date.getFullYear();

  // Format the date as "12 Mayıs 2024"
  return `${day} ${month} ${year}`;
};

export const getDayString = (day: number): string => {
  if (day === -1) {
    return "Cumartesi";
  } else if (day === 7) {
    return "Pazar";
  }

  switch (day) {
    case 0:
      return "Pazar";
    case 1:
      return "Pazartesi";
    case 2:
      return "Salı";
    case 3:
      return "Çarşamba";
    case 4:
      return "Perşembe";
    case 5:
      return "Cuma";
    case 6:
      return "Cumartesi";
    default:
      return "Unknown";
  }
};

export const getMonthString = (month: number): string => {
  if (month === -1) {
    return "Aralık";
  } else if (month === 13) {
    return "Ocak";
  }

  switch (month) {
    case 0:
      return "Ocak";
    case 1:
      return "Şubat";
    case 2:
      return "Mart";
    case 3:
      return "Nisan";
    case 4:
      return "Mayıs";
    case 5:
      return "Haziran";
    case 6:
      return "Temmuz";
    case 7:
      return "Ağustos";
    case 8:
      return "Eylül";
    case 9:
      return "Ekim";
    case 10:
      return "Kasım";
    case 11:
      return "Aralık";
    default:
      return "Unknown";
  }
};
