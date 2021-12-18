---
id: docker
sidebar_label: General
hide_title: true
---

# Docker

Docker is a DevOps Tool

**DevOps** is a software development approach which involves **Continuous Development, Continuous Testing, Continuous Integration, Continuous Deployment & Continuous Monitoring** of the software throughout its development lifecycle.

Docker Containers are light weight Alternatives of VM's (virtual machines), they avoid pre-allocating RAM or disc space as in VM

Advantage of Docker is to have same computing environment for all Software delivery lifecycle i.e. dev, test, stage & prod

Helpful in creating Microservice Architecture

**Docker Image →** Instance of Application at a stage with all Dependencies and libraries | Read only template used to create containers

**Docker Container →** Runtime Instance of Docker Image

**Docker Hub →** cloud repository for Docker Image (Public/ Private repository)

Docker Registry is a storage component for Docker Images

**Terminal** **Commands**

```bash
**docker login** -u <docker-registry-username> → #login to hub
**docker pull <Image_name>** -> #pulls a new Docker image from Docker Hub and stored in local repo
**docker push <docker-registry-username>/<docker-image-name>** → #push the image to hub
**docker commit -m <Commit Message> -a <Author Name> <container_id> <repository>/<new_image_name> ->** #creates a new image of an edited container on the local repo
**docker export --output=<newTarFile> <Image_Name>/<Container_ID> ->** #export a Docker Image into a tar file in your local system
**docker import <path_to_tar_file> ->** #used to import the contents of a tar file into your local repo

**docker --version** -> #Returns the version of Docker which is installed
**docker --help** -> #Returns a list of commands available in Docker along with the possilbe flags.
**docker ps** → #lists down all the active/running containers
**docker ps -a** → #lists down all active,inactive containers
**docker ps -l** → #lists down latest container
**docker images** → #lists all the images found in local repository
**docker build -t <Image_Name>:<Tag> . -> #**build the docker image from Dockerfile in the same directory, by giving path as (.) period
**docker run -p <host_port>:<container_port> --name=<Container_name_you_want> <Image_NAME> → #**run image as container, with port mapping -p
	-p -> #flag for port mapping
	--name -> give a name to the container
	-it -> run with interactive terminal
	-d -> detached mode (not blocking a terminal instance)
**docker start <CONTAINER_ID> or <NAME>** → #to start a stopped container
**docker stop <CONTAINER_ID> or <NAME>** → #to stop a running container
**docker kill <CONTAINER_ID> or <NAME>** → #to force stop a running container
**docker rm <CONTAINER_ID> or <NAME>** → #to remove the container
**docker rmi <IMAGE_ID> -> #**to remove the image
**docker exec** **<IMAGE_ID>** -> #used to access BASH of any active container
**docker container logs** **<IMAGE_ID>** -> #shows all logs related to the container
**docker container rm** **<IMAGE_ID>** -> #removes the container 
**docker tag <old_name> <new_name> ->** #Tag a contianer to a new Name, to push it to hub

```