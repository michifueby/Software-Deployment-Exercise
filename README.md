# Task
In this exercise, a containerized DevOps pipeline is to be created which provides a Node.js application in AKS. The easiest way to do this is to build on the example created in Lab2 and the DevOps project

As soon as a new CheckIn is created in GIT, the pipeline should be triggered and perform the following actions.
- Build a Docker image
- Store the image in a registry
- Deploy the new image in the AKS and make it available under a public IP
