import React, { useState, useEffect } from "react";
import "../App.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import TableContainer from "@material-ui/core/TableContainer";
import CircularProgress from '@material-ui/core/CircularProgress';

import TablePagination from "@material-ui/core/TablePagination";

import { useHistory } from "react-router-dom";


import HeaderTable from '../components/headerTable';
import TableContent from '../components/tableContent';
import ToggleBtn from '../components/buttonToggle';

import {fetchDataFromApi} from '../api/APIUtils';


export default function DisplayBid() {
  let history = useHistory();
  const [sort, setSort] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [bid, setBid] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    fetchDataFromApi().then((r)=> setData(r));
   }, []);



  useEffect(() => {
    if (data.length) {
      setLoading(false);
    }
  }, [data]);


  const descendingOrder = () => {
    let n = data
      .map((r) => {
        const d = r.bids.sort((a, b) => {
          return b.amount - a.amount;
        });

        return { ...r, bids: d };
      })
      .sort((a, b) => {
        return (b.bids[0] || {}).amount - (a.bids[0] || {}).amount;
      });
    setData(n);
  };
 

  const ascendingOrder = () => {
    let n = data
      .map((r) => {
        const d = r.bids.sort((a, b) => {
          return a.amount - b.amount;
        });

        return { ...r, bids: d };
      })
      .sort((a, b) => {
        return (a.bids[0] || {}).amount - (b.bids[0] || {}).amount;
      });
    setData(n);
    setSort(true);
  };


  const buttonOnClickToggle = () => {
    setSort(false);
    setBid(!bid);
  };

  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {loading ? (
      <div className="spinner">
      <CircularProgress color="secondary" className="spinner-circle" />
   </div>
      ) : (
        <div className="container">
          <h1 className="app-name">
              Bidding Application
          </h1>
           <ToggleBtn toggleHandeler={buttonOnClickToggle}/>
             <div className="main-container">
            <TableContainer >
              <Table stickyHeader aria-label="sticky table">
              <HeaderTable ascOrderhandler={ascendingOrder}  descOrderhandler={descendingOrder}  />
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableContent data={row} bid={bid} sort={sort}/>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          
          </div>
        </div>
      )}
    </>
  );
}
