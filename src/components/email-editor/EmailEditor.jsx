import { Eraser } from 'lucide-react';
import { Bold } from 'lucide-react';
import { Italic } from 'lucide-react';
import { Underline } from 'lucide-react';

import styles from './EmailEditor.module.css'
import { useRef, useState } from 'react';
export const EmailEditor = () => {
  const [text, setText] = useState(`Кто может стать обладателем международной стипендии «Болашак» Участником программы может стать любой гражданин Республики Казахстан, претендующий на: получение степени магистра, доктора философии (PhD), доктора по профилю, обучение в резидентуре и прохождение стажировок.`)
  const textRef = useRef(null)

  const getSelectoinText = () => {
    if(!textRef.current) return
    const cursorStart = textRef.current?.selectionStart
    const cursorEnd = textRef.current?.selectionEnd

    const selectedText = text.substring(cursorStart,cursorEnd)
    if(!selectedText) return
    console.log(selectedText)
  }

  return (
    <div>
      <h1 className={styles.h1}>Email-editor</h1>
      <div className={styles.card}>
        <textarea 
        spellCheck='false'
        ref={textRef}
        className={styles.editor}
        onClick={getSelectoinText}
        value={text}
        onChange={e => setText(e.target.value)}
        >
          {text}
        </textarea>
        <div className={styles.actoins}>
          <div>

          <button><Eraser size={17}/></button>
          <button><Bold size={17}/></button>
          <button><Italic size={17}/></button>
          <button><Underline size={17}/></button>

          </div>
          <button>Send now</button>
        </div>
      </div>
    </div>
  )
}
