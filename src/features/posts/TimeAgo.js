import { formatDistanceToNow, parseISO } from 'date-fns'
import React from 'react'

const TimeAgo = ({timestamp}) => {

    let timeAgo = ''
    if(timestamp){
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
        // console.log("date parse",date)
        // console.log("time period",timePeriod)
    }
  return (
    <span>&nbsp; <i>{timeAgo}</i> </span>
  )
}

export default TimeAgo