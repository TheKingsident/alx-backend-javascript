import { RowID, RowElement } from "./interface";

declare function insertRow(row: any): number;
declare function deleteRow(rowId: number): void;
declare function updateRow(rowId: number, row: any): number;
