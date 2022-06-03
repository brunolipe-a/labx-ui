import { ElementType } from 'react'

type NavItem = {
  text: string
  url: string
  icon: ElementType
  can?: {
    action: string
    subject: string
  }
}

export type NavGroupItems = {
  title?: string
  items: NavItem[]
}

export type LayoutConfig = {
  Logo: ElementType
  menu?: NavGroupItems[]
  menuFooter?: NavGroupItems[]
  title?: string
  titleSeparator?: string
  dashboardUrl: string
  loginUrl: string
}
