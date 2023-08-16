import { Label } from "../../components/Label";
import "../css/news.css";
import imgNews from ".//news.png";

const NewsSection = () => {
  return (
    <div className="news">
      <img src={imgNews} />
      <div className="news-text">
        <Label text="As a leader in our indust, we understand the importance" />
        <Label text="24 Mei 2023" size="sm" />
      </div>
    </div>
  );
};

export default NewsSection;
