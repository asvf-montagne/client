import { forwardRef, useState } from 'react';
import Icon from '@material-ui/core/Icon';
import styles from './Input.module.css';

export default forwardRef(({
  textArea = false,
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
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
            <Icon style={{ fontSize: 24, margin: '2px 0 0 8px' }}>
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
              onChange={onChange}
              value={value}
              placeholder={placeholder}
            />
          ) || (
            <input
              ref={ref}
              type={type}
              className={styles.input__container__input}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={onChange}
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