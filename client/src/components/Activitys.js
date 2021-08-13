import React from 'react'
import Activity from './Activity'

const Activitys = (props) => {
    return (
        <div>
            {props.activitys.map((activity, idx) => {
                return (
                    <div key={idx}>
                        <Activity activity={activity} />
                    </div>
                )
            })}
        </div>
    )
}

export default Activitys
