import {ConfirmingState} from "./confirmingState";
import {ContractState} from "./contractState";

export class Contract {
    private state : ContractState = new ConfirmingState();
    private action : string = "create contract";

    getState() : ContractState {
        return this.state;
    }

    getAction() : string {
        return this.action;
    }

    confirm() {
        this.getState().confirm(this);
    }

    setState(state: ContractState) {
        this.state = state;
    }

    recordAction(action: string) {
        this.action = action;
    }

    approve(shouldBeVerified: boolean) {
        this.getState().approve(this, shouldBeVerified);
    }
}