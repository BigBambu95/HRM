import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ItemList = (props) => {
  const { View, items, classNames } = props;

  return (
    <div className={classNames}>
      {
                items.map((item) => (
                  <Fragment key={item.id}>
                    <View item={item} {...props} />
                  </Fragment>
                ))
            }
    </div>
  );
};

ItemList.defaultProps = {
  items: [],
  classNames: '',
};

ItemList.propTypes = {
  View: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  classNames: PropTypes.string,
};

export default ItemList;
