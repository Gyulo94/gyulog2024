import { PostCard } from "../components/Card";
import Category from "../components/Category";
import "./style.css";

export default function Blog() {
  return (
    <div id="blog-wrapper">
      <div className="blog-container">
        <div className="category-wrapper">
          <Category />
        </div>
        <div className="post-wrapper">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
}
