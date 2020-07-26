import React from 'react';
import { HRMServiceConsumer } from '../hrm-service-context';

const withHRMService = () => (Wrapped) => (props) => (
  <HRMServiceConsumer>
    {
                  (hrmService) => <Wrapped {...props} hrmService={hrmService} />
              }
  </HRMServiceConsumer>
);

export default withHRMService;
