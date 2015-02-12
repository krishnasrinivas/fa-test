'use strict';

angular.module('faTestApp')
  .factory('fa', function ($http) {
    var retobj = {
      issuerId: undefined,
      createIssuer: function (issuer, cbk) {
        $http.post('/api/fa/entities', issuer)
          .success(function(data) {
            if (!data['0']) {
              retobj.issuerId = data['1'].id;
            }
            cbk(data);
          })
          .error(function(data, status) {
            console.log("error " + status);
          });
      },
      createachauth: function (achauth, cbk) {
        $http.post('/api/fa/ach_authorizations', achauth)
          .success(function(data) {
            cbk(data);
          })
          .error(function(data, status) {
            console.log("error " + status);
          });
      },
      createOffering: function (offer, cbk) {
        $http.post('/api/fa/offerings', offer)
          .success(function(data) {
            cbk(data);
          })
          .error(function(data, status) {
            console.log("error " + status);
          });
      },
      getOffering: function (id, cbk) {
        $http.get('/api/fa/offerings/' + id)
          .success(function(data) {
            cbk(data);
          })
          .error(function(data, status) {
            console.log("error " + status);
          });
      },
      getKycUrl: function(id, cbk) {
        $http.post('/api/fa/kyc_tokens', {entity_id:id})
          .success(function(data) {
            cbk(data);
          })
          .error(function(data, status) {
            console.log("error " + status);
            cbk(data);
          });
      },
      getEscrowAgreementUrl: function(id, cbk) {
        $http.post('/api/fa/escrow_agreements', {offering_id:id})
          .success(function(data) {
            cbk(data);
          })
          .error(function(data, status) {
            console.log("error " + status);
            cbk(data);
          });
      }
    }
    return retobj;
  });
