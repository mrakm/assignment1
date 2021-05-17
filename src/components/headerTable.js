import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from 'react'

export default function HeaderTable(props) {
    return (
        <TableHead>
                  <TableRow>
                  <TableCell>
                  Name
                  </TableCell>
                  <TableCell>
                  Email
                  </TableCell>
                  <TableCell>
                  Phone
                  </TableCell>
                  <TableCell>
                  Premium
                  </TableCell>
                  <TableCell>
                  Bid(Max/Min)
                  <><span onClick={props.ascOrderhandler}>
                     {" "}
                        <i class="material-icons">arrow_downward</i>
                      </span>
                      <span onClick={props.descOrderhandler}>
                         <i class="material-icons">arrow_upward</i>
                       </span>
                            </>
                  </TableCell>
                  <TableCell>
                  Details
                  </TableCell>
                  </TableRow>
       </TableHead>
    )
}
