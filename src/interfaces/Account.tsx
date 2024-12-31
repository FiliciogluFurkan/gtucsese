export interface Account {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profilePicture: string;
  createdAt: Date | null;
  roles: string[];
}
