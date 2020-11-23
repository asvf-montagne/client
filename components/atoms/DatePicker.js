import Input from '@components/atoms/Input'
import InputLabel from '@components/atoms/InputLabel'
import { fr } from 'date-fns/locale'
import PropTypes from 'prop-types'
import React from 'react'
import { DatePicker as DatePickerComponent } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

DatePicker.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  label: PropTypes.string,
}

export default function DatePicker({ meta, input, label }) {
  return (
    <div>
      {label && <InputLabel label={label} />}
      <DatePickerComponent
        date={input.value || undefined}
        onDateChange={(date) => input.onChange(date)}
        locale={fr}
        format="dd / MM / yyyy"
      >
        {({ inputProps, focused }) => {
          return (
            <Input
              {...inputProps}
              placeholder="jour / mois / année"
              date
              meta={meta}
              icon="calendar_today"
            />
          )
        }}
      </DatePickerComponent>
    </div>
  )
}
