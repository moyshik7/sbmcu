import Link from "next/link";
import React, { useState } from "react";
import styles from "@/styles/navbar.module.css"
import Head from "next/head";

const NavItem = ({ text, href, active }) => {
  return (
      <Link href={href} className={styles.nav__link}>
          {text}
      </Link>
  );
};

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about/" },
  { text: "Request", href: "/request/" },
  { text: "Gallery", href: "/gallery/" },
  { text: "Membership", href: "/membership/" },
  { text: "Our panel", href: "/panel/" },
  { text: "Contact", href: "/contact/" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (<div>
    <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons?display=swap" rel="stylesheet"></link>
    </Head>
    <header>
      <div className={styles.nav}>
        <Link href={"/"}>
            <h1 className={styles.logo}>Sandhani</h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.nav__menu_bar}
        >
          <i className="material-icons">menu</i>
        </div>
        <div className={`${navActive ? styles.active : ""} ${styles.nav__menu_list}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </div>
    </header>
  </div>);
};

export default Navbar;