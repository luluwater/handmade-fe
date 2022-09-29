import React from 'react'
import './LoadingAnimation.scss'

const LoadingAnimation = ({ hintWord }) => {
  return (
    <div className="LoadingAnimation_box">
      <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
      <div class="LoadingAnimation_word text-center fs-5">{hintWord}</div>
    </div>
  )
}

export default LoadingAnimation
