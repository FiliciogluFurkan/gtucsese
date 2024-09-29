pipeline {
    agent any    
    stages {
        stage('Checkout') {
            steps {
                // Check out the source code from GitHub
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                // Example build step
                script {
                    // Run the Gradle build
                    def sudo = sh(script: 'sudo -S chown -R $(whoami):$(whoami) .', returnStatus: true)
                    def wrapper = sh(script: 'sudo npm clean install', returnStatus: true)
                    if (wrapper != 0) {
                        error "Could not install necessary dependencies"
                    }
                    def result = sh(script: 'sudo npm run build', returnStatus: true)
                    if (result != 0) {
                        error "Error while building the app"
                    }
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    // Run tests
                    def result = sh(script: 'sudo npm test', returnStatus: true)
                    if (result != 0) {
                        error "Tests failed!"
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                // Example deploy step
                echo "Deploying the project..."
                // Add your deploy commands here, e.g., `scp` or `kubectl apply`
            }
        }
    }
    
    post {
        always {
            // Actions to perform regardless of build success/failure
            echo "Cleaning up..."
        }
        success {
            echo "Build succeeded!"
        }
        failure {
            echo "Build failed!"
        }
    }
}