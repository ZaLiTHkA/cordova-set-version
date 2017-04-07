'use strict';

var expect = require('chai').expect;
var cordovaSetVersion = require('../src/index');
var fs = require('fs-extra');

var goodPath = './test/config.good.xml';
var badPath = './test/config.bad.xml';
var missingPath = './test/config.missing.xml';
var configPath = './test/config.xml';
var expectedConfigPath = './test/config.expected.xml';
var fileParams = { encoding: 'UTF-8' };

describe('cordova-set-version', () => {
    it('should exist', () => {
        expect(cordovaSetVersion).to.exist;
    });

    describe('setVersion', () => {
        beforeEach(() => {
            fs.copySync(goodPath, configPath);
        });

        it('should exist', () => {
            expect(cordovaSetVersion).to.have.property('setVersion');
        });

        it('should be a function', () => {
            expect(typeof cordovaSetVersion.setVersion).to.equal('function');
        });

        it('should produce same content as in `config.expected.xml` when passed the argument `1.0.0`', (done) => {
            cordovaSetVersion.setVersion(configPath, '1.0.0', function (error) {
                expect(error).to.not.exist;

                var config = fs.readFileSync(configPath, fileParams);
                var expectedConfig = fs.readFileSync(expectedConfigPath, fileParams);
                expect(config).to.equal(expectedConfig);

                done();
            });
        });

        it('should return an error about missing file', (done) => {
            cordovaSetVersion.setVersion(missingPath, '1.0.0', function (error) {
                expect(error).to.exist;
                expect(error.message).to.contain('no such file or directory');
                expect(error.message).to.contain(missingPath);

                done();
            });
        });

        it('should return an error about bad file', (done) => {
            cordovaSetVersion.setVersion(badPath, '1.0.0', function (error) {
                expect(error).to.exist;
                expect(error.message).to.not.contain('no such file or directory');

                done();
            });
        });
    });
});