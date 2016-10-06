angular.module("myApp").factory("multypartService",function (Restangular) {
	return {/*
		sendFile : function(file) {
			var fd = new FormData();
            fd.append('file', file);
            return Restangular.all("upload")
            .withHttpConfig({transformRequest: angular.identity})
            .customPOST(fd, '', undefined, {'Content-Type': undefined});
		}*/
		sendFile : function(fd) {
            return Restangular.all("upload")
            .withHttpConfig({transformRequest: angular.identity})
            .customPOST(fd, '', undefined, {'Content-Type': undefined});
        }
	}
});