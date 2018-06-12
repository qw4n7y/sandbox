const cluster = require('cluster');

if (cluster.isMaster) {
  const numCPUs = require('os').cpus().length;
  console.log(`numCPUs = ${numCPUs}`);

  let workers = [];

  for (let i = 0; i < numCPUs; i++) {
    let worker = cluster.fork();
    workers.push(worker);

    worker.on('message', message => {
      console.log(`Master got from worker ${worker.process.pid}: ${JSON.stringify(message, null, 2)}`);
    });
  }

  for (let worker of workers) {
    worker.send('Hello from Master');
  }
} else {
  console.log(`Hi, i am worker ${process.pid}`);

  process.on('message', message => {
    console.log(`Worker ${process.pid} got from Master: ${JSON.stringify(message, null, 2)}`);
  });

  process.send(`Hello from Worker ${process.pid}`);

  process.exit();
}