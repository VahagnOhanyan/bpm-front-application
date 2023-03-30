import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as pagesApi from "../../api/pagesApi";
import {flattenObjInLoop} from "../../utils/flattener";

const columns = [
    {field: "name", headerName: "Название", width: 150},
    {field: "url", headerName: "Адрес", width: 200}

];

const Pages = () => {
    const [pages, setPages] = useState([])
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (row) => {
        setSelectedRow(row);
    };

    useEffect(() => {
        loadAllPages(setPages);
    }, [setPages]);


    return (
        <DataGrid columns={columns} rows={pages} getRowId={page => page.name} onRowClick={handleRowClick}
                  rowClassName={(row) => selectedRow && row.id === selectedRow.id ? "selected" : ""}/>
    )
}
const loadAllPages = (setPages) => {
    pagesApi.getAllPages().then(pages => setPages(flattenObjInLoop(pages)))

};
export default Pages;