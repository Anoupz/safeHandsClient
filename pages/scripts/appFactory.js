angular.module('app.appointmentFactory', [])

    .factory('Appointment', function ($http) {

        // create a new object
        var userFactory = {};

        // get all appointments
        userFactory.allAppointments = function () {
            return $http.get('http://localhost:9090/api/appointments/');
        };

        // create an appointment
        userFactory.createAppointments = function (appointmentData) {
            return $http.post('http://localhost:9090/api/appointments/', appointmentData);
        };

        // return our entire userFactory object
        return userFactory;

    });