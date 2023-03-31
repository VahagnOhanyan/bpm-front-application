import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as subscriptionsApi from "../../api/subscriptionsApi";
import {flattenObjInLoop} from "../../utils/flattener";
import {useAuth} from "../../auth/AuthProvider";

const columns = [
    {field: "id", headerName: "qq", width: 150},
    {field: "page_name", headerName: "Страница", width: 150},
    {field: "user_login", headerName: "Пользователь", width: 150},
];

const Subscriptions = () => {
    const {token} = useAuth();
    const [subscriptions, setSubscriptions] = useState([])
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (row) => {
        setSelectedRow(row);
    };

    useEffect(() => {
        loadAllSubscriptions(setSubscriptions, token);
    }, [setSubscriptions, token]);

    return (
        <DataGrid columns={columns} rows={subscriptions} getRowId={subscription => subscription.id}
                  onRowClick={handleRowClick}
                  rowClassName={(row) => selectedRow && row.id === selectedRow.id ? "selected" : ""}/>
    )
}
const loadAllSubscriptions = (setSubscriptions, token) => {
    subscriptionsApi.getAllSubscriptions(token).then(subscriptions => setSubscriptions(flattenObjInLoop(subscriptions)))
};
export default Subscriptions;