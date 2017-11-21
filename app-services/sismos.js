(function (angular) {
    'use strict';
    angular.module('main')
        .controller('sismosCrtl', ['$scope','$http',
            function (a,$http) {
                var url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?';
                var format = 'format=geojson';
                var magnitud = '&minmagnitude='
                var  i;
                var modalBody;
                a.mensaje = '<h1>Datos de la USGS :</h1>';
                var s;var tiempo;
                 var urlFinal = url + format + magnitud + '6';
                $http.get(urlFinal).then(
                    function (response) {
                        a.nombre1 = response.data;
                        //console.log(a.nombre1);
                        modalBody = '<table><tr>';
                        angular.forEach(response.data.features, function (i,item) {
                            var date = new Date(response.data.features[item].properties.time);
                            modalBody += '<tr>'
                                +'<td>'+response.data.features[item].properties.alert +'</td>'
                                +'<td>'+response.data.features[item].properties.place +'</td>'
                                +'<td style="align-content: center !important;">'+response.data.features[item].properties.mag +'</td>'
                                +'<td>'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds() +'</td>'
                                +'</tr>'
                            //console.log(response.data.features[item].properties.title);
                        });
                        modalBody+='</tr></table>';
                        a.lista = modalBody ;
                    }
                );
            }
        ])
        .filter('timeAgo', function() {
            return function(input) {
                if (input == null) return "";
                return jQuery.timeago(input);
            };
        });
}(angular));

