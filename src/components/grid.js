import React from "react"
import { wrapper, item } from "./grid.module.css"
import Layout from "./layout"

let murrays = []
for (let i = 0; i < 40; i++) {
  murrays.push(
    <div className={item}>
      <img src={"http://placekitten.com/600/400"} />
    </div>
  )
}

const Grid = () => {
  return <div className={wrapper}>{murrays}</div>
}
export default Grid
