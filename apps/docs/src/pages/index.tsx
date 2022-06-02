import { Button } from '@labx-ui/core'
import { useIsomorphicLayoutEffect } from '@labx-ui/admin'

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log('labx-ui docs page')
  }, [])

  return (
    <div>
      <h1>labx-ui Documentation</h1>
      <Button>Click me</Button>
    </div>
  )
}
