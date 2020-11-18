import InputLabel from '@components/atoms/InputLabel'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Quote from '@editorjs/quote'
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
  const editorRef = useRef(null)
  const [focus, setFocus] = useState(false)
  const [initialized, setInitialized] = useState(false)

  function getValue() {
    if (input.value === undefined || input.value === '') return undefined
    if (typeof input.value === 'object') return input.value
    if (typeof input.value === 'string') return JSON.parse(input.value)
    return undefined
  }

  const setFocusOn = () => setFocus(true)
  const setFocusOff = () => setFocus(false)

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
            levels: [2],
            inlineToolbar: ['link'],
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          quote: Quote,
        },
        placeholder: placeholder,
        minHeight: 32,
        holder: editorRef.current,
        data: getValue(),
        async onChange(api) {
          const saved = await api.saver.save()
          input.onChange(saved)
        },
      })

      setInitialized(true)
      return editor.destroy
    }
    // eslint-disable-next-line
  }, [editorRef, initialized])

  return (
    <div>
      {label && <InputLabel label={label} />}
      <div
        className={`
          ${styles.editor} 
          ${focus ? styles.editor_focused : ''}
        `}
        ref={editorRef}
      />
    </div>
  )
}
