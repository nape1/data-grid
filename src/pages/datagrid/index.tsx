import * as React from 'react'
import { DataGridPro, GridToolbar, type GridColDef } from '@mui/x-data-grid-pro'

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Stark', firstName: 'Eddard', age: 45 },
  { id: 11, lastName: 'Targaryen', firstName: 'Rhaegar', age: 40 },
  { id: 12, lastName: 'Baratheon', firstName: 'Robert', age: 45 },
]

export default function DataGridProExample() {
  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <h2>Hello Data grid</h2>
      <DataGridPro
        rows={rows}
        columns={columns}
        pagination
        // pageSizeOptions={[1, 5, 10, 20]} // Options for rows per page
        // initialState={{ pagination: { pageSize: 1 } }} // Number of rows per page
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }} // Number of rows per page
        // pageSize={5} // Number of rows per page
        // rowsPerPageOptions={[5, 10, 20]} // Options for rows per page
        pageSizeOptions={[5, 10, 100, { value: -1, label: 'All' }]}
        slots={{
          toolbar: GridToolbar, // Optional: Add a toolbar for exporting, filtering, etc.
        }}
      />
    </div>
  )
}
