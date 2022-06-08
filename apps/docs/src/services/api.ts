import axios from 'axios'

import { parseCookies } from 'nookies'

import { auth } from './auth'

const cookies = parseCookies()

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  headers: {
    'app-id': `62a0d574e92add06a45536f7`,
  },
})
