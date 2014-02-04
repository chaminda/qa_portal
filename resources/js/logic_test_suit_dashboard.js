var allTestPlansSelected = false;
var allTestScenariosSelected = false;


function isTestPlanSelected() {
    var selected = false;
    if (document.testPlanForm.testPlanId[0] != null) { // there is more than 1
        for (var j = 0; j < document.testPlanForm.testPlanId.length; j++) {
            selected = document.testPlanForm.testPlanId[j].checked;
            if (selected) break;
        }
    } else if (document.testPlanForm.testPlanId != null) { // only 1
        selected = document.testPlanForm.testPlanId.checked;
    }
    return selected;
}


function isTestScenarioSelected() {
    var selected = false;
    if (document.testScenariosForm.testScenarioId[0] != null) { // there is more than 1
        for (var j = 0; j < document.testScenariosForm.testScenarioId.length; j++) {
            selected = document.testScenariosForm.testScenarioId[j].checked;
            if (selected) break;
        }
    } else if (document.testScenariosForm.testScenarioId != null) { // only 1
        selected = document.testScenariosForm.testScenarioId.checked;
    }
    return selected;
}


function selectAllInTestPlanTable(isSelected) {
    allTestPlansSelected = true;
    if (document.testPlanForm.testPlanId != null &&
        document.testPlanForm.testPlanId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.testPlanForm.testPlanId.length; j++) {
                document.testPlanForm.testPlanId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.testPlanForm.testPlanId.length; j++) {
                document.testPlanForm.testPlanId[j].checked = false;
            }
        }
    } else if (document.testPlanForm.testPlanId != null) { // only 1
        document.testPlanForm.testPlanId.checked = isSelected;
    }
    return false;
}


function selectAllInTestScenarioTable(isSelected) {
    allTestPlansSelected = true;
    if (document.testScenariosForm.testScenarioId != null &&
        document.testScenariosForm.testScenarioId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.testScenariosForm.testScenarioId.length; j++) {
                document.testScenariosForm.testScenarioId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.testScenariosForm.testScenarioId.length; j++) {
                document.testScenariosForm.testScenarioId[j].checked = false;
            }
        }
    } else if (document.testScenariosForm.testScenarioId != null) { // only 1
        document.testScenariosForm.testScenarioId.checked = isSelected;
    }
    return false;
}


function deleteBuildTestPlans() {

    var selected = isTestPlanSelected();

    if (!selected) {
        CARBON.showInfoDialog('Please select the test plans to be deleted.');
        return;
    }
    if (allTestPlansSelected) {
        CARBON.showConfirmationDialog("Do you want to delete the selected test plans?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.testPlanForm.action = '../controller/deleteTestPlan.jag';
                document.testPlanForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected test results?",
            function () {
                document.testPlanForm.action = '../controller/deleteTestPlan.jag';
                document.testPlanForm.submit();
            }
        );
    }
}


function deleteBuildTestScenarios() {
    var selected = isTestScenarioSelected();

    if (!selected) {
        CARBON.showInfoDialog('Please select the test scenarios to be deleted.');
        return;
    }
    if (allTestScenariosSelected) {
        CARBON.showConfirmationDialog("Do you want to delete the selected test scenarios?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.testScenariosForm.action = '../controller/deleteTestScenario.jag';
                document.testScenariosForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected test scenarios?",
            function () {
                document.testScenariosForm.action = '../controller/deleteTestScenario.jag';
                document.testScenariosForm.submit();
            }
        );
    }
}


function resetVarsTestPlan() {
    allTestPlansSelected = false;

    var isSelected = false;
    if (document.testPlanForm.testPlanId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.testPlanForm.testPlanId.length; j++) {
            if (document.testPlanForm.testPlanId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.testPlanForm.testPlanId != null) { // only 1 sg
        if (document.testPlanForm.testPlanId.checked) {
            isSelected = true;
        }
    }
    return false;
}	


function resetVarsTestScenario() {
    allTestPlansSelected = false;

    var isSelected = false;
    if (document.testScenariosForm.testScenarioId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.testScenariosForm.testScenarioId.length; j++) {
            if (document.testScenariosForm.testScenarioId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.testScenariosForm.testScenarioId != null) { // only 1 sg
        if (document.testScenariosForm.testScenarioId.checked) {
            isSelected = true;
        }
    }
    return false;
}		
