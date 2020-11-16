import { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'
import styles from './Select.module.css'

const options = [
  {
    value: 'one',
    label: 'One',
  },
  {
    value: 'two',
    label: 'Two',
  },
]

Select.propTypes = {
  borderless: PropTypes.bool,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default function Select({ borderless = false, value, setValue, placeholder }) {
  const [menu, setMenu] = useState(false)

  return (
    <div className={styles.select}>
      <div className={styles.select_control} onClick={() => setMenu(!menu)}>
        <div className={styles.select_placeholder}>{value || placeholder}</div>
        <div className={styles.select_arrow_wrapper}>
          {menu ? (
            <Icon className={styles.select_arrow}>keyboard_arrow_down</Icon>
          ) : (
            <Icon className={styles.select_arrow}>keyboard_arrow_up</Icon>
          )}
        </div>
      </div>
      {menu && (
        <div className={styles.select_menu}>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => setValue(option.value)}
              className={styles.select_menu_option}
              aria-selected={option.value === value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
    // <Dropdown
    //   options={options}
    //   value={value}
    //   onChange={setValue}
    //   placeholder={placeholder}
    //   className={styles.select}
    //   controlClassName={styles.select_control}
    //   // arrowClosed={<span className="arrow-closed" />}
    //   // arrowOpen={<span className="arrow-open" />}
    // />
  )
}
