app.service("angularService", function ($http) {

    //get All DonarList
    this.GetDonarList = function () {
        var JsonData = $http.get("Home/GetDonarList");
        JsonData.then(function (obj) {
            return obj.data;
        }, function () {
            alert('Error in getting records');
        });

        return JsonData;
    };
    //this.getDonarListFromHome = function () {
    //    return $http.get("Home/GetDonarList");
    //};

    // get Employee By Id
    this.getEmployee = function (employeeID) {
        var response = $http({
            method: "post",
            url: "Home/GetEmployeeById",
            params: {
                id: JSON.stringify(employeeID)
            }
        });
        return response;
    }

    // Update Employee 
    this.updateEmp = function (employee) {
        var response = $http({
            method: "post",
            url: "Home/UpdateEmployee",
            data: JSON.stringify(employee),
            dataType: "json"
        });
        return response;
    }

    // Add Donar
    this.AddDonar = function (donar) {
        var response = $http({
            method: "post",
            url: "Create",
            data: JSON.stringify(donar),
            dataType: "json"
        });
        return response;
    }

    //Delete Employee
    this.DeleteEmp = function (employeeId) {
        var response = $http({
            method: "post",
            url: "Home/DeleteEmployee",
            params: {
                employeeId: JSON.stringify(employeeId)
            }
        });
        return response;
    }

    this.IsEmailAlreadyExist = function (email) {
        var response = $http({
            method: "post",
            url: "IsEmailAlreadyExist",
            params: {
                email: email
            }
        });
        return response;
    }
    this.CalculateAge = function (birthday) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
});