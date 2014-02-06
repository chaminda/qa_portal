var allSelected = false;


function isAvailableFeatureSelected() {
    var selected = false;
    if (document.availablefeaturesForm.WSO2_QAP_FEATURE_ID[0] != null) { // there is more than 1
        for (var j = 0; j < document.availablefeaturesForm.WSO2_QAP_FEATURE_ID.length; j++) {
            selected = document.availablefeaturesForm.WSO2_QAP_FEATURE_ID[j].checked;
            if (selected) break;
        }
    } else if (document.availablefeaturesForm.WSO2_QAP_FEATURE_ID != null) { // only 1
        selected = document.availablefeaturesForm.WSO2_QAP_FEATURE_ID.checked;
    }
    return selected;
}

function deleteFeature() {
    var selected = isAvailableFeatureSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the samples to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all samples?",
            function () {

                document.availablefeaturesForm.action = '../controller/deleteSample.jag';
                document.availablefeaturesForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected samples?",
            function () {
                document.availablefeaturesForm.action = '../controller/deleteSample.jag';
                document.availablefeaturesForm.submit();
            }
        );
    }
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.availablefeaturesForm.WSO2_QAP_FEATURE_ID != null &&
        document.availablefeaturesForm.WSO2_QAP_FEATURE_ID[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.availablefeaturesForm.WSO2_QAP_FEATURE_ID.length; j++) {
                document.availablefeaturesForm.WSO2_QAP_FEATURE_ID[j].checked = true;
            }
        } else {
            for (j = 0; j < document.availablefeaturesForm.WSO2_QAP_FEATURE_ID.length; j++) {
                document.availablefeaturesForm.WSO2_QAP_FEATURE_ID[j].checked = false;
            }
        }
    } else if (document.availablefeaturesForm.WSO2_QAP_FEATURE_ID != null) { // only 1
        document.availablefeaturesForm.WSO2_QAP_FEATURE_ID.checked = isSelected;
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
    if (document.availablefeaturesForm.WSO2_QAP_FEATURE_ID[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.availablefeaturesForm.WSO2_QAP_FEATURE_ID.length; j++) {
            if (document.availablefeaturesForm.WSO2_QAP_FEATURE_ID[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.availablefeaturesForm.WSO2_QAP_FEATURE_ID != null) { // only 1 sg
        if (document.availablefeaturesForm.WSO2_QAP_FEATURE_ID.checked) {
            isSelected = true;
        }
    }
    return false;
}

function addFeature()
{
    var selected = isAvailableFeatureSelected();

}

