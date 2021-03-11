pipeline {
	environment {
    		def APP_NAME = "Learnings2021"
    		def GIT_REPO_NAME = "Lingan-hub"
    		def DEPLOY_ENV = "dev"
	}
    	agent { dockerfile true }
	stages {
		stage('Initialize') {
			steps {
				echo 'Placeholder.'
				
							
			}
		}
		
    	}
	post { 
		success { 
		    sh 'echo "Your test execution is done and reports will be avaible at - http://tnt-aks-automator.eastus.cloudapp.azure.com/build/reports/tests/test/index.html" in sometime.'
		}
		failure { 
		    echo "Please check logs for more details."
		}
    	}
}

