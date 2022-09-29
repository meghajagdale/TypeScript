export interface geoType {
  lat: string;
  lng: string;
}

export interface AddressType {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: geoType;
}
export interface companyType {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface HomeType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: companyType;
}

export interface HomeStateType {
  isLoading: boolean;
  userItems: Array<HomeType>;
}

export interface HomeContentType {
  item: HomeType;
  navigation: any;
}
