import EmbarkJS from '../embarkjs';
let IBountyContractJSONConfig = {"contract_name":{"className":"IBountyContract","args":[],"code":"","runtimeBytecode":"","realRuntimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"acceptSolution(bytes32,address)":"584d192c","addBounty(bytes,bytes,bytes,uint256,uint256)":"2a6050e9","addBountyOfferToken(bytes,bytes,bytes,uint256,uint256,address,uint256)":"7f8cb3a6","bountyExists(bytes32)":"55086305","bountyExpired(bytes32)":"37232b90","endDispute(bytes32)":"32cd3bfa","getUserAcceptedBounties()":"fc014b21","getUserPostedBounties()":"eeb00680","getUserRejectedBounties()":"bf29e303","getaddresseofBountyHunters(bytes32)":"9409c90e","pauseBounty(bytes32)":"ff108ecd","proposeSolution(bytes32,string)":"61183729","rejectSolution(bytes32,string,address)":"831da231","suspendUser(address)":"1e153acb","updateUserRanking(uint256,address)":"9f1c8417","userExists()":"eae6d4da"},"abiDefinition":[{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"suspendUser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"title","type":"bytes"},{"name":"description","type":"bytes"},{"name":"category","type":"bytes"},{"name":"endDate","type":"uint256"},{"name":"difficulty","type":"uint256"}],"name":"addBounty","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"bountyId","type":"bytes32"}],"name":"endDispute","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"bountyId","type":"bytes32"}],"name":"bountyExpired","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"bountyId","type":"bytes32"}],"name":"bountyExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bountyId","type":"bytes32"},{"name":"bountyHunterAddress","type":"address"}],"name":"acceptSolution","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bountyId","type":"bytes32"},{"name":"solutionHash","type":"string"}],"name":"proposeSolution","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"title","type":"bytes"},{"name":"description","type":"bytes"},{"name":"category","type":"bytes"},{"name":"endDate","type":"uint256"},{"name":"difficulty","type":"uint256"},{"name":"tokenAddress","type":"address"},{"name":"amount","type":"uint256"}],"name":"addBountyOfferToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bountyId","type":"bytes32"},{"name":"solutionHash","type":"string"},{"name":"bountyHunter","type":"address"}],"name":"rejectSolution","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"bountyId","type":"bytes32"}],"name":"getaddresseofBountyHunters","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"rank","type":"uint256"},{"name":"user","type":"address"}],"name":"updateUserRanking","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getUserRejectedBounties","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"userExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserPostedBounties","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserAcceptedBounties","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bountyId","type":"bytes32"}],"name":"pauseBounty","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"Id","type":"bytes32"}],"name":"bountyIdLogger","type":"event"}],"filename":"C:\\Users\\g14m1190\\Documents\\GitHub\\bounty\\.embark\\contracts\\interfaces\\IBountyContract.sol","originalFilename":"contracts\\interfaces\\IBountyContract.sol","path":"C:\\Users\\g14m1190\\Documents\\GitHub\\bounty\\contracts\\interfaces\\IBountyContract.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"","runtime_bytecode":"","real_runtime_bytecode":"","swarm_hash":"","gas_estimates":null,"function_hashes":{"acceptSolution(bytes32,address)":"584d192c","addBounty(bytes,bytes,bytes,uint256,uint256)":"2a6050e9","addBountyOfferToken(bytes,bytes,bytes,uint256,uint256,address,uint256)":"7f8cb3a6","bountyExists(bytes32)":"55086305","bountyExpired(bytes32)":"37232b90","endDispute(bytes32)":"32cd3bfa","getUserAcceptedBounties()":"fc014b21","getUserPostedBounties()":"eeb00680","getUserRejectedBounties()":"bf29e303","getaddresseofBountyHunters(bytes32)":"9409c90e","pauseBounty(bytes32)":"ff108ecd","proposeSolution(bytes32,string)":"61183729","rejectSolution(bytes32,string,address)":"831da231","suspendUser(address)":"1e153acb","updateUserRanking(uint256,address)":"9f1c8417","userExists()":"eae6d4da"},"abi":[{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"suspendUser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"title","type":"bytes"},{"name":"description","type":"bytes"},{"name":"category","type":"bytes"},{"name":"endDate","type":"uint256"},{"name":"difficulty","type":"uint256"}],"name":"addBounty","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"bountyId","type":"bytes32"}],"name":"endDispute","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"bountyId","type":"bytes32"}],"name":"bountyExpired","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"bountyId","type":"bytes32"}],"name":"bountyExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bountyId","type":"bytes32"},{"name":"bountyHunterAddress","type":"address"}],"name":"acceptSolution","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bountyId","type":"bytes32"},{"name":"solutionHash","type":"string"}],"name":"proposeSolution","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"title","type":"bytes"},{"name":"description","type":"bytes"},{"name":"category","type":"bytes"},{"name":"endDate","type":"uint256"},{"name":"difficulty","type":"uint256"},{"name":"tokenAddress","type":"address"},{"name":"amount","type":"uint256"}],"name":"addBountyOfferToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bountyId","type":"bytes32"},{"name":"solutionHash","type":"string"},{"name":"bountyHunter","type":"address"}],"name":"rejectSolution","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"bountyId","type":"bytes32"}],"name":"getaddresseofBountyHunters","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"rank","type":"uint256"},{"name":"user","type":"address"}],"name":"updateUserRanking","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getUserRejectedBounties","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"userExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserPostedBounties","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserAcceptedBounties","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bountyId","type":"bytes32"}],"name":"pauseBounty","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"Id","type":"bytes32"}],"name":"bountyIdLogger","type":"event"}]};
let IBountyContract = new EmbarkJS.Blockchain.Contract(IBountyContractJSONConfig);
export default IBountyContract;
