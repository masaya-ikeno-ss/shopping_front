"use client"
import Link from "next/link"
import styles from "./Header.module.css"
import { useState } from "react"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <h1>SHOPPING</h1>
      <div 
        className={`${styles.spanContainer} ${open ? styles.open : ""}`} 
        onClick={() => setOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div 
        className={`${styles.navContainer} ${open ? styles.active : ""}`}
        onClick={() => setOpen(false)}
      >
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/" className={styles.navLink}>Category</Link>
        <Link href="/" className={styles.navLink}>Cart</Link>
        <Link href="/" className={styles.navLink}>Order History</Link>
      </div>
    </header>
  )
}

export default Header