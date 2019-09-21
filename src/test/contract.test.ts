import {ConfirmingState} from "../main/confirmingState";
import {Contract} from "../main/contract";
import {ApprovingState} from "../main/approvingState";
import {AcceptingState} from "../main/acceptingState";
import {VerifyingState} from "../main/verifyingState";


test("should be confirming state when create a contract", () => {
    let contract = new Contract();

    expect(contract.getState()).toBeInstanceOf(ConfirmingState);
    expect(contract.getAction()).toBe("create contract");
});

test("should be approving state when confirm a confirming contract", function () {
    let contract = new Contract();

    contract.confirm();

    expect(contract.getState()).toBeInstanceOf(ApprovingState);
    expect(contract.getAction()).toBe("confirm contract");
});

test("should be accepting state when approve a approving contract", function () {
    let contract = new Contract();
    contract.confirm();

    contract.approve(false);

    expect(contract.getState()).toBeInstanceOf(AcceptingState);
    expect(contract.getAction()).toBe("approve contract");
});

test("should be verifying state when approve a approving contract with verification", function () {
    let contract = new Contract();
    contract.confirm();

    contract.approve(true);

    expect(contract.getState()).toBeInstanceOf(VerifyingState);
    expect(contract.getAction()).toBe("approve contract with verification");
});

