function responseHandler(response) {
    if (response.status == "OK") {
        return "Запрос выполнен успешно.";
    }
    else {
        if (response.errorCode == 403) {
            return connectionError403();
        }
        else {
            return connectionError404();
        }
    }
}

function connectionError403() {
    return "Запрос не выполнен.\nКод ошибки: 403.";
}

function connectionError404() {
    return "Запрос не выполнен.\nКод ошибки: 404.";
}

let response = {
    status: "OK",
    errorCode: null
};

/*

let response = {
status: "Failed",
errorCode: 403
};

let response = {
status: "Failed",
errorCode: 404
};

*/

console.log(responseHandler(response));