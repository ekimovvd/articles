export interface Article {
  id: number;
  userId: number;
  body: string;
  title: string;
  isViewed?: boolean;
}

export interface Author {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: AuthorAddress;
  company: AuthorCompany;
}

export interface AuthorAddress {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface AuthorCompany {
  bs: string;
  catchPhrase: string;
  name: string;
}
