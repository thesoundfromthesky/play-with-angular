export interface NavItem {
  id: number;
  text: string;
  link: string[];
  active: string[];
  options: { exact: boolean };
}

export interface Dropdown {
  id: number;
  toggle: string;
  menu: NavItem[];
}
