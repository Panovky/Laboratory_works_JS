function responseHandler(response) {
    if (response.status == "OK") {
        console.log("Запрос выполнен успешно.");
    }
    else {
        if (response.errorCode == 403) {
            connectionError403();
        }
        else {
            connectionError404();
        }
    }
}

function connectionError403() {
    console.log("Запрос не выполнен.\nКод ошибки: 403.");
}

function connectionError404() {
    console.log("Запрос не выполнен.\nКод ошибки: 404.");
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

responseHandler(response);