pipeline {
    agent any

    stages {
        stage('Download') {
            steps {
                git 'https://github.com/skociuba/Vite-simple-template.git'
            }
        }

        stage('Build') {
            steps {     
                bat 'npm i'
                bat 'npm run build'
                }
     
        }    


        stage('Deploy to S3') {
             steps {
         s3Upload consoleLogLevel: 'INFO', dontSetBuildResultOnFailure: false, dontWaitForConcurrentBuildCompletion: false, entries: [[bucket: '', excludedFile: '', flatten: false, gzipFiles: false, keepForever: false, managedArtifacts: false, noUploadOnFailure: false, selectedRegion: 'eu-central-1', showDirectlyInBrowser: false, sourceFile: '**/*', storageClass: 'STANDARD', uploadFromSlave: false, useServerSideEncryption: false]], pluginFailureResultConstraint: 'FAILURE', profileName: 'Kociuba Sebastian', userMetadata: []
             }
        }     
    }
}