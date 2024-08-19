"use client";
import { CategoryList } from "@/db";
import Image from "next/image";
import { useState } from "react";
import { CategoryBtn } from "../Button";
import "./style.css";

export default function Category() {
  const [categoryName, setCategoryName] = useState<string>("");

  const onClickCategoryHandler = (category: string) => {
    setCategoryName(category);
  };
  return (
    <div id="category-wrapper">
      <div className="category-profile-container">
        <div className="category-profile-image-wrapper">
          <Image src={"/gyulo94.png"} alt="이미지" width={150} height={150} />
        </div>
        <div className="category-profile-info-wrapper">
          <div className="category-profile-info-name">박철규</div>
          <div className="category-profile-info-description">
            안녕하세요. 웹 개발자 박철규입니다.
          </div>
        </div>
      </div>
      <div className="category-container">
        <p className="category-title">전체 카테고리 ({0})</p>
        <div className="category-content">
          {CategoryList.map((category) => (
            <CategoryBtn
              isSelected={category.category === categoryName}
              onClick={() => onClickCategoryHandler(category.category)}
            >
              {category.category}
            </CategoryBtn>
          ))}
        </div>
      </div>
    </div>
  );
}
