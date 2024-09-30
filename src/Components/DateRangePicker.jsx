import React from 'react'
// import "rsuite/dist/rsuite.min.css";
import { DateRangePicker } from "rsuite";

const DateRangePickerFilter = ({
    onChange
}) => {
  return (
    <div>
        <span><DateRangePicker onChange={onChange}/></span>
    </div>
  )
}

export default DateRangePickerFilter
