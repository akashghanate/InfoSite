---
id: dockerfile
sidebar_label: DockerFile
hide_title: true
---

## **Dockerfile → File consisting of c**ommands to build Image | format: [ command + arguments ]

```bash
# Comment line
RUN echo "Hello" | command = RUN, Argument1 = echo, Argument2= "Hello"
```

### Commands

1. **FROM** → it defines the base image to use to start the build process | **Usage**: ```FROM <Image_Name>``` (Eg:  FROM Ubuntu )
2. **RUN →** The RUN command is the central executing directive for Dockerfiles. it takes a **command as its argument** and runs it to form the image during build. | **Usage:** ```RUN <Command>``` (Eg: RUN apt-get update)
3. **CMD →** The CMD command similar to RUN can be used for executing a specific command. However, unlike RUN **it is not executed during build**, **but when a container is instantiated** using the image being built | **Usage :** CMD application "argument1" "argument2" ... (Eg: CMD "echo" "Hello")
4. **ENTRYPOINT →** ENTRYPOINT argument sets the concrete default application that is used every time a container is created using the image | **Usage :** ENTRYPOINT application "argument1" "argument2" ... 
    
    Note: Arguments are optional, they can be provided by CMD or during creating a container.
    entrypoint can override CMD command, its the first execution point in a container even before cmd
    
5. **ADD/COPY →** The ADD/COPY command gets two arguments: **a source** and **a destination**. it basically copies the files from the source on the host into the **container's own filesystem** at the set destination | **Usage:** ```ADD <source directory> <destination directory>```
6. **ENV →** The ENV command is used to set the environment variables. These variable consist of "key value" pairs which can be accessed within the container by **scripts** and **applications** alike. | **Usage:** ENV key value (Eg: ENV SERVER_WORKS 4)
7. **WORKDIR →** The WORKDIR directive is used to set where the command defined with CMD is to be executed | **Usage:** WORKDIR /path
8. **EXPOSE →** The EXPOSE command is used to associate a specified port to enable networking between the running process inside the container to the outside world (i.e the host), mostly used in frontend applications, so the application will be active on this port number inside the container, port mapping to host machine can be done while running the container | **Usage:** ```EXPOSE <port>``` (Eg: EXPOSE 8080)
9. **MAINTAINER →** This non-executing command declares the author, has to be written after FROM command| **Usage:** ```MAINTAINER <Name>```
10. **USER →** The USER directive is used to set UID (or Username) which is to run the container based on the image being built. This is used to switch User access from root to other User for the Application.| **Usage:** USER <UID/>
11. **VOLUME →** The VOLUME command is used to enable access from your container to a directory on the host machine (i.e mounting it) | **Usage:** VOLUME ["/dir1","/dir2",...] (Eg: VOLUME ["/my_files"])