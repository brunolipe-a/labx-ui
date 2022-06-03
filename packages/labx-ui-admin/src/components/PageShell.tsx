import React from 'react'

import Head from 'next/head'

import { useLayout } from '@labx-ui/core'

interface PageShellProps {
  children: React.ReactNode
  Layout?: React.ElementType
  pageTitle?: string
}

const Noop = ({ children }: { children: React.ReactNode }) => <>{children}</>

export function PageShell({ children }: PageShellProps) {
  const { title } = useLayout()

  const pageTitle = (children as any).type?.pageTitle as string | undefined
  const Layout = ((children as any).type?.Layout || Noop) as React.ElementType

  return (
    <>
      <Head>
        <title>
          {title} {pageTitle ? `| ${pageTitle}` : ''}
        </title>
      </Head>
      <Layout pageTitle={pageTitle}>{children}</Layout>
    </>
  )
}
