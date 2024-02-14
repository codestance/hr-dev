import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import React from "react";
import { ReqListItem } from "../types/types";
interface Props {
  data: ReqListItem[];
}
const columns = [
  { key: "start", label: "Start" },
  { key: "end", label: "End" },
  { key: "days", label: "Days" },
  { key: "reason", label: "Reason" },
  { key: "status", label: "Status" },
];
export const DataTable = (props: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell key={column.key}>{column.label}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.data.map((e) => (
          <TableRow key={e.id}>
            <TableCell>{new Date(e.start).toLocaleDateString("PL")}</TableCell>
            <TableCell>{new Date(e.end).toLocaleDateString("PL")}</TableCell>
            <TableCell>{e.days}</TableCell>
            <TableCell>{e.reason}</TableCell>
            <TableCell>{e.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
