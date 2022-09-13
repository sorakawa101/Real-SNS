import React from 'react';
import './Timeline.css';
import Share from '../share/Share'

function Timeline() {
    return (
        <div className='timeline'>
            <div className="timelineWrapper">
                <Share />
                {/* <Post /> */}
            </div>
        </div>
    )
}

export default Timeline