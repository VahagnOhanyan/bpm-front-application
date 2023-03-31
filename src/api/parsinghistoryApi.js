import {styled} from "@mui/material/styles";

export const getAllParsingHistory = () => fetch("/bpm/admin/parsing_result/all",
    {method: "GET"})
    .then(response => response.json())
    .then(parsing_result => parsing_result || []);



