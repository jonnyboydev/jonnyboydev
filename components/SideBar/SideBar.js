import Image from "next/image"
import { FaFileDownload } from "react-icons/fa"
import Link from "next/link"
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiPython,
  DiSass,
  DiPostgresql,
  DiMongodb,
} from "react-icons/di"
import {
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai"

import styles from "./SideBar.module.scss"
console.log({ styles })

export default function SideBar() {
  const resumeLink =
    "https://drive.google.com/file/d/1cvuItCpu0P7LKUCA_MJHfnNDZvO3qOV4/view?usp=sharing"
  return (
    <section className={styles.sidebar}>
      <div>
        <Image
          src="/images/profile.jpg"
          alt="JonnyBoyDev profile"
          width={100}
          height={100}
          className="profile-img"
        />
      </div>

      <div className={styles.listarea}>
        <div className={styles.download}>
          <a href={resumeLink}>
            <FaFileDownload />
            Resume
          </a>
        </div>
        <ul>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.socials}>
        <a href="mailto:contact@jonnyboy.dev">
          <AiFillMail size="22px" />
        </a>
        <a href="https://www.linkedin.com/in/jonathan-b-clark/">
          <AiFillLinkedin size="22px" />
        </a>
        <a href="https://github.com/jonnyboydev">
          <AiFillGithub size="22px" />
        </a>
        <a href="https://www.instagram.com/jonnyboydev/">
          <AiFillInstagram size="22px" />
        </a>
        <a href="https://twitter.com/jonnyboydev">
          <AiFillTwitterSquare size="22px" />
        </a>
      </div>
      <div className="skills-area">
        <div className="skills-logos">
          <DiHtml5 color="f06529" /> <DiCss3 color="264de4" />
          <DiJavascript color="f0db4f" />
          <DiSass color="c69" /> <DiMongodb color="4DB33D" />
          <DiPostgresql color="blue" /> <DiPython color="4B8BBE" />
        </div>
      </div>
    </section>
  )
}
