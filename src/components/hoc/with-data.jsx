import React, { useEffect } from 'react';
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';

const withData = (getData) => (View) => (props) => {
  useEffect(() => {
    props[getData]()
  }, [])

  const { loading, error } = props;

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return <View {...props} />
}

export default withData;
