Setup new chain

`/Applications/geth init ./genesis.json --datadir mychaindata`
`/Applications/geth --datadir mychaindata/ --port 30304 --ipcpath /tmp/mychain.ipc --nodiscover`

Work with it

`/Applications/geth attach ipc:/tmp/mychain.ipc`

```
eth.accounts // list existing accs
personal.newAccount() // create a new acc

eth.coinbase // target acc for mining
miner.setEtherbase(eth.accounts[0]) // to set coinbase
miner.start(1) // start mining
eth.getBalance(eth.coinbase); // get the balance
web3.fromWei(eth.getBalance(eth.coinbase), "ether") // get balance in ether
```

Let's start blockchain with unlocked acc (0'st in eth.accounts) and enabled mining

`/Applications/geth --datadir mychaindata/ --port 30304 --ipcpath /tmp/mychain.ipc --nodiscover --unlock 0 --mine 1`