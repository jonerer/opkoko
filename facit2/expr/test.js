var request = require('supertest'),
    app = require('./app')

require('should')


describe('My awesome project', function () {
    it('should have an index thing', function (done) {
        request(app).get('/').expect(200, done)
    })

    it('should have a delay thing', function (done) {
        request(app).get('/delayed').expect(200, done)
    })

    it('should have a delay thing', function (done) {
        request(app).get('/delayed').expect(200, done)
    })

    it('should have a delay thing', function (done) {
        request(app).get('/delayed').expect(200, done)
    })

    it('should have a delay thing', function (done) {
        request(app).get('/delayed').expect(200, done)
    })

    it('should have a delay thing', function (done) {
        request(app).get('/delayed').expect(200, done)
    })

    it('should have a delay thing', function (done) {
        request(app).get('/delayed').expect(200, done)
    })

    it('should have a delay thing', function (done) {
        request(app).get('/delayed').expect(200, done)
    })

    it('should have a delay thing', function (done) {
        request(app).get('/delayed').expect(200, done)
    })

    it('should have a delay thing', function (done) {
        request(app).get('/delayed').expect(200, done)
    })

    it('should have a delay thing', function (done) {
        request(app).get('/delayed').expect(200, done)
    })
})