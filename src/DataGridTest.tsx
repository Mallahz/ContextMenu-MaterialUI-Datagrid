/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import {
  DataGrid,
  GridColumns,
  GridRowsProp,
  GridRowData
} from "@material-ui/data-grid";

const randomTraderName = () => {
  const nameArr = [
    "Jade",
    "Juliet",
    "Adam",
    "Bestia",
    "Carl",
    "Clason",
    "Edward",
    "Kaly"
  ];
  return nameArr[Math.floor(Math.random() * nameArr.length)];
};

const randomCreatedDate = () => {
  const dateArr = [
    "2020-11-19",
    "2020-10-08",
    "2020-01-17",
    "2020-02-14",
    "2020-08-19",
    "2019-01-08",
    "1999-05-05",
    "2004-02-14"
  ];
  return dateArr[Math.floor(Math.random() * dateArr.length)];
};
const randomUpdatedDate = () => {
  const dateArr = [
    "2021-07-19",
    "2021-07-18",
    "2021-07-17",
    "2021-07-07",
    "2021-08-19",
    "2021-01-08",
    "2021-08-05",
    "2021-07-22"
  ];
  return dateArr[Math.floor(Math.random() * dateArr.length)];
};

export default function BasicEditingGrid() {
  const getRowData = (row: GridRowData) => {
    return row.id;
  };

  const onContextMenu = (e: React.SyntheticEvent): void => {
    let target = e.target as HTMLElement;
    console.log(target.innerHTML);
  };

  return (
    <div style={{ height: 300, width: "100%" }} onContextMenu={onContextMenu}>
      <DataGrid
        density="compact"
        rows={rows}
        columns={columns}
        autoHeight={true}
        autoPageSize={true}
        hideFooter={true}
        showCellRightBorder={true}
        showColumnRightBorder={true}
        getRowId={getRowData}
      />
    </div>
  );
}

const columns: GridColumns = [
  { field: "id", headerName: "ID", width: 100, editable: false },
  { field: "name", headerName: "Name", width: 180, editable: true },
  { field: "age", headerName: "Age", type: "number", editable: true },
  {
    field: "dateCreated",
    headerName: "Date Created",
    type: "date",
    width: 180,
    editable: true
  },
  {
    field: "lastLogin",
    headerName: "Last Login",
    type: "dateTime",
    width: 220,
    editable: true
  }
];
const rows: GridRowsProp = (() => {
  let datas = [];
  for (let i = 0; i < 1000; i++) {
    datas.push({
      id: i + 1,
      name: randomTraderName(),
      age: Math.floor(Math.random() * 65),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate()
    });
  }
  return datas;
})();
