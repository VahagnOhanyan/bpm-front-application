
import {getCommonRequestProps} from "../common/common";

export const getAllParsingHistory = () => fetch("/bpm/admin/parsing_result/all",
        {
        method: "GET",
       ...getCommonRequestProps(),
    })
    .then(response => response.json())
    .then(parsing_result => parsing_result || []);



