var should = require('should'),
    aber = require('../lib/aber.js')


describe('aber', function () {
    before(function () {

    })
    it('should be awesome', function(){
        aber.awesome().should.eql('awesome')
    })
})