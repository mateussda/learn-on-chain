import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Array "mo:base/Array";

actor {
  public type Receipt = { id : Nat; courseId : Nat; amountE8s : Nat; note : Text };
  stable var nextId : Nat = 0;
  stable var receipts : [Receipt] = [];

  public func checkoutMock(courseId : Nat, amountE8s : Nat) : async Receipt {
    let r : Receipt = {
      id = nextId; courseId; amountE8s; note = "powered by canisters"
    };
    nextId += 1;
    receipts := Array.append(receipts, [r]);
    return r;
  };

  public query func list() : async [Receipt] { receipts };
}