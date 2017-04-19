'use strict';

import chai from 'chai';
import chaiFiles from 'chai-files';
import fs from 'fs-extra';

import cordovaSetVersion from '../src/index';
import { tempConfigFile, tempProvidedConfigFile, entryConfigFiles, expectedXmlFiles } from './configs';
import { tempPackageFile, entryPackageFiles } from './packages';

chai.use(chaiFiles);
const expect = chai.expect;
const file = chaiFiles.file;

export default () => {
    describe('nulls', () => {
        it('(configPath, version, buildNumber, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);

            expect(cordovaSetVersion.bind(null, tempProvidedConfigFile, '2.4.9', 86, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(configPath, version, null, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);

            cordovaSetVersion(tempProvidedConfigFile, '2.4.9', null, (error) => {
                expect(error).to.not.exist;
                expect(file(tempProvidedConfigFile)).to.equal(file(expectedXmlFiles.VERSION_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(configPath, version, null, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);

            expect(cordovaSetVersion.bind(null, tempProvidedConfigFile, '2.4.9', null, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(configPath, version, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);

            expect(cordovaSetVersion.bind(null, tempProvidedConfigFile, '2.4.9', null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(configPath, null, buildNumber, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);

            cordovaSetVersion(tempProvidedConfigFile, null, 86, (error) => {
                expect(error).to.not.exist;
                expect(file(tempProvidedConfigFile)).to.equal(file(expectedXmlFiles.BUILD_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(configPath, null, buildNumber, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);

            expect(cordovaSetVersion.bind(null, tempProvidedConfigFile, null, 86, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(configPath, null, buildNumber)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);

            expect(cordovaSetVersion.bind(null, tempProvidedConfigFile, null, 86))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(configPath, null, null, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);
            fs.copySync(entryPackageFiles.GOOD, tempPackageFile);

            cordovaSetVersion(tempProvidedConfigFile, null, null, (error) => {
                expect(error).to.not.exist;
                expect(file(tempProvidedConfigFile)).to.equal(file(expectedXmlFiles.PACKAGE_VERSION_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(configPath, null, null, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);

            expect(cordovaSetVersion.bind(null, tempProvidedConfigFile, null, null, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(configPath, null, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);

            expect(cordovaSetVersion.bind(null, tempProvidedConfigFile, null, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(configPath, null, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);
            fs.copySync(entryPackageFiles.GOOD, tempPackageFile);

            cordovaSetVersion(tempProvidedConfigFile, null, (error) => {
                expect(error).to.not.exist;
                expect(file(tempProvidedConfigFile)).to.equal(file(expectedXmlFiles.PACKAGE_VERSION_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(configPath, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);

            expect(cordovaSetVersion.bind(null, tempProvidedConfigFile, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(configPath, buildNumber, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempProvidedConfigFile);

            expect(cordovaSetVersion.bind(null, tempProvidedConfigFile, 86, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, version, buildNumber, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            cordovaSetVersion(null, '2.4.9', 86, (error) => {
                expect(error).to.not.exist;
                expect(file(tempConfigFile)).to.equal(file(expectedXmlFiles.VERSION_AND_BUILD_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(null, version, buildNumber, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, '2.4.9', 86, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, version, buildNumber)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, '2.4.9', 86))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, version, null, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            cordovaSetVersion(null, '2.4.9', null, (error) => {
                expect(error).to.not.exist;
                expect(file(tempConfigFile)).to.equal(file(expectedXmlFiles.VERSION_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(null, version, null, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, '2.4.9', null, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, version, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, '2.4.9', null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, version, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            cordovaSetVersion(null, '2.4.9', (error) => {
                expect(error).to.not.exist;
                expect(file(tempConfigFile)).to.equal(file(expectedXmlFiles.VERSION_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(null, version)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, '2.4.9'))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, null, buildNumber, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            cordovaSetVersion(null, null, 86, (error) => {
                expect(error).to.not.exist;
                expect(file(tempConfigFile)).to.equal(file(expectedXmlFiles.BUILD_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(null, null, buildNumber, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, null, 86, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, null, buildNumber)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, null, 86))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, null, null, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);
            fs.copySync(entryPackageFiles.GOOD, tempPackageFile);

            cordovaSetVersion(null, null, null, (error) => {
                expect(error).to.not.exist;
                expect(file(tempConfigFile)).to.equal(file(expectedXmlFiles.PACKAGE_VERSION_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(null, null, null, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, null, null, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, null, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, null, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, null, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);
            fs.copySync(entryPackageFiles.GOOD, tempPackageFile);

            cordovaSetVersion(null, null, (error) => {
                expect(error).to.not.exist;
                expect(file(tempConfigFile)).to.equal(file(expectedXmlFiles.PACKAGE_VERSION_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(null, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, null, null, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, buildNumber, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            cordovaSetVersion(null, 86, (error) => {
                expect(error).to.not.exist;
                expect(file(tempConfigFile)).to.equal(file(expectedXmlFiles.BUILD_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(null, buildNumber, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, 86, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, buildNumber)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, 86))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(null, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);
            fs.copySync(entryPackageFiles.GOOD, tempPackageFile);

            cordovaSetVersion(null, (error) => {
                expect(error).to.not.exist;
                expect(file(tempConfigFile)).to.equal(file(expectedXmlFiles.PACKAGE_VERSION_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, null, null, null, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(version, buildNumber, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, '2.4.9', 86, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(version, null, callback)', (done) => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            cordovaSetVersion('2.4.9', null, (error) => {
                expect(error).to.not.exist;
                expect(file(tempConfigFile)).to.equal(file(expectedXmlFiles.VERSION_TO_VERSION_AND_BUILD));

                done();
            });
        });

        it('(version, null, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, '2.4.9', null, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(version, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, '2.4.9', null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });

        it('(buildNumber, null)', () => {
            fs.copySync(entryConfigFiles.VERSION_AND_BUILD, tempConfigFile);

            expect(cordovaSetVersion.bind(null, 86, null))
                .to.throw(TypeError)
                .that.has.property('message')
                .that.contains('callback')
                .that.contains('must be');
        });
    });
}