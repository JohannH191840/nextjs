import Image from 'next/image'
import styles from './page.module.css' 
import Button from "@/components/Button/Button"; 

export default function Home() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileInfo}>
        <h1>Hey, I’m Johann.</h1>
        <p>A web designer and developer from Phoenix in the Az. I create websites to help people go further online.</p>
        <Button url="https://johannh191840.github.io/My-Portfolio/MyWork.html" text="My Projects"/>
      </div>
      <div className={styles.profileImage}>
        <Image src="/profilepic.png" alt="Profile picture" width={350} height={350} className={styles.img} />
      </div>
    </div>
  )
}
