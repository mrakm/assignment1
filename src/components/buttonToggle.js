import React from 'react'
import Button from "@material-ui/core/Button";

export default function ButtonToggle(props) {
    return (
        <div>
            <div className="togglebtn">
            {/* the toggle button to see highest/lowest value in customers biding array */}
            <Button
              variant="outlined" 
              onClick={props.toggleHandeler}
            >
              Toggle Value
            </Button>
          </div>
        </div>
    )
}
