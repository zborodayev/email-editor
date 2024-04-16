import { EmailEditor } from "./components/email-editor/EmailEditor"
import { EmailList } from "./components/email-list/EmailList"
import styles from "./Home.module.css"
export const Home = () => {
  return (
    <div className={styles.div}>
        <EmailEditor/>
        <EmailList/>
    </div>
  )
}
