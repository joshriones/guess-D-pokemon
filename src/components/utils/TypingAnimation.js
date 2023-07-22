import React, { useState, useEffect } from "react";
import "./TypingAnimation.css";

const TypingAnimation = ({ text, typingSpeed, eraseSpeed, delay }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    const animateText = () => {
      if (isTyping) {
        const newText = text.slice(0, displayText.length + 1);
        setDisplayText(newText);

        if (displayText.length === text.length) {
          setIsTyping(false);
          timeout = setTimeout(() => setIsTyping(true), delay);
        }
      } else {
        const newText = displayText.slice(0, displayText.length - 1);
        setDisplayText(newText);

        if (displayText.length === 0) {
          setIsTyping(true);
          timeout = setTimeout(() => setIsTyping(false), delay);
        }
      }
    };

    timeout = setTimeout(animateText, isTyping ? typingSpeed : eraseSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, text, typingSpeed, eraseSpeed, delay]);

  return (
    <div>
      <span className="animating-text">{displayText}</span>
      <span className="cursor" />
    </div>
  );
};

export default TypingAnimation;
