export interface NavItemConfig {
  title: string;
  icon: React.ReactNode;
  path: string;
  children?: NavItemConfig[];
}
