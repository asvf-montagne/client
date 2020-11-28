import InputLabel from '@components/atoms/InputLabel'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Quote from '@editorjs/quote'
import Table from '@editorjs/table'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import styles from './EditorInput.module.css'

EditorInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

export default function EditorInput({ input, meta, label, placeholder = '' }) {
  const prevRef = useRef('[]')
  const editorRef = useRef(null)
  const [focus, setFocus] = useState(false)
  const [initialized, setInitialized] = useState(false)

  function getValue() {
    if (input.value === undefined || input.value === '') return undefined
    if (typeof input.value === 'object') return input.value
    if (typeof input.value === 'string') return JSON.parse(input.value)
    return undefined
  }

  const setFocusOn = () => {
    setFocus(true)
    input.onFocus()
  }
  const setFocusOff = () => {
    setFocus(false)
    input.onBlur()
  }

  useEffect(() => {
    if (editorRef) {
      const ref = editorRef

      ref.current.addEventListener('focusin', setFocusOn)
      ref.current.addEventListener('focusout', setFocusOff)
      return () => {
        if (ref.current !== null) {
          ref.current.removeEventListener('focusin', setFocusOn)
          ref.current.removeEventListener('focusout', setFocusOff)
        }
      }
    }
  }, [editorRef])

  useEffect(() => {
    if (!initialized && editorRef.current) {
      const editor = new EditorJS({
        tools: {
          header: {
            class: Header,
            config: {
              level: [2],
            },
            inlineToolbar: ['link'],
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
          },
          table: {
            class: Table,
            inlineToolbar: true,
          },
        },
        placeholder: placeholder,
        minHeight: 32,
        holder: editorRef.current,
        data: getValue(),
        async onChange(api) {
          const saved = await api.saver.save()
          delete saved.time

          if (prevRef.current === JSON.stringify(saved.blocks)) {
            return
          }

          prevRef.current = JSON.stringify(saved.blocks)
          input.onChange(saved)
        },
      })

      setInitialized(true)
      return editor.destroy
    }
    // eslint-disable-next-line
  }, [editorRef, initialized])

  return (
    <div className={styles.editor}>
      {label && <InputLabel label={label} />}
      <div className={styles.editor_container} aria-selected={focus}>
        <div className={styles.editor_input} ref={editorRef} />
      </div>
    </div>
  )
}
