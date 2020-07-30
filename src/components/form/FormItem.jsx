import React from 'react'

const FormItem = ({ children, validation }) => {
  return(
    <div className="form-item">
      {children}
      {validation && <div className="form-item__error">Заполните обязательное поле</div>}
    </div>
  )
}

export default FormItem