import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import mp4Test from "@site/static/沛配.mp4"
export default function VideoPlayer() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <video style={{height:"50vh",width:"70vw"}} controls src={mp4Test}></video>
    </div>
  )
}
