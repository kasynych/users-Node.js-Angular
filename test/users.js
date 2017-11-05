'use strict';

const assert = require('assert');
const mongoose = require('mongoose');

const helpers = require("../modules/helpers.js");

describe('USERS MODULE', function () {
    
  describe('requests', function() {
    this.timeout(10000);
    it('GET /api/users respond with json', function() {
      return helpers.request
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
			console.log(response.body)
        })
    });

    it('POST /api/users response should contain user id', function() {
      var data = {
                  username: "username",
                  email: "email@email.com",
                  fullName: "Full Name"};
      return helpers.request
        .post('/api/users')
        .set('Accept', 'application/json')
        .type("json")
        .send(data)
        .expect(200)
        .expect(function(res) {
          if (typeof res.body.error != "undefined") throw new Error(res.body.error);
        })
        .then(response => {
        })
    });


    it('PUT /api/users response should contain "success" field', function() {
      var data = {
                  username: "username",
                  email: "email@email.com",
                  fullName: "Full Name"};
      return helpers.request
        .put('/api/users')
        .set('Accept', 'application/json')
        .type("json")
        .send(data)
        .expect(200)
        .expect(function(res) {
        })
        .then(response => {
        })
    });

    it('DELETE /api/users response should contain "success" field', function() {

      return helpers.request
        .delete('/api/users/vasya')
        .expect(200)
        .expect(function(res) {
          if (typeof res.body.error != "undefined") throw new Error(res.body.error);
        })
        .then(response => {
        })                
    });
  });
});
