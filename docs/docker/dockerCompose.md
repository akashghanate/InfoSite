---
id: dockerCompose
sidebar_label: Docker Compose
hide_title: true
---


## **Docker Compose**

Docker Compose makes it easier to configure and run applications made up of **multiple containers**. All containers are defined in one YAML file and then run using a single command

Each Container will run a stand-alone application and it can communicate with other containers present in the same host

Eg: **MEAN Stack Application** [MongoDB, ExpressJS, Angular, NodeJS] using different containers.

docker-compose.yml  (markup language)→ To run more than one container for a service

Eg: docker-compose.yml

```yaml
version: '3.0' # specify docker-compose vesion

#Define the services/containers to be run
services:
	angular: # name of the first service
		build: angular-app # specify the directory of Dockefile for angular service
		ports: 
			- "4200:4200" #specify ports mapping 

	express: # name of the second service
		build: express-server # specify the directory of Dockefile for express service
		ports: 
			- "3000:3000" #specify ports mapping 
		links: 
			- database # link this service to the database service

	database: # name of the third service
		image: mongo # specify image to build container from
		ports: 
		- "27017:27017" #specify ports forewarding 
```

**Terminal Commands:**

```bash
#This commands are executed in the directory where **YAML** file is present for bulding the Compose.
**docker-compose build -> #**to build the compose  using YAML file
**docker-compose up ->** #to start compose container srevice 
```
