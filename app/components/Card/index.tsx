import Image from "next/image";
import "./style.css";

export function PostCard() {
  return (
    <div id="post-card-wrapper">
      <div className="post-card-container">
        <div className="post-img-wrapper">
          <Image
            src="https://images.unsplash.com/photo-1723754166148-2ceb2d84890f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="포스트 이미지"
            width={150}
            height={150}
          />
        </div>
        <div className="post-contents-wrapper">
          <h2>제목입니다.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam eos
            alias nemo repellat a? Impedit adipisci rem ipsa odio praesentium,
            harum dolorum accusamus quam excepturi rerum, quaerat earum
            doloremque facere?
          </p>
          <div className="post-bottom-wrapper">
            <div className="post-category">카테고리</div>
            <div className="post-date">2024.08.19</div>
          </div>
        </div>
      </div>
    </div>
  );
}
