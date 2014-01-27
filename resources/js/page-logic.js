var allWebappsSelected = false;

function expireSessions() {
    var selected = isWebappSelected();
    if (!selected) {
        CARBON.showInfoDialog('Select the applications for session expiry');
        return;
    }
    if (allWebappsSelected) {
        CARBON.showConfirmationDialog("Do you want to expire the sessions in all 4 started applications?",
            function () {
                location.href = 'expire_sessions.jsp?expireAll=true';
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to expire the sessions in the selected applications?",
            function () {
                document.productsForm.action = 'expire_sessions.jsp';
                document.productsForm.submit();
            }
        );
    }
}

function reloadWebapps() {
    var selected = isWebappSelected();
    if (!selected) {
        CARBON.showInfoDialog('Select applications to be reloaded');
        return;
    }
    if (allWebappsSelected) {
        CARBON.showConfirmationDialog("Do you want to reload all 4 applications?",
            function () {
                location.href = 'reload_webapps.jsp?reloadAll=true';
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to reload the selected applications?",
            function () {
                document.productsForm.action = 'reload_webapps.jsp';
                document.productsForm.submit();
            }
        );
    }
}

function stopWebapps() {
    var selected = isWebappSelected();
    if (!selected) {
        CARBON.showInfoDialog('Select applications to be stopped');
        return;
    }
    if (allWebappsSelected) {
        CARBON.showConfirmationDialog("Do you want to stop all 4 applications?",
            function () {
                location.href = 'stop_webapps.jsp?reloadAll=true';
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to stop the selected applications?",
            function () {
                document.productsForm.action = 'stop_webapps.jsp';
                document.productsForm.submit();
            }
        );
    }
}

function startWebapps() {
    var selected = isWebappSelected();
    if (!selected) {
        CARBON.showInfoDialog('Select applications to be started');
        return;
    }
    if (allWebappsSelected) {
        CARBON.showConfirmationDialog("Do you want to start all 4 applications?",
            function () {
                location.href = 'start_webapps.jsp?reloadAll=true';
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to start the selected applications?",
            function () {
                document.productsForm.action = 'start_webapps.jsp';
                document.productsForm.submit();
            }
        );
    }
}

function isWebappSelected() {
    var selected = false;
    if (document.productsForm.productId[0] != null) { // there is more than 1
        for (var j = 0; j < document.productsForm.productId.length; j++) {
            selected = document.productsForm.productId[j].checked;
            if (selected) break;
        }
    } else if (document.productsForm.productId != null) { // only 1
        selected = document.productsForm.productId.checked;
    }
    return selected;
}

function deleteProducts() {
    var selected = isWebappSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the applications to be deleted.');
        return;
    }
    if (allWebappsSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all products?",
            function () {
                location.href = '../controller/deleteProducts.jag?deleteAllWebapps=true&webappState=all';
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected applications?",
            function () {
                document.productsForm.action = '../controller/deleteProducts.jag';
                document.productsForm.submit();
            }
        );
    }
}

function selectAllInThisPage(isSelected) {
    allWebappsSelected = false;
    if (document.productsForm.productId != null &&
        document.productsForm.productId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.productsForm.productId.length; j++) {
                document.productsForm.productId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.productsForm.productId.length; j++) {
                document.productsForm.productId[j].checked = false;
            }
        }
    } else if (document.productsForm.productId != null) { // only 1
        document.productsForm.productId.checked = isSelected;
    }
    return false;
}

function selectAllInAllPages() {
    selectAllInThisPage(true);
    allWebappsSelected = true;
    return false;
}

function resetVars() {
    allWebappsSelected = false;

    var isSelected = false;
    if (document.productsForm.productId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.productsForm.productId.length; j++) {
            if (document.productsForm.productId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.productsForm.productId != null) { // only 1 sg
        if (document.productsForm.productId.checked) {
            isSelected = true;
        }
    }
    return false;
}


function searchWebapps() {
    document.searchForm.submit();
}
