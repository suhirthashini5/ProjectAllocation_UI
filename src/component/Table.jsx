import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Project', minWidth: 100 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'SE',
    label: 'Software Engineer',
    minWidth: 100,
    align: 'center',
    format: value => value.toLocaleString(),
  },
  {
    id: 'ASE',
    label: 'Associate Software Engineer',
    minWidth: 100,
    align: 'center',
    format: value => value.toLocaleString(),
  },
  {
    id: 'TL',
    label: 'Tech Lead',
    minWidth: 100,
    align: 'center',
    format: value => value.toLocaleString(),
  },
  {
    id: 'QATL',
    label: 'QA Tech Lead',
    minWidth: 100,
    align: 'center',
    format: value => value.toLocaleString(),
  },
  {
    id: 'SQA',
    label: 'Senior QA',
    minWidth: 100,
    align: 'center',
    format: value => value.toLocaleString(),
  },
  {
    id: 'AQA',
    label: 'Associate QA',
    minWidth: 100,
    align: 'center',
    format: value => value.toLocaleString(),
  },
 
];

function createData(name, SE, ASE, TL, QATL, SQA, AQA) {
//   const density = ASE + QATL;
  return { name, SE, ASE, TL, QATL,SQA, AQA};
}

const rows = [
  createData('Defect System', 28, 13, 3, 5, 2, 2),
  createData('Leave Management System', 30, 14, 9, 5, 2, 3),
  createData('HRM System', 25, 14, 3, 5, 3, 2),
  createData('School System', 30, 15, 4, 5, 8, 3),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 20, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}