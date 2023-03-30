import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as usersApi from "../../api/usersApi";
import {flattenObjInLoop} from "../../utils/flattener";

const columns = [
    {field: "login", headerName: "Логин", width: 150},
    {field: "firstName", headerName: "Имя", width: 200},
    {field: "lastName", headerName: "Фамилия", width: 200},
    {field: "role", headerName: "Роль", width: 200}

];

const Users = () => {
    const [users, setUsers] = useState([])
    const [selectedRow, setSelectedRow] = useState(null);
    const handleRowClick = (row) => {
        setSelectedRow(row);
    };
    useEffect(() => {
        loadAllUsers(setUsers);
    }, [setUsers]);

    return (
        <DataGrid columns={columns} rows={users} getRowId={user => user.login} onRowClick={handleRowClick}
                  rowClassName={(row) => selectedRow && row.id === selectedRow.id ? "selected" : ""}/>)
}
const loadAllUsers = (setUsers) => {
    usersApi.getAllUsers().then(users => setUsers(flattenObjInLoop(users)))

};
export default Users;