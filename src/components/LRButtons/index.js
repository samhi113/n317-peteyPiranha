import LRStyle from "./LR.module.css";

export default function LRButtons ({pageBack, pageNext}) {
    var backText = "<"
    var nextText = ">"

    pageBack = "/" + String(pageBack);
    pageNext = "/" + String(pageNext);

    return (
        <div>
          <a href={pageBack} id="leftBtn" className={LRStyle.leftBtn}>{backText}</a>
          <a href={pageNext} id="rightBtn" className={LRStyle.rightBtn}>{nextText}</a>
        </div>
      );
}