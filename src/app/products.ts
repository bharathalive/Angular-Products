export interface Product {
  id: string;
  name: string;
  Title: string;
  description: string;
  color: string;
}

export const products: Product[] = [
  {
    id: 'technical',
    name: 'Terminal Instructables',
    Title: 'Technical',
    color: 'purpleBG',
    description: 'A large phone with one of the best screens'
  },
  {
    id: 'technical',
    name: 'Installation Guides',
    Title: 'Technical',
    color: 'purpleBG',
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 'hr',
    name: 'carrier Opportunities',
    Title: 'Human Resources',
    color: 'greenBG',
    description: ''
  },
  {
    id: 'finance',
    name: 'customer OnBoarding',
    Title: 'Financial',
    color: 'pinkBG',
    description: ''
  },
  {
    id: 'marketing',
    name: 'Outlet Branding',
    Title: 'Marketing',
    color: 'blueBG',
    description: ''
  },
  {
    id: 'finance',
    name: 'Accounting Procedures',
    Title: 'Financial',
    color: 'pinkBG',
    description: ''
  },
  {
    id: 'hr',
    name: 'Training',
    Title: 'Human Resources',
    color: 'greenBG',
    description: ''
  },
  {
    id: 'marketing',
    name: 'Printing Guidance',
    Title: 'Marketing',
    color: 'blueBG',
    description: ''
  },
  {
    id: 'technical',
    name: 'Technical Support',
    Title: 'Technical',
    color: 'purpleBG',
    description: ''
  }
];
