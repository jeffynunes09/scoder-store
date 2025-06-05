import React from 'react'
import "./index.css"
interface PropsButton {
  style?: React.CSSProperties;
  title: string;
  onClick: () => void;
}

export const Button = ({ style, title, onClick }: PropsButton) => {
  return (
    <button className='button'
      onClick={onClick} style={style}>
      {title}
    </button>
  )
}
