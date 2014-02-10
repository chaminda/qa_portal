var allSelected = false;


function isAutoTestClassSelected() {
    var selected = false;
    if (document.autoTestclassForm.productId[0] != null) { // there is more than 1
        for (var j = 0; j < document.autoTestclassForm.productId.length; j++) {
            selected = document.autoTestclassForm.productId[j].checked;
            if (selected) break;
        }
    } else if (document.autoTestclassForm.productId != null) { // only 1
        selected = document.autoTestclassForm.productId.checked;
    }
    return selected;
}

function deleteAutoTestClass() {
    var selected = isAutoTestClassSelected()
    if (!selected) {
        CARBON.showInfoDialog('Please select the applications to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all auto test classes?",
            function () {
                //location.href = '../controller/deleteProducts.jag?deleteAllWebapps=true&webappState=all';
                document.autoTestclassForm.action = '../controller/deleteProducts.jag';
                document.autoTestclassForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected auto test classes?",
            function () {
                document.autoTestclassForm.action = '../controller/deleteProducts.jag';
                document.autoTestclassForm.submit();
            }
        );
    }
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.autoTestclassForm.productId != null &&
        document.autoTestclassForm.productId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.autoTestclassForm.productId.length; j++) {
                document.autoTestclassForm.productId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.autoTestclassForm.productId.length; j++) {
                document.autoTestclassForm.productId[j].checked = false;
            }
        }
    } else if (document.autoTestclassForm.productId != null) { // only 1
        document.autoTestclassForm.productId.checked = isSelected;
    }
    return false;
}

function selectAllInAllPages() {
    selectAllInThisPage(true);
    allSelected = true;
    return false;
}

function resetVars() {
    allSelected = false;

    var isSelected = false;
    if (document.autoTestclassForm.productId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.autoTestclassForm.productId.length; j++) {
            if (document.autoTestclassForm.productId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.autoTestclassForm.productId != null) { // only 1 sg
        if (document.autoTestclassForm.productId.checked) {
            isSelected = true;
        }
    }
    return false;
}

