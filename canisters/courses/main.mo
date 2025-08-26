import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Array "mo:base/Array";

actor {
  public type Course = {
    id : Nat;
    title : Text;
    description : Text;
    priceE8s : Nat;
    owner : Principal;
  };
  stable var nextId : Nat = 0;
  stable var store : [Course] = [];

  public func create(title : Text, description : Text, priceE8s : Nat) : async Course {
    let c : Course = { id = nextId; title; description; priceE8s; owner = Principal.fromActor(this) };
    nextId += 1;
    store := Array.append(store, [c]);
    return c;
  };

  public query func list() : async [Course] { store };

  public query func get(id : Nat) : async ?Course {
    for (c in store.vals()) { if (c.id == id) return ?c };
    return null;
  };
}