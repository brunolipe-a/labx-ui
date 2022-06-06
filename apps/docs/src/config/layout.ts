import { Logo } from '@labx-ui/admin'
import { LayoutConfig } from '@labx-ui/core'
import { BiBuilding, BiCog } from 'react-icons/bi'
import {
  FiDownloadCloud,
  FiGift,
  FiPackage,
  FiTag,
  FiUsers,
} from 'react-icons/fi'
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
      title: 'Conteúdo',
      items: [
        {
          text: 'Comércios',
          url: '/businesses',
          icon: FiPackage,
        },
        {
          text: 'Condomínios',
          url: '/condominiums',
          icon: BiBuilding,
          can: { action: 'viewAny', subject: 'condominiums' },
        },
        {
          text: 'Categorias',
          url: '/categories',
          icon: FiTag,
          can: { action: 'viewAny', subject: 'categories' },
        },
        {
          text: 'Cupons',
          url: '/coupons',
          icon: FiGift,
        },
      ],
    },
    {
      title: 'Controle',
      items: [
        {
          text: 'Usuários',
          url: '/users',
          icon: FiUsers,
        },
        {
          text: 'Solicitações de Acesso',
          url: '/requisitions',
          icon: FiDownloadCloud,
          can: { action: 'viewAny', subject: 'users' },
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
