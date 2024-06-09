pipeline {
    agent any

    environment {
        GITHUB_CREDENTIALS_ID = 'git'  // ID de las credenciales de GitHub en Jenkins
        API_PATH = 'api'               // Ruta de la carpeta de la API
        WEBSITE_PATH = 'website'       // Ruta de la carpeta del Website
        SERVERLESS_CLI = 'node_modules/.bin/sls'  // Ubicación del CLI de Serverless Framework
    }

    stages {
        stage('Checkout') {
            steps {
                // Clonar el repositorio desde GitHub usando las credenciales configuradas
                git branch: 'master', url: 'https://github.com/Julian954/PipeLineCI-CD.git', credentialsId: "${GITHUB_CREDENTIALS_ID}"
            }
        }

        stage('Setup Environment') {
            steps {
                // Usar la versión de NodeJS configurada en Jenkins
                tool name: 'Nodejs 16', type: 'NodeJSInstallation'
                // Instalar Serverless Framework globalmente si no está instalado
                script {
                    if (!fileExists(env.SERVERLESS_CLI)) {
                        sh 'npm install -g serverless'
                    }
                }
            }
        }

        stage('Install Dependencies for API') {
            steps {
                dir(env.API_PATH) {
                    // Instalar dependencias de Node.js para la API
                    sh 'npm install'
                }
            }
        }

        stage('Install Dependencies for Website') {
            steps {
                dir(env.WEBSITE_PATH) {
                    // Instalar dependencias de Node.js para el Website
                    sh 'npm install'
                }
            }
        }

        stage('Unit Tests for API') {
            steps {
                dir(env.API_PATH) {
                    // Ejecutar pruebas unitarias de la API
                    sh 'npm test'
                }
            }
        }

        stage('Unit Tests for Website') {
            steps {
                dir(env.WEBSITE_PATH) {
                    // Ejecutar pruebas unitarias del Website
                    sh 'npm test'
                }
            }
        }

        stage('Linting for API') {
            steps {
                dir(env.API_PATH) {
                    // Ejecutar el linter para verificar la calidad del código de la API
                    sh 'npm run lint'
                }
            }
        }

        stage('Linting for Website') {
            steps {
                dir(env.WEBSITE_PATH) {
                    // Ejecutar el linter para verificar la calidad del código del Website
                    sh 'npm run lint'
                }
            }
        }

        stage('Deploy API to AWS Lambda') {
            steps {
                dir(env.API_PATH) {
                    // Desplegar la API usando Serverless Framework
                    sh 'serverless deploy'
                }
            }
        }

        stage('Deploy Website to AWS Lambda') {
            steps {
                dir(env.WEBSITE_PATH) {
                    // Desplegar el Website usando Serverless Framework
                    sh 'serverless deploy'
                }
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
