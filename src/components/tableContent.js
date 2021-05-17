import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
export default function TableContent(props) {
    let history = useHistory();
    return (
        <TableRow
        hover
        
        role="checkbox"
        tabIndex={-1}
        key={props.data.id}
      >
        <TableCell className="infocard"  style={{display:"flex"}}>
          <img
            height={90}
            width={90}
            src={props.data.avatarUrl}
            alt=""
          />
          <h4>{props.data.firstname + " " + props.data.lastname}</h4>
        </TableCell>
        <TableCell>{props.data.email}</TableCell>
        <TableCell>{props.data.phone}</TableCell>
        <TableCell>
          {props.data.hasPremium ? "Yes" : "No"}
        </TableCell>
        <TableCell className="bid-sec">
          <p >
             {props.sort
              ? (props.data.bids[0] || {}).amount
              : props.data.bids.length > 0
              ? !props.bid
                ? Math.max.apply(
                    Math,
                    props.data.bids.map(function (o) {
                      return o.amount;
                    })
                  )
                : Math.min.apply(
                    Math,
                    props.data.bids.map(function (o) {
                      return o.amount;
                    })
                  )
              : "-"}
          </p>
        </TableCell>
        <TableCell>
        <Button
          variant="outlined" 
          onClick={() =>
            history.push({
              pathname: `/user/${props.data.id}`,
              state: { user: props.data },
            })}
        >
          View
        </Button>
        </TableCell>
      </TableRow>
    )
}
