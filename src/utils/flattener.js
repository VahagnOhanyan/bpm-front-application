export const flattenObjInLoop = (obj) => {
    let result = [];
    for (let i = 0; i < obj.length; i++) {
        result[i] = flattenObj(obj[i])
    }
    console.log(result)
    return result;
}
export const flattenObj = (ob) => {
    let result = [];
    for (const i in ob) {
        if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
            console.log("ob[i]: " + ob[i])
            const temp = flattenObj(ob[i]);
            for (const j in temp) {
                result[i + "_" + j] = temp[j];
            }
        } else {
            result[i] = ob[i];
        }

    }
    return result;
};