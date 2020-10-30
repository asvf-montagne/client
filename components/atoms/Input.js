import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import styles from './Input.module.css';

const Input = forwardRef(({
  textArea = false,
  autocomplete = 'off',
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onKeyDown,
  icon,
  link,
  error,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false)

  return (
    <div className={styles.input} {...props}>
      <span className={styles.input__span}>
        <label className={styles.input__span__label}>
          {label}
        </label>
        {link && (
          <a className={styles.input__span__link} href={link.ref}>
            {link.title}
          </a>
        )}
      </span>

      <div className={`
        ${styles.input__container}
        ${
          error
            ? styles.input__containerError
            : (focused && styles.input__containerFocused)
        }
      `}>
        {icon && (
          <div className={styles.input__container__iconBox}>
            <Icon className={`
              ${styles.input__container__iconBox__icon}
              ${
                error
                  ? styles.input__container__iconBox__iconError
                  : (focused && styles.input__container__iconBox__iconFocused)
              }
            `}>
              {icon}
            </Icon>
          </div>
        )}
        {
          textArea && (
            <textarea
              ref={ref}
              className={styles.input__container__textarea}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(event) => onChange(event.target.value)}
              onKeyDown={onKeyDown}
              value={value}
              placeholder={placeholder}
            />
          ) || (
            <input
              ref={ref}
              type={type}
              autoComplete={autocomplete}
              className={styles.input__container__input}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(event) => onChange(event.target.value)}
              onKeyDown={onKeyDown}
              value={value}
              placeholder={placeholder}
            />
          )
        }
      </div>

      {error && (
        <a className={styles.input__errorMsg}>
          {error.message}
        </a>
      )}
    </div>
  );
})

Input.propTypes = {
  textArea: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password']),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  link: PropTypes.object,
  error: PropTypes.object
}

export default Input;