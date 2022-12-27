export const apiBaseLocation = 'https://www.masongup.com/BookApi/';

export interface apiBook {
  id: number;
  title: string,
  description?: string;
  author_id?: number;
  authors: {
    id: number;
    name: string;
  };
}
