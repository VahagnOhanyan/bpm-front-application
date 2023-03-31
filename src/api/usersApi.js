import {getCommonRequestProps} from "../common/common";

export const getAllUsers = (token) => fetch("/bpm/admin/users/all",
        {
        method: "GET",
     ...getCommonRequestProps(),
    })
    .then(response => response.json())
    .then(users => users || []);

export const createUser = (user) => fetch("/bpm/admin/users/create",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "plain/text"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.text());

export const deleteUser = (login) => fetch("/bpm/admin/users/delete/" + login,
    {method: "DELETE"})
    .then(response => response.text());