var allSelected = false;

function isVersionBuildSelected() {
    var selected = false;
    if (document.buildsForm.buildId[0] != null) { // there is more than 1
        for (var j = 0; j < document.buildsForm.buildId.length; j++) {
            selected = document.buildsForm.buildId[j].checked;
            if (selected) break;
        }
    } else if (document.buildsForm.buildId != null) { // only 1
        selected = document.buildsForm.buildId.checked;
    }
    return selected;
}

function deleteVersionBuilds() {
    var selected = isVersionBuildSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the product versions to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all product versions?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.productVersionForm.action = '../controller/deleteProductVersions.jag';
                document.productVersionForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected product versions?",
            function () {
                document.productVersionForm.action = '../controller/deleteProductVersions.jag';
                document.productVersionForm.submit();
            }
        );
    }
}

function selectAllInBuildTable(isSelected) {
    allSelected = false;
    if (document.buildsForm.buildId != null &&
        document.buildsForm.buildId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.buildsForm.buildId.length; j++) {
                document.buildsForm.buildId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.buildsForm.buildId.length; j++) {
                document.buildsForm.buildId[j].checked = false;
            }
        }
    } else if (document.buildsForm.buildId != null) { // only 1
        document.buildsForm.buildId.checked = isSelected;
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
    if (document.productVersionForm.versionId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.productVersionForm.versionId.length; j++) {
            if (document.productVersionForm.versionId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.productVersionForm.versionId != null) { // only 1 sg
        if (document.productVersionForm.versionId.checked) {
            isSelected = true;
        }
    }
    return false;
}			


			function selectAllInTable1(isSelected) {
                                     allWebappsSelected = false;
                                     if (document.WSO2_QAP_BUILD_form1.WSO2_QAP_BUILD != null &&
                                               document.WSO2_QAP_BUILD_form1.WSO2_QAP_BUILD[0] != null) { // there is more than 1
                                      if (isSelected) {
                                       for (var j = 0; j < document.WSO2_QAP_BUILD_form1.WSO2_QAP_BUILD.length; j++) {
                                        document.WSO2_QAP_BUILD_form1.WSO2_QAP_BUILD[j].checked = true;
                                     }
                                  } else {
                                    for (j = 0; j < document.WSO2_QAP_BUILD_form1.WSO2_QAP_BUILD.length; j++) {
                                     document.WSO2_QAP_BUILD_form1.WSO2_QAP_BUILD[j].checked = false;
                                  }
                               }
                                           } else if (document.WSO2_QAP_BUILD_form1.WSO2_QAP_BUILD != null) { // only 1
                                            document.WSO2_QAP_BUILD_form1.WSO2_QAP_BUILD.checked = isSelected;
                                         }
                                         return false;
                                      }

                                      function selectAllInTable2(isSelected) {
                                        allWebappsSelected = false;
                                        if (document.webappsForm2.webappFileName != null &&
                                               document.webappsForm2.webappFileName[0] != null) { // there is more than 1
                                         if (isSelected) {
                                          for (var j = 0; j < document.webappsForm2.webappFileName.length; j++) {
                                           document.webappsForm2.webappFileName[j].checked = true;
                                        }
                                     } else {
                                       for (j = 0; j < document.webappsForm2.webappFileName.length; j++) {
                                        document.webappsForm2.webappFileName[j].checked = false;
                                     }
                                  }
                                           } else if (document.webappsForm2.webappFileName != null) { // only 1
                                            document.webappsForm2.webappFileName.checked = isSelected;
                                         }
                                         return false;
                                      }

                                      function selectAllInTable3(isSelected) {
                                        allWebappsSelected = false;
                                        if (document.webappsForm3.webappFileName != null &&
                                               document.webappsForm3.webappFileName[0] != null) { // there is more than 1
                                         if (isSelected) {
                                          for (var j = 0; j < document.webappsForm3.webappFileName.length; j++) {
                                           document.webappsForm3.webappFileName[j].checked = true;
                                        }
                                     } else {
                                       for (j = 0; j < document.webappsForm3.webappFileName.length; j++) {
                                        document.webappsForm3.webappFileName[j].checked = false;
                                     }
                                  }
                                           } else if (document.webappsForm3.webappFileName != null) { // only 1
                                            document.webappsForm3.webappFileName.checked = isSelected;
                                         }
                                         return false;
                                      }
