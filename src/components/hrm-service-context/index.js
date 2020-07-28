import React from 'react'

const HRMServiceContext = React.createContext()

const { Provider, Consumer } = HRMServiceContext

export {
  HRMServiceContext,
  Provider as HRMServiceProvider,
  Consumer as HRMServiceConsumer,
};
