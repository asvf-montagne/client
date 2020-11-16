import Input from '@components/atoms/Input'
import { fr } from 'date-fns/locale'
import PropTypes from 'prop-types'
import React from 'react'
import { DatePicker as DatePickerComponent } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

DatePicker.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
}

export default function DatePicker({ meta, input }) {
  return (
    <DatePickerComponent
      date={input.value || undefined}
      onDateChange={(date) => input.onChange(date)}
      locale={fr}
    >
      {({ inputProps, focused }) => {
        return (
          <Input
            {...inputProps}
            placeholder="jour/mois/année"
            date
            meta={meta}
            icon="calendar_today"
          />
        )
      }}
    </DatePickerComponent>
  )
}
