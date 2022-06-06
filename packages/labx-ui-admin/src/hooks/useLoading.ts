import React, { useEffect, useState } from 'react'

import Router from 'next/router'

import { useAuth } from '@labx-ui/core'

type HookProps = {
  redirectURL: string
}

export function useGuestLoading({ redirectURL }: HookProps) {
  const { isAuthLoading, isAuthenticated } = useAuth()

  const [shouldShowLoading, setShouldShowLoading] = useState(true)

  useEffect(() => {
    if (isAuthLoading) {
      return
    }

    if (isAuthenticated) {
      Router.push(redirectURL)
      return
    }

    setShouldShowLoading(false)
  }, [isAuthLoading, isAuthenticated, redirectURL])

  return shouldShowLoading
}

export function useAuthLoading({ redirectURL }: HookProps) {
  const { isAuthLoading, isAuthenticated } = useAuth()

  const [shouldShowLoading, setShouldShowLoading] = useState(true)

  useEffect(() => {
    if (isAuthLoading) {
      return
    }

    if (!isAuthenticated) {
      Router.push(redirectURL)
      return
    }

    setShouldShowLoading(false)
  }, [isAuthLoading, isAuthenticated, redirectURL])

  return shouldShowLoading
}
