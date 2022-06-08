import { Logo } from '@labx-ui/admin'
import { LayoutConfig } from '@labx-ui/core'
import { BiCog, BiUser } from 'react-icons/bi'
import { FiPackage } from 'react-icons/fi'
import { RiDashboardLine } from 'react-icons/ri'

const layout: LayoutConfig = {
  Logo,
  title: 'Labx',
  titleSeparator: ' | ',
  dashboardUrl: '/dashboard',
  loginUrl: '/login',
  menu: [
    {
      items: [
        {
          text: 'Dashboard',
          url: '/dashboard',
          icon: RiDashboardLine,
        },
      ],
    },
    {
      title: 'Dados',
      items: [
        {
          text: 'Usuários',
          url: '/users',
          icon: BiUser,
        },
      ],
    },
  ],
  menuFooter: [
    {
      items: [
        {
          text: 'Configurações',
          url: '/settings',
          icon: BiCog,
        },
      ],
    },
  ],
}

export default layout
