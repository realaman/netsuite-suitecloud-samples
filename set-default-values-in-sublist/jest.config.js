/* eslint-disable max-len */
const SuiteCloudJestConfiguration = require('@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration')
const cliConfig = require('./suitecloud.config')

module.exports = SuiteCloudJestConfiguration.build({
  'projectFolder': cliConfig.defaultProjectFolder,
  'projectType': SuiteCloudJestConfiguration.ProjectType.ACP,
  'customStubs': [
    {
      'module': 'N/log',
      'path': '<rootDir>/customStubs/log.js'
    }, {
      'module': 'N/currentRecord',
      'path': '<rootDir>/customStubs/currentRecord.js'
    }, {
      'module': 'N/currentRecord/instance',
      'path': '<rootDir>/customStubs/CurrentRecordInstance.js'
    }
  ]
})
