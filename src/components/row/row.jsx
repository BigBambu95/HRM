import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Row = ({ 
  children, 
  gutter = [0, 0], 
  justify = 'center', 
  align = 'top'
}) => {

  const className = classnames(
    'flex', 
    `justify-${justify}`,
    `align-${align}`
  )

  const styles = {
    marginBottom: `${gutter[1]}px`
  }

  return(
    <div className={className} style={styles}>
      {children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node,
  justify: PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between']),
  align: PropTypes.oneOf(['top', 'center' , 'bottom']),
  gutter: PropTypes.array
}

export default Row