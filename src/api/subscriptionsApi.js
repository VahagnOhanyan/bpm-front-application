import {getCommonRequestProps} from "../common/common";

export const getAllSubscriptions = (token) => fetch("/bpm/admin/subscriptions/all",
    {
        method: "GET",
        ...getCommonRequestProps(),
    })
    .then(response => response.json())
    .then(subscriptions => subscriptions || []);
