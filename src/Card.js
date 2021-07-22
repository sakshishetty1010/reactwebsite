import React from 'react'
import { Article } from './Article';
import { Education } from './Education';
import { Event } from './Event';
import img from './imgs/article1image.png';
export const Card = () => {
  return (
    <div>
      <div className="card_body mt-3">
        <Article  headline="What if famous brands had regular fonts? Meet RegulaBrands!"
          content="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" />
   </div>
   <div className="card_body mt-3">
        <Education headline="Tax Benefits for Investment under National Pension Scheme launched by Government"
          content="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" />
</div>
    </div>
  )
}
