#!/bin/bash

# NOTE:: use xargs -I F docker rm -v "F" on MacOS

# ref: https://lebkowski.name/docker-volumes/

echo "Docker maintenance: Cleaning space"

# remove exited containers:
docker ps --filter status=dead --filter status=exited -aq | xargs -r docker rm -v
    
# remove unused images:
docker images --no-trunc | grep '<none>' | awk '{ print $3 }' | xargs -r docker rmi

# remove unused volumes:
find '/var/lib/docker/volumes/' -mindepth 1 -maxdepth 1 -type d | grep -vFf <(
  docker ps -aq | xargs docker inspect | jq -r '.[] | .Mounts | .[] | .Name | select(.)'
) | xargs -r rm -fr

# docker 1.9 has new volume management system, so it’s way easier with this version:
docker volume ls -qf dangling=true | xargs -r docker volume rm
