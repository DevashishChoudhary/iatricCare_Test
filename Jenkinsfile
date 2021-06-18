pipeline {
  
  agent any
  
  stages {
    
        stage('Clean') {
            steps {
                sh 'npm start'
            }
        }
        stage('Test') {
            steps {
                sh 'cd /React_Test/iatricCare_Test/src'
            }
        }
    
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
  }
}
