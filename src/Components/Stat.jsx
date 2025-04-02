import React from 'react';
import { MdOutlineStarPurple500 } from 'react-icons/md';

const Stat = () => {
    return (
        <div className="stats-vertical lg:stats shadow lg:flex">
  <div className="stat">
    <div className="stat-figure text-secondary">
      
    </div>
   
    <div className="stat-value">50,000+</div>
    <div className="stat-desc">Experienced Tutors</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
     
    </div>
   
    <div className="stat-value">300,000+

</div>
    <div className="stat-desc">5-star tutor reviews</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      
    </div>
    
    <div className="stat-value">120+</div>
    <div className="stat-desc">Subjects Taught</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
     
    </div>
    
    <div className="stat-value">180+</div>
    <div className="stat-desc">Tutor Nationalities</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
     
    </div>
    
    <div className="stat-value flex items-center gap-2">4.8 <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /></div>
    <div className="stat-desc">On the App Store</div>
  </div>
</div>
    );
};

export default Stat;