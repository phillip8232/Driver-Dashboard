import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoadingSpinner = () => {
  return (
    <div>
      <Dimmer active>
        <Loader content='Loading' />
      </Dimmer>
    </div>

  )
}

export default LoadingSpinner