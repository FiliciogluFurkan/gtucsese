import { TimeSlot } from "../interfaces/TimeSlot";

 export const generateTimeSlots = (courtName: string): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    console.log(courtName);
    for (let hour = 0; hour < 24; hour++) {
      const startTime = `${hour.toString().padStart(2, '0')}:00`;
      const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`;

      const status: 'boş' | 'dolu' = Math.random() < 0.4 ? 'dolu' : 'boş';

      const slot: TimeSlot = {
        time: `${startTime} - ${endTime}`,
        status: status
      };

      if (status === 'dolu') {
        slot.user = {
          name: ['Ahmet', 'Mehmet', 'Ali', 'burak', 'kaan'][Math.floor(Math.random() * 5)],
          surname: ['Yılmaz', 'Kaya', 'Demir', 'Filicioglan', 'Şahin'][Math.floor(Math.random() * 5)],
          phone: `5${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`
        };
      }

      slots.push(slot);
    }

    return slots;
  };