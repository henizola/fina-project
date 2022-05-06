import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories) {
  return { name, calories };
}

export default function CustomizedTables({
  student,
  father,
  mother,
  grade,
  id,
}) {
  return (
    <TableContainer
      component={Paper}
      style={{ width: "793px", height: "fit-content", padding: "20px 50px " }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Registerd Student Information </StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Student Name :
            </StyledTableCell>
            <StyledTableCell align="left">
              {`  ${student.firstName.toUpperCase()} ${student.middleName.toUpperCase()} ${student.lastName.toUpperCase()}`}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Studednt Email :
            </StyledTableCell>
            <StyledTableCell align="left">{student.email}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Studednt Phone :
            </StyledTableCell>
            <StyledTableCell align="left">{student.phone}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Father Full Name :
            </StyledTableCell>
            <StyledTableCell align="left">
              {" "}
              {father.firstName.toUpperCase()}
              {father.middleName}
              {father.LastName}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Father Email:
            </StyledTableCell>
            <StyledTableCell align="left"> {father.email}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Father Phone:
            </StyledTableCell>
            <StyledTableCell align="left"> {father.phone}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Mother Full Name :
            </StyledTableCell>
            <StyledTableCell align="left">
              {" "}
              {mother.firstName}
              {mother.middleName}
              {mother.LastName}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Mother Email:
            </StyledTableCell>
            <StyledTableCell align="left"> {mother.email}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Mother Phone:
            </StyledTableCell>
            <StyledTableCell align="left"> {mother.phone}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Grade:
            </StyledTableCell>
            <StyledTableCell align="left"> {grade}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Id:
            </StyledTableCell>
            <StyledTableCell align="left"> {id}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
