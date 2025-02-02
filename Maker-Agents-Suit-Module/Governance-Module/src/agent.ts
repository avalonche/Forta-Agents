import { 
  BlockEvent,
  Finding,
  getJsonRpcUrl,
  HandleBlock, 
  HandleTransaction, 
} from 'forta-agent'
import Web3 from "web3";
import { AddressManager } from "./utils";  
import provideHatChecker from "./new.hat";
import provideLiftEventsListener from "./lift.events";
import DeployedAddressesManager from './deployed.addresses.manager';

export const SPELL_DEPLOYER: string = "0xda0c0de01d90a5933692edf03c7ce946c7c50445";
export const CHIEF_CONTRACT: string = "0x0a3f6849f78076aefaDf113F5BED87720274dDC0";
const _web3 = new Web3(getJsonRpcUrl());

const addressManager: AddressManager = 
  new DeployedAddressesManager(SPELL_DEPLOYER, _web3.eth.getTransactionCount);

export function provideHandleTransaction(addressManager: AddressManager): HandleTransaction {
  return provideLiftEventsListener(
    "MakerDAO-GM-2", 
    CHIEF_CONTRACT, 
    addressManager.isKnownAddress,
  );
};

export function provideHandleBlock(web3Call: any, addressManager: AddressManager): HandleBlock {
  const handler: HandleBlock = provideHatChecker(
    web3Call, 
    "MakerDAO-GM-1", 
    CHIEF_CONTRACT, 
    addressManager.isKnownAddress,
  );
  return async (blockEvent: BlockEvent): Promise<Finding[]> => {
    // Update the SPELL_DEPLOYER's nonce
    await addressManager.update(blockEvent.blockNumber);
    return handler(blockEvent);
  };
};

export default {
  handleTransaction: provideHandleTransaction(addressManager),
  handleBlock: provideHandleBlock(_web3.eth.call, addressManager),
}
