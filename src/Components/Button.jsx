import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from 'react';
export default function Button({
  children,
  withoutAnimate,
  hoverColor,
  onClick,
  ...props
}) {
  let setting = {};
  if (!withoutAnimate) {
    setting = {
      whileHover: {
        scale: 1.05,
        backgroundColor: hoverColor == null ? "#0000" : hoverColor,
      },
      transition: { type: "tween", stiffness: 500 },
    };
  }

  return (
    <motion.button {...setting} onClick={onClick} {...props}>
      {children}
    </motion.button>
  );
}
