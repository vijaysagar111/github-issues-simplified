import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleDot, faComment  } from "@fortawesome/free-regular-svg-icons";
import "./index.css";

const Issue = (props) => {
  const timeDiff = Date.now() - Date.parse(props.created_at);
  const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));
  return (
    <div className="Issue">
      <div className="header">
        <div className="leftlist">
        <span className="isOpen">
          {props.isOpen === "open" ? (
            <FontAwesomeIcon icon={faCircleDot} style={{ color: "green" }} />
          ) : (
            <FontAwesomeIcon icon={faTimesCircle} style={{ color: "red" }} />
          )}
        </span>
        <h4 className="title">{props.text}</h4>
        <span className="Badges">
          {props.badges.map((badge) => {
            const luminance = (0.299 * parseInt(badge.color.substring(1,3), 16)) + (0.587 * parseInt(badge.color.substring(3,5), 16)) + (0.114 * parseInt(badge.color.substring(5,7), 16));
            const textColor = luminance > 128 ? '#000000' : '#ffffff';
            
            return (
              <span
                key={props.id}
                className="badge"
                style={{ backgroundColor: `#${badge.color}`, color:textColor }}
              >
                {badge.text}
              </span>
            );
          })}
        </span>
        </div>
        <div className="comment">
          <FontAwesomeIcon icon={faComment } />
          {props.comments > 0 && (
            <span className="comment-count">{props.comments}</span>
          )}
        </div>
      </div>
      <p style={{ fontSize: "11px", marginLeft: "20px" }}>
        #{props.number} was opened {hoursAgo} hours ago by {props.user.login}
      </p>
    </div>
  );
};

export default Issue;
