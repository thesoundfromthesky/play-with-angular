export interface DropdownItem {
  id: number;
  text: string;
  link: string[];
  active: string[];
  options: { exact: boolean };
}
