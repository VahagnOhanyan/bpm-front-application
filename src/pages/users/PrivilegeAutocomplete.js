import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {useEffect} from "react";

const privileges = [
    ["USER"], ["ADMIN"]
];

const PrivilegeAutocomplete = (props) => {
    const v = props.value
    let privilege = props.privilege
    let privilegeSet = props.privilegeSet
    let index = props.index
    let name = `privilege_${index}`
    const setFieldValue = props.setFieldValue
    const touched = props.touched
    const errors = props.errors

    const handleChange = props.handleChange
    const setValue = (value) => {
        if (value !== null
            && value !== []
            && value !== ""
            && value[0] !== null
            && value[0] !== []
            && value[0] !== ""
            && value[0] !== undefined) {
            privilege.set(name, value[0])
            privilegeSet.clear()
            Array.from(privilege.values()).forEach((v) => privilegeSet.add(v))
        } else {
            if (privilege.has(name)) {
                privilege.delete(name)
                privilegeSet.clear()
                Array.from(privilege.values()).forEach((v) => privilegeSet.add(v))
            }

        }
        setFieldValue(
            "privileges",
            [...privilegeSet]
        );
        setFieldValue(
            "privilege",
            value !== null
            && value !== []
            && value !== ""
            && value[0] !== null
            && value[0] !== []
            && value[0] !== ""
            && value[0] !== undefined ? value : []
        );
    }
    useEffect(() =>
        setValue([v]), [])
    return (
        <>
            <Autocomplete
                name={name}
                defaultValue={v}
                options={privileges}
                getOptionLabel={r => r}
                onChange={(e, value) => {
                    setValue(value)
                }}
                renderInput={params => (
                    <TextField
                        {...params}
                        autoFocus
                        onChange={handleChange}
                        error={touched.privilege && Boolean(errors.privilege)}
                        helperText={touched.privilege && errors.privilege}
                        fullWidth
                        name="privilege"
                        id="privilege"
                        label="Роль"
                        margin="dense"
                        value={v}
                    />
                )}
            />

        </>)

}

export default PrivilegeAutocomplete;