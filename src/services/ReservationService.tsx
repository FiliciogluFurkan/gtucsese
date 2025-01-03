export const getReservationStatusString = (status: string) => {
  switch (status) {
    case "PENDING":
      return "Onay Bekliyor";
    case "APPROVED":
      return "Onaylandı";
    case "COMPLETED":
      return "Tamamlandı";
    case "REJECTED":
      return "Reddedildi";
    case "CANCELLED":
      return "İptal Edildi";
    default:
      return "";
  }
};
