import React from 'react';
import { HRMServiceConsumer } from "../hrm-service-context";

const withHRMService = () => Wrapped => {
  return (props) => {
      return(
          <HRMServiceConsumer>
              {
                  (hrmService) => {
                      return <Wrapped {...props} hrmService={hrmService} />
                  }
              }
          </HRMServiceConsumer>
      )
  }
};

export default withHRMService;