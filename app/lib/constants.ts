export const APP_CONFIG = {
  APPLICATION_NAME: 'ShreeRadheyIndustries',
  DATABASE_NAME: 'sri_db'
} as const;

export const COMPANY_INFO = {
  name: 'SHREE RADHEY INDUSTRIES',
  tagline: 'Engineering Excellence',
  office: {
    address: 'MALI, NAGORION KA BASS, SHIV TEMPLE',
    city: 'JODHPUR',
    pincode: '342001',
    state: 'RAJASTHAN',
    country: 'INDIA'
  },
  factory: {
    address: 'KHASRA NO. 155/1, PLOT NO. 6-B, RAM NAGAR SALAWAS ROAD, SANGRIYA',
    city: 'JODHPUR',
    pincode: '342013',
    state: 'RAJASTHAN',
    country: 'INDIA'
  },
  contact: {
    mobile: ['+91 9983813366', '+91 9950329353'],
    email: 'shreeradheyindustriesjodhpur@gmail.com',
    website: 'www.shreeradheyindustriesjodhpur.com',
    moksh: '+91 8445403317'
  }
} as const;