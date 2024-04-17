import logo from '../assets/logo.png'

export interface Club {
  name: string;
  logo: string;
  shortName: string;
  stadium: string;
}

export const emptyClub: Club = {
  name: '',
  logo,
  shortName: '',
  stadium: '',
}