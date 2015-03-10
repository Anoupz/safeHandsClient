angular.module('app.pageController', ['app.appointmentFactory', 'app.authFactory'])

    .controller('homeController', function ($rootScope,$location, Auth) {
        var homeCtl = this;
        // get info if a person is logged in
        homeCtl.loggedIn = Auth.isLoggedIn();

        // check to see if a user is logged in on every request
        $rootScope.$on('$routeChangeStart', function () {
            homeCtl.loggedIn = Auth.isLoggedIn();

            // get user information on page load
            homeCtl.user = '';

            Auth.getUser()
                .then(function (data) {
                    console.log(data);
                });
        });


        // function to handle logging out
        homeCtl.doLogout = function () {
            Auth.logout();
            $location.path('/');
        };
    })

    .controller('loginController', function ($rootScope, $location, Auth) {
        var loginCtrl = this;
        loginCtrl.doLogin = function () {

            loginCtrl.processing = true;
            // clear the error
            loginCtrl.error = '';

            Auth.login(loginCtrl.loginData.username, loginCtrl.loginData.password)
                .success(function (data) {
                    loginCtrl.processing = false;

                    // if a user successfully logs in, redirect to users page
                    if (data.success)
                        $location.path('/appointments');
                    else
                        loginCtrl.error = data.message;

                });
        };
    })

    .controller('formController', function (Appointment) {
        var form = this;
        form.createAppointment = function () {
            var postData = {};
            postData.firstName = form.formInfo.firstName;
            postData.lastName = form.formInfo.lastName;
            postData.phone = form.formInfo.phone;
            postData.emailId = form.formInfo.email;
            postData.speciality = form.formInfo.speciality;
            postData.appointmentDate = form.formInfo.appointmentDate;
            postData.appointmentTime = form.formInfo.appointmentTime;
            console.log(postData);
            Appointment.createAppointments(postData)
                .success(function (data) {
                    form.formInfo = {};
                    console.log('success' + data);
                    if (data.success) {
                        $location.path('/');
                        form.formInfo = {};
                        form.errorMessage = data.message;
                    }
                    else
                        form.errorMessage = data.message;

                });

        };
    })
    .controller('appointmentController', function (Appointment) {
        var appointmentCtrl = this;
        appointmentCtrl.message = 'You are on appointment Page';
        Appointment.allAppointments()
            .success(function (data) {
                console.log('get Appointments' + data);
            });

    });

