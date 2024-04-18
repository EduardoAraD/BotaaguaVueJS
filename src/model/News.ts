export interface News {
  id: string;
  image: string;
  titlePageLink: string;
  title: string;
  subtitle: string;
  publicationDate: string;
  descriptions: {
    type: 'paragraph' | 'img' | 'heading',
    value: string;
  }[];
}

export const emptyNews: News = {
  id: '-',
  image: '',
  titlePageLink: '',
  title: '',
  subtitle: '',
  publicationDate: '2024-01-01 00:00',
  descriptions: [],
}
