pipeline {
    agent any

    stages {
          stage("run front-end"){
               steps {
                  echo "executing yarn..."
                 nodejs('Node-20,11'){
                   bat 'yarn install'
                    bat 'yarn build'
                 }
            }
          }
         stage("run backend"){
               steps {
                  echo "testing the application"
                 withGradle(){
                   bat './gradle -v'
                 }
            }
          }
         
    }
}
