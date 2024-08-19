"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NavBtn } from "../Button";
import "./style.css";
export default function Header() {
  const [navMenu, setNavMenu] = useState<string>("");
  const navigate = useRouter();

  const onClickNavMenuHandler = (navMenu: string) => {
    navigate.push(`/${navMenu}`);
    setNavMenu(navMenu);
  };

  const onClickLogoHandler = () => {
    navigate.push("/");
    setNavMenu("");
  };

  return (
    <header id="header-wrapper">
      <div className="header-container">
        <div className="header-left-box" onClick={onClickLogoHandler}>
          <div className="header-logo-wrapper">
            <img src="" alt="" />
          </div>
          <p>Gyulog</p>
        </div>
        <div className="header-right-box">
          <Link href="/about">
            <NavBtn
              onClick={() => onClickNavMenuHandler("about")}
              isSelected={navMenu === "about"}
            >
              About
            </NavBtn>
          </Link>
          <Link href="/blog">
            <NavBtn
              onClick={() => onClickNavMenuHandler("blog")}
              isSelected={navMenu === "blog"}
            >
              Blog
            </NavBtn>
          </Link>
          <Link href="/photo">
            <NavBtn
              onClick={() => onClickNavMenuHandler("photo")}
              isSelected={navMenu === "photo"}
            >
              Photo
            </NavBtn>
          </Link>
          <Link href={"https://gyuspace.vercel.app"}>
            <NavBtn onClick={() => "Portfolio"} isSelected={false}>
              Portfolio
            </NavBtn>
          </Link>
        </div>
      </div>
    </header>
  );
}
