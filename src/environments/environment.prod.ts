export const environment = {
  production: true, // Set to false for development mode
  apiUrl: 'http://localhost:3000/api', // Base URL for your backend API
  loggingEnabled: true, // Enable logging for debugging purposes
  featureFlags: {
    enableNewFeature: false, // Example feature flag for enabling/disabling a feature
  },
  appVersion: '1.0.0-dev', // Current app version for development
  googleAnalyticsKey: '', // Analytics key (can be empty for development)
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "500kB",
      "maximumError": "1MB"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "2kB",
      "maximumError": "4kB"
    }
  ],
  "outputHashing": "all",
};