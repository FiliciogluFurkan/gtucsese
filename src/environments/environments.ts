export const environment = {
  production: false, // Set to false for development mode
  apiUrl: 'http://localhost:3000/api', // Base URL for your backend API
  loggingEnabled: true, // Enable logging for debugging purposes
  featureFlags: {
    enableNewFeature: false, // Example feature flag for enabling/disabling a feature
  },
  appVersion: '1.0.0-dev', // Current app version for development
  googleAnalyticsKey: '', // Analytics key (can be empty for development)
};