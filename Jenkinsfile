pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                bat 'docker build -t nodejs-demoapp .'

            }
            
        }
        stage('Test'){
            steps{
                bat 'npm test'
            }
        }
        stage('Deploy'){
            steps{
                bat 'docker rm -f nodejs-demoapp 2>nul || exit /b 0'
                bat 'docker run -d -p 3000:3000 --name nodejs-demoapp nodejs-demoapp'
            }
        }
    }

}