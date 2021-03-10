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
				//sh 'rm -f /var/lib/jenkins/workspace/FEI_PetClinic_Protractorui/`date +"%Y-%m-%d"`.html'
				sh """
					JOB_NAME=${env.JOB_BASE_NAME}
					rm -f /var/lib/jenkins/workspace/\$JOB_NAME/cucumber_report.html
					cp /app/cucumber_report.html /var/lib/jenkins/workspace/\$JOB_NAME
				   """
				//sh 'cp /app/Reports/`date +"%Y-%m-%d"`.html /var/lib/jenkins/workspace/${env.BUILD_TAG}'
				
			}
		}
		
    	}
	post { 
		success { 
		    echo "Your Test execution is done and reports at - cucumber_report.html"
		}
		failure { 
		    echo "Please check logs for more details."
		}
    	}
}
