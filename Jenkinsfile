pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/starshipgoesby/test-node.git'
            }
        }
        
        stage('Run') {
            steps {
                sh 'node app.js'
            }
        }
    }
    
    post {
        success {
            echo 'Build successful!'
            // You can add additional actions for successful build here
        }
        failure {
            echo 'Build failed!'
            // You can add additional actions for failed build here
        }
    }
}

