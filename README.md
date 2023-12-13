# Task
In this exercise, a containerized DevOps pipeline is to be created which provides a Node.js application in AKS. The easiest way to do this is to build on the example created in Lab2 and the DevOps project

As soon as a new CheckIn is created in GIT, the pipeline should be triggered and perform the following actions.
- Build a Docker image
- Store the image in a registry
- Deploy the new image in the AKS and make it available under a public IP

## Build a Docker image

## Store the image in a registry

## Deploy the new image in the AKS and make it available under a public IP

1. Firstly, two YAML files were created in the manifests folder with the names **service.yml** and **deployment.yml** <br><br>

    In summary, the YAML file **service.yml** creates a Kubernetes service of the type "LoadBalancer" with the name "SD-Exercise", which listens on port 3000 and communicates with pods that have the label "app: SD-Exercise". The load balancer enables external access to the application by distributing the incoming traffic to the corresponding pods. <br><br>

    In summary, the YAML file **deployment.yml** creates a Kubernetes deployment called "SD-Exercise", which creates a replica (pod) of the application. The pod is labeled "app: SD-Exercise" and contains a container that is created from the specified Docker image and listens on port 3000.

Used Links:
- [Deploy an Azure Kubernetes Service (AKS) cluster](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal?tabs=azure-cli)


