export interface Randevu {
    id: number;
    tarih: string;
    saat: string;
    kullaniciAdi: string;
    telefon: string;
    halaSaha: string;
    durum: 'bekleyen' | 'onaylandi';
  }