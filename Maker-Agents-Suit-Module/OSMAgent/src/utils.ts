import Web3 from "web3";

export const OSM_CONTRACTS = [
  "0x81fe72b5a8d1a857d176c3e7d5bd2679a9b85763",
  "0xb4eb54af9cc7882df0121d26c5b97e802915abe6",
  "0xf185d0682d50819263941e5f4eacc763cc5c6c42",
  "0xf36b79bd4c0904a5f350f1e4f776b81208c13069",
  "0x7382c066801e7acb2299ac8562847b9883f5cd3c",
  "0x8067259ea630601f319fcce477977e55c6078c13",
  "0x7a5918670b0c390ad25f7bee908c1acc2d314a3c",
  "0xbed0879953e633135a48a157718aa791ac0108e4",
  "0x9b0c694c6939b5ea9584e9b61c7815e8d97d9cc7",
  "0x9eb923339c24c40bef2f4af4961742aa7c23ef3a",
  "0x5f122465bcf86f45922036970be6dd7f58820214",
  "0x3ff860c0f28d69f392543a16a397d0dae85d16de",
  "0xf363c7e351c96b910b92b45d34190650df4ae8e7",
  "0x8df8f06dc2de0434db40dcbb32a82a104218754c",
  "0x8874964279302e6d4e523fb1789981c39a1034ba",
  "0xfc8137e1a45baf0030563ec4f0f851bd36a85b7d",
  "0x8400d2edb8b97f780356ef602b1bdbc082c2ad07",
  "0xf751f24dd9cfad885984d1ba68860f558d21e52a",
  "0x25d03c2c928ade19ff9f4ffecc07d991d0df054b",
  "0x5f6dd5b421b8d92c59dc6d907c9271b1dbfe3016",
  "0xd7d31e62ae5bfc3bfaa24eda33e8c32d31a1746f",
  "0x8462a88f50122782cc96108f476dedb12248f931",
  "0x5bb72127a196392cf4ac00cf57ab278394d24e55",
  "0x32d8416e8538ac36272c44b0cd962cd7e0198489",
  "0x9a1cd705dc7ac64b50777bceca3529e58b1292f1",
  "0x65c79fcb50ca1594b025960e539ed7a9a6d434a3",
];

export const extractReliedAddress = (txnData: string): string => {
  const txnDataWithoutSelector = txnData.slice(10);
  return new Web3().eth.abi.decodeParameter(
    "address",
    txnDataWithoutSelector
  ) as any;
};

export const extractDeniedAddress = (txnData: string): string => {
  const txnDataWithoutSelector = txnData.slice(10);
  return new Web3().eth.abi.decodeParameter(
    "address",
    txnDataWithoutSelector
  ) as any;
};
