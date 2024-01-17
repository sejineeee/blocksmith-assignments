export interface Notice {
  id: string;
  title: string;
  content: string;
  customDate: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FormData {
  title: string;
  customDate: Date;
  content: string;
}
