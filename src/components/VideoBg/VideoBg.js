import React from "react";
import classNames from "./VideoBg.module.css";
import Source from "./Source";
import PropTypes from "prop-types";

const VideoBg = ({
  wrapperClass,
  videoClass,
  loop = true,
  muted = true,
  autoPlay = true,
  poster,
  children,
  el: El = "div"
}) => (
  <El
    className={`${classNames.wrapper}${wrapperClass ? " " + wrapperClass : ""}`}
  >
    <video
      className={`${classNames.video}${videoClass ? " " + videoClass : ""}`}
      loop={loop}
      muted={muted}
      poster={poster}
      autoPlay={autoPlay}
    >
      {children}
    </video>
  </El>
);

VideoBg.propTypes = {
  wrapperClass: PropTypes.string,
  videoClass: PropTypes.string,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  poster: PropTypes.string,
  autoPlay: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: Source
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: Source
      })
    )
  ]),
  el: PropTypes.string
};

VideoBg.Source = Source;

//TODO:   写一个事件解决视频无法播放的问题

export default VideoBg;
