import "./article.style.scss";

import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import WebFont from "webfontloader";

const Article = ({ imageIllustration, title, content }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik Bubbles", "Vollkorn"],
      },
    });
  }, []);

  return (
    <div className="article-container">
      <img src={imageIllustration} alt="" />
      <h3>{title}</h3>
      <span>{content}</span>
    </div>
  );
};

export default Article;
