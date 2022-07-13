import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function BasicTable({ list }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Reference</TableCell>
            <TableCell align="right">Step</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Services</TableCell>
            <TableCell align="right">CreatedAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list?.map((row) => (
            <TableRow
              key={row?.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              to={row.id}
              component={Link}
            >
              <TableCell component="th" scope="row">
                {row.reference}
              </TableCell>
              <TableCell align="right">{row.step}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.service}</TableCell>
              <TableCell align="right">
                {new Date(row.createdAt * 1000).toLocaleDateString("en-US")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
