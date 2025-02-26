import React, { useState } from 'react';
import { 
  DataGridPro, 
  GridToolbar,
  useGridApiRef,GridColDef 
} from '@mui/x-data-grid-pro';
// Uncomment the following for production use with a valid license
// import { LicenseInfo } from '@mui/x-license-pro';
// LicenseInfo.setLicenseKey('YOUR_LICENSE_KEY');

const App = () => {
  // Sample data
  const rows = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 35, status: 'Active' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 28, status: 'Inactive' },
    { id: 3, firstName: 'Michael', lastName: 'Brown', age: 42, status: 'Active' },
    { id: 4, firstName: 'Emily', lastName: 'Johnson', age: 31, status: 'Pending' },
    { id: 5, firstName: 'David', lastName: 'Wilson', age: 39, status: 'Active' },
  ];

  // Column definitions
  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First Name', width: 130, editable: true },
    { field: 'lastName', headerName: 'Last Name', width: 130, editable: true },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Active', 'Inactive', 'Pending'],
    },
    {
      field: 'fullName',
      headerName: 'Full Name',
      description: 'This column is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];

  // State for managing selection
  const [selectionModel, setSelectionModel] = useState([]);
  const apiRef = useGridApiRef();

  // Handle row editing
  const handleRowEditCommit = (params) => {
    console.log('Row edited:', params);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        rows={rows}
        columns={columns}
        apiRef={apiRef}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
        onCellEditCommit={handleRowEditCommit}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        initialState={{
          pagination: {
            pageSize: 5,
          },
          columns: {
            columnVisibilityModel: {
              id: false,
            },
          },
        }}
      />
    </div>
  );
};

export default App;