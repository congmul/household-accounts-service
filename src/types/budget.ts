export interface IBudget {
  userId: string;
  date: Date; // 2024-07-01T00:00:00 (Always first day of the month)
  amount: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
