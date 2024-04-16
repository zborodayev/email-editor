import { Eraser } from 'lucide-react';
import { Bold } from 'lucide-react';
import { Italic } from 'lucide-react';
import { Underline } from 'lucide-react';

import styles from './EmailEditor.module.scss'
export const EmailEditor = () => {
  return (
    <div>
      <h1 className={styles.h1}>Email-editor</h1>
      <div className={styles.card}>
        <div className={styles.editor}>
          Кто может стать обладателем международной стипендии «Болашак» Участником программы может стать любой гражданин Республики Казахстан, претендующий на: получение степени магистра, доктора философии (PhD), доктора по профилю, обучение в резидентуре и прохождение стажировок.
        </div>
        <div className={styles.actoins}>
          <button>Send now</button>
          <div className={styles.tools}>
          <button><Eraser size={18}/></button>
          <button><Bold size={18}/></button>
          <button><Italic size={18}/></button>
          <button><Underline size={18}/></button>
          </div>
        </div>
      </div>
    </div>
  )
}
