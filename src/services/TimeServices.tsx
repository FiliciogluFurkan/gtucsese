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

export const getFormattedDate = (): string => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0"); // Add leading zero if day is single digit
  const month = String(today.getMonth() + 1).padStart(2, "0"); // getMonth() returns 0-based month (January is 0)
  const year = today.getFullYear();

  return `${day}-${month}-${year}`;
};

export const prettyHour = (hour: number) => {
  if (hour < 10) {
    return "0" + hour + ":" + "00";
  } else {
    return hour + ":" + "00";
  }
};
