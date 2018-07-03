* https://linuxcontainers.org/lxd/getting-started-cli/

The first versions of Docker were based on LXC. However, since version 0.9, Docker uses its own runtime, called libcontainer. With libcontainer Docker was able to improve performance, as it had direct access to security modules like namespaces, cgroups, and more.

### How is Docker different from LXC?

Unlike LXC which is an OS container, Docker is an application container. LXC runs multiple sandboxed processes per container, whereas Docker containers run only a single process per container.

Additionally, Docker handles storage very differently from LXC. LXC stores data statefully by default. Docker, on the other hand, uses the “Copy on write” principle to store stateless data written by applications into containers. This data is deleted when the container is deleted or restarted. That said, Docker has since added the ability to store stateful data using its Volumes feature. Still, the way both technologies handle storage is quite different.

One way Docker trumps LXC is with its registry service. Docker Hub is the registry which stores container images—both public and private. It’s where anyone can download a container image and spin up a new container from it. This makes Docker containers more shareable than LXC. Docker Hub is one of the key reasons Docker skyrocketed to popularity—It enables an ecosystem to grow and flourish around Docker’s core container technology. Pretty much every IT vendor has their software packaged as an official container image and hosted on Docker Hub for any developer to download and use.

```docker-compose run ubuntu bash```
