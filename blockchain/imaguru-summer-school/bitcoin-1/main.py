# https://testnet.manu.backend.hamburg/faucet
# https://tchain.btc.com/
# https://testnet.blockchain.info/ru/pushtx

from pybtc import *

a = Address(testnet=True, address_type="P2PKH")
# a.address

# functional variant:
# priv = create_private_key()
# add = private_to_public(priv)

a2 = Address(testnet=True, address_type="P2PKH")

tx = Transaction(testnet=1)

tx.add_input("...", 0) # input UTXO

tx.add_output(sum_in_satoshi, address = a2.address)

tx.sign_input(0, private_key=a.private_key.key, address=)