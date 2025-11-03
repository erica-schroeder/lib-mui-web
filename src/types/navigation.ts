export interface NavItem {
  label: string
  to?: string
  submenu?: NavItem[]
  icon?: React.ReactNode
}