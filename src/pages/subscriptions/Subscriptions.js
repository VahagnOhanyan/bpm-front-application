import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as subscriptionsApi from "../../api/subscriptionsApi";
import {flattenObjInLoop} from "../../utils/flattener";

const columns = [
    {field: "id", headerName: "qq", width: 150},
    {field: "page_name", headerName: "Страница", width: 150},
    {field: "user_login", headerName: "Пользователь", width: 150},
];

const Subscriptions = () => {
    const [subscriptions, setSubscriptions] = useState([])
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (row) => {
        setSelectedRow(row);
    };

    useEffect(() => {
        loadAllSubscriptions(setSubscriptions);
    }, [setSubscriptions]);

    return (
        <DataGrid columns={columns} rows={subscriptions} getRowId={subscription => subscription.id}
                  onRowClick={handleRowClick}
                  rowClassName={(row) => selectedRow && row.id === selectedRow.id ? "selected" : ""}/>
    )
}
const loadAllSubscriptions = (setSubscriptions) => {
    subscriptionsApi.getAllSubscriptions().then(subscriptions => setSubscriptions(flattenObjInLoop(subscriptions)))
};
export default Subscriptions;