export const getCommonRequestProps = () => {
    const props = {};
    const token = localStorage.getItem("token");
    if (token) {
        props.headers = {Authorization: `${localStorage.getItem("token")}`};
    }
    return props;
};