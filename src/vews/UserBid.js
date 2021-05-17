import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import UserCard from '../components/userCard';

import BackBtn from '../components/backBtn'
export default function UserBid({ location }) {
  console.log(location);
  const data = location.state.user.bids;

  return (
    <div className="container">
      
       
        <UserCard firstname={location.state.user.firstname} lastname={location.state.user.lastname} numberofbid={data.length} avatarUrl={location.state.user.avatarUrl} />
      <BackBtn/>
      <TableContainer className="main-container">
        <Table  aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell >ID</TableCell>
              <TableCell >Car Title</TableCell>
              <TableCell >Amount</TableCell>
              <TableCell >Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell >{row.id}</TableCell>
                  <TableCell >{row.carTitle}</TableCell>
                  <TableCell >{row.amount}</TableCell>
                  <TableCell >{row.created}</TableCell>
                </TableRow>
              ))
            ) : (
              <p>No Bidding </p>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  );
}
