module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    requireModule: ['ts-node/register'],
    require: ['step_definitions/**/*.ts', 'support/**/*.ts'],
    format: ['progress-bar', 'html:reports/report.html'],
    timeout: 30000,
  },
};