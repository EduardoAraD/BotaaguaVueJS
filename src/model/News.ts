interface DescriptionNews {
  type: 'paragraph' | 'img' | 'heading' | 'carousel';
  value: String[];
}

export interface News {
  id: string;
  idMatch?: string;
  image: string;
  titlePageLink: string;
  title: string;
  subtitle: string;
  publicationDate: string;
  descriptions: DescriptionNews[];
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
