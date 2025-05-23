"use client"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>&copy; {new Date().getFullYear()} POND POND</small>
    </footer>
  )
}

export default Footer