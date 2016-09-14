const expect = require('chai').expect
const Meetup = require('../../src/meetup.js')
const http = require('http')
var request = require('supertest');

describe('Meetup', () => {
    it('should return all events from an input url', (done) => {
        const expectedResult = 200
        const meetup = new Meetup();

        meetup.makeRequest();
        setTimeout(function() {
          expect(meetup.getStatusCode()).to.equal(expectedResult)
          done()}
          ,1800);
    })
})
