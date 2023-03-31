import {getCommonRequestProps} from "../common/common";

export const getAllPages = () => fetch("/bpm/admin/pages/all",
    {
        method: "GET",
        ...getCommonRequestProps(),
    })
    .then(response => response.json())
    .then(pages => pages || []);


export const addPage = (page) => fetch("/bpm/admin/pages/add",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "plain/text"
        },
        body: JSON.stringify(page)
    })
    .then(response => response.text());
