import {ContractState} from "./contractState";
import {Contract} from "./contract";
import {AcceptingState} from "./acceptingState";
import {VerifyingState} from "./verifyingState";

export class ApprovingState implements ContractState{
    confirm(contract: Contract): void {
    }

    approve(contract: Contract, shouldBeVerified: boolean): void {
        if (shouldBeVerified) {
            contract.setState(new VerifyingState());
            contract.recordAction("approve contract with verification")
        }
        else {
            contract.setState(new AcceptingState());
            contract.recordAction("approve contract");
        }
    }

}