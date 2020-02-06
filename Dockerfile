FROM centos:7

# update yum
RUN yum -y update
RUN yum -y install yum-utils device-mapper-persistent-data epel-release lvm2 wget git vim zsh curl epel-release httpd
RUN yum clean all

RUN yum -y groupinstall "Development Tools"

RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash -
RUN yum -y install nodejs

#RUN yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
#RUN yum install docker-ce docker-ce-cli containerd.io
#
#RUN groupadd docker && usermod -aG docker $USER && newgrp docker && systemctl enable docker && systemctl start docker

RUN cp /etc/localtime /etc/localtime.org
RUN ln -sf /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime

RUN mkdir /app

EXPOSE 80 8080

CMD ["/sbin/init"]
