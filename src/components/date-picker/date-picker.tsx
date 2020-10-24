import React from 'react'
import DatePicker from 'react-date-picker'
import { CalendarIcon } from 'svg'

const HRMDatePicker = (props) => {
	return (
		<DatePicker clearIcon={null} calendarIcon={<CalendarIcon />} {...props} />
	)
}

export default HRMDatePicker
