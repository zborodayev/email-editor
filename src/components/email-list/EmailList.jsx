import styles from './EmailList.module.css'
export const EmailList = () => {
  return (
    <div className={styles.div}>
      <h1>Email-Lists</h1>
      <div>
        <textarea spellCheck='false' className={styles.Listeditor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maiores voluptate reiciendis laudantium nisi magnam dolores harum quia tenetur molestias, in atque optio aut, pariatur ratione deserunt architecto quos ducimus.</textarea>
      </div>
    </div>
  )
}
