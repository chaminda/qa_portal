var allSamplesSelected = false;

function isSampleSelected() {
    var selected = false;
    if (document.SampleForm.sampleId[0] != null) { // there is more than 1
        for (var j = 0; j < document.SampleForm.sampleId.length; j++) {
            selected = document.SampleForm.sampleId[j].checked;
            if (selected) break;
        }
    } else if (document.SampleForm.sampleId != null) { // only 1
        selected = document.SampleForm.sampleId.checked;
    }
    return selected;
}

function selectAllInSampleTable(isSelected) {
    allSamplesSelected = true;
    if (document.SampleForm.sampleId != null &&
        document.SampleForm.sampleId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.SampleForm.sampleId.length; j++) {
                document.SampleForm.sampleId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.SampleForm.sampleId.length; j++) {
                document.SampleForm.sampleId[j].checked = false;
            }
        }
    } else if (document.SampleForm.sampleId != null) { // only 1
        document.SampleForm.sampleId.checked = isSelected;
    }
    return false;
}

function deleteSamples() {
    var selected = isSampleSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the sample to be deleted.');
        return;
    }
    if (allSamplesSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all samples?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.SampleForm.action = '../controller/deleteSampleFeatureDashboard.jag';
                document.SampleForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected samples?",
            function () {
                document.SampleForm.action = '../controller/deleteSampleFeatureDashboard.jag';
                document.SampleForm.submit();
            }
        );
    }
}


function resetVars() {
    allSamplesSelected = false;

    var isSelected = false;
    if (document.SampleForm.sampleId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.SampleForm.sampleId.length; j++) {
            if (document.SampleForm.sampleId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.SampleForm.sampleId != null) { // only 1 sg
        if (document.SampleForm.sampleId.checked) {
            isSelected = true;
        }
    }
    return false;
}