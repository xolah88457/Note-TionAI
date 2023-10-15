"use client";
import React from 'react'
import TypeWriter from 'typewriter-effect'
type Props = {}

const TitleTypeWriter = (props: Props) => {
  return (
    <TypeWriter
    options={{
      loop: true,
    }}
    onInit={(typewriter) => {
      typewriter.typeString('AI Text Completion 🤖')
        .pauseFor(500)
        .deleteAll()
        .typeString('Smart Note Taking 📝')
        .pauseFor(500)
        .deleteAll()
        .typeString('Organize with Ease 🗂️')
        .pauseFor(500)
        .deleteAll()
        .typeString('Search Smartly 🔍')
        .pauseFor(500)
        .deleteAll()
        .typeString('Secure & Private 🔒')
        .pauseFor(500)
        .deleteAll()
        .typeString('Powered by Advanced Algorithms 🧠')
        .pauseFor(500)
        .deleteAll()
        .typeString('Highlights & Summaries ✨')
        .pauseFor(500)
        .deleteAll()
        .start();
    }}
    
    />
  )
}

export default TitleTypeWriter