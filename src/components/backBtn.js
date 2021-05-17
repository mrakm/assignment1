import React from 'react'
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
export default function BackBtn() {
    let history = useHistory();
    return (
        <div className="togglebtn ">
        <Button
          variant="outlined" 
          onClick={() => history.push("/")}
        >
          Back
        </Button>
      </div>
    )
}
