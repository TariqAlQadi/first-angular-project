import { Article } from './article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    name: 'Article 1',
    price: 50,
    description: 'super rare!',
    imgSrc: '/assets/img/1',
    // TO-DO
    // rating: [],
    // comments: [],
    // ...
  },
  {
    id: 2,
    name: 'Article 2',
    price: 15,
    description: 'smooth!',
    imgSrc: '/assets/img/2',
  },
  {
    id: 3,
    name: 'Article 3',
    price: 53,
    description: 'only 50 ever made!!',
    imgSrc: '/assets/img/3',
  },
  {
    id: 4,
    name: 'Article 4',
    price: 42,
    description: 'Top product!!',
    imgSrc: '/assets/img/4',
    rating: [],
    comments: [],
  },
];
