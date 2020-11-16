import { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'
import styles from './Select.module.css'

Select.propTypes = {
  borderless: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default function Select({
  borderless = false,
  options,
  value,
  setValue,
  placeholder,
}) {
  const [menu, setMenu] = useState(false)

  function handleSelectOption(option) {
    setValue(option)
    setMenu(false)
  }

  return (
    <div className={styles.select}>
      <div
        className={`${styles.select_control} ${
          borderless ? styles.select_control_borderless : ''
        }`}
        onClick={() => setMenu(!menu)}
      >
        <div
          className={styles.select_placeholder}
          aria-selected={!!value.label}
        >
          {!borderless && (
            <Icon className={styles.select_placeholder_icon}>inbox</Icon>
          )}
          {value.label || placeholder}
        </div>
        {menu ? (
          <Icon className={styles.select_arrow}>keyboard_arrow_down</Icon>
        ) : (
          <Icon className={styles.select_arrow}>keyboard_arrow_up</Icon>
        )}
      </div>
      {menu && (
        <div className={styles.select_menu}>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelectOption(option)}
              className={styles.select_menu_option}
              aria-selected={option.value === value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
