'use client'
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Paper,
  Typography,
} from '@mui/material';

const rows = [
  { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 22, email: 'charlie@example.com' },
  { id: 4, name: 'Diana', age: 28, email: 'diana@example.com' },
  { id: 5, name: 'Eve', age: 35, email: 'eve@example.com' },
  { id: 6, name: 'Frank', age: 24, email: 'frank@example.com' },
  { id: 7, name: 'Grace', age: 27, email: 'grace@example.com' },
  { id: 8, name: 'Hank', age: 32, email: 'hank@example.com' },
  { id: 9, name: 'Ivy', age: 29, email: 'ivy@example.com' },
  { id: 10, name: 'Jack', age: 26, email: 'jack@example.com' },
];

export default function EnhancedTable() {
  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Sort handler
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Sort rows function
  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const orderCmp = comparator(a[0], b[0]);
      if (orderCmp !== 0) return orderCmp;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const sortedRows = stableSort(rows, getComparator(order, orderBy));
  const visibleRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper sx={{ width: '90%', margin: 'auto', marginTop: 4, overflow: 'hidden' }}>
      <Typography variant="h6" component="div" sx={{ padding: 2 }}>
        Users
      </Typography>

      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {['name', 'age', 'email'].map((headCell) => (
                <TableCell
                  key={headCell}
                  sortDirection={orderBy === headCell ? order : false}
                  sx={{ fontWeight: 'bold' }}
                >
                  <TableSortLabel
                    active={orderBy === headCell}
                    direction={orderBy === headCell ? order : 'asc'}
                    onClick={() => handleRequestSort(headCell)}
                  >
                    {headCell.charAt(0).toUpperCase() + headCell.slice(1)}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleRows.map((row) => (
              <TableRow hover key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
            {visibleRows.length < rowsPerPage && (
              <TableRow style={{ height: 53 * (rowsPerPage - visibleRows.length) }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Correct TablePagination usage */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}           // Note: MUI v5 uses this signature
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
