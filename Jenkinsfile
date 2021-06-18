pipeline {
  
  agent any
  
  stages {
        stage('Test') {
            steps {
                sh 'cd /React_Test/iatricCare_Test'
            }
        }
  }
  
  stages {
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
  }
}
