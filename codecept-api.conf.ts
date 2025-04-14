exports.config = {
  output: './output',
  helpers: {
    REST: {
      // endpoint: 'https://pokeapi.co',
      endpoint: 'https://api.restful-api.dev',
      defaultHeaders: {
        'Content-Type': 'application/json',
      }
    }
  },
  include: {
    I: './steps_file'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps_api.ts']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.ts',
  name: 'ExampleCreateNewRepo'
}