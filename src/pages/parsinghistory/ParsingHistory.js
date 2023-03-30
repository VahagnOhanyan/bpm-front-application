import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as parsingHistoryApi from "../../api/parsingHistoryApi";
import {flattenObjInLoop} from "../../utils/flattener";

const columns = [
    {field: "id", headerName: "ID", width: 150},
    {field: "page_id", headerName: "Сайт", width: 200},
    {field: "parsing_date_time", headerName: "Дата получения", width: 200},
    {field: "result", headerName: "Ответ", width: 200},
    {field: "sent", headerName: "Статус", width: 200}

];

const ParsingHistory = () => {
    const [parsingHistory, setParsingHistory] = useState([])
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (row) => {
        setSelectedRow(row);
    };
    useEffect(() => {
        loadAllParsingHistory(setParsingHistory);
    }, [setParsingHistory]);


    return (
        <DataGrid columns={columns} rows={parsingHistory} getRowId={parsingHistory => parsingHistory.id}
                  onRowClick={handleRowClick}
                  rowClassName={(row) => selectedRow && row.id === selectedRow.id ? "selected" : ""}/>
    )
}
const loadAllParsingHistory = (setParsingHistory) => {
    parsingHistoryApi.getAllParsingHistory().then(parsingHistory => setParsingHistory(flattenObjInLoop(parsingHistory)))

};

export default ParsingHistory;