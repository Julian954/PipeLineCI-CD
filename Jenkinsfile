pipeline {
    agent any

    environment {
        GITHUB_CREDENTIALS_ID = 'git'  // ID de las credenciales de GitHub en Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                // Clonar el repositorio desde GitHub usando las credenciales configuradas
                git branch: 'master', url: 'https://github.com/Julian954/PipeLineCI-CD.git', credentialsId: "${GITHUB_CREDENTIALS_ID}"
            }
        }

        stage('Install Dependencies') {
            steps {
                // Usar la versión de NodeJS configurada en Jenkins
                tool name: 'Nodejs 16', type: 'NodeJSInstallation'
                // Instalar las dependencias de Node.js
                sh 'npm install'
            }
        }

        stage('Unit Tests') {
            steps {
                // Ejecutar pruebas unitarias (asume que hay un script de pruebas definido en package.json)
                sh 'npm test'
            }
        }

        stage('Linting') {
            steps {
                // Ejecutar el linter para verificar la calidad del código (asume que ESLint está configurado en package.json)
                sh 'npm run lint'
            }
        }
    }

    post {
        success {
            // Notificación de éxito por email (modifica los destinatarios según sea necesario)
            mail to: 'minibodowashere@gmail.com',
                 subject: "Build ${env.BUILD_ID} Succeeded",
                 body: "El build ${env.BUILD_ID} ha sido exitoso. Revisa los logs para más detalles."
        }
        failure {
            // Notificación de fallo por email (modifica los destinatarios según sea necesario)
            mail to: 'minibodowashere@gmail.com',
                 subject: "Build ${env.BUILD_ID} Failed",
                 body: "El build ${env.BUILD_ID} ha fallado. Revisa los logs para más detalles."
        }
    }
}