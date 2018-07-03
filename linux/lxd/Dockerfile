FROM ubuntu:18.04

RUN apt update
RUN apt install -y lxd lxd-client
RUN newgrp lxd
RUN service lxd restart
RUN lxd init --auto
