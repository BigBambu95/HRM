import React from 'react'
import DatePicker, { DatePickerProps } from 'react-date-picker'
import { CalendarIcon } from '@shared/components/icons'

const HRMDatePicker = (props: DatePickerProps) => {
	return (
		<DatePicker clearIcon={null} calendarIcon={<CalendarIcon />} {...props} />
	)
}

export default HRMDatePicker
