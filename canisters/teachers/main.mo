import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Array "mo:base/Array";

actor {
  public type Teacher = { id : Nat; name : Text; bio : Text; link : Text };
  stable var nextId : Nat = 0;
  stable var store : [Teacher] = [];

  public func create(name : Text, bio : Text, link : Text) : async Teacher {
    let t : Teacher = { id = nextId; name; bio; link };
    nextId += 1;
    store := Array.append(store, [t]);
    return t;
  };

  public query func list() : async [Teacher] { store };

  public query func get(id : Nat) : async ?Teacher {
    for (t in store.vals()) { if (t.id == id) return ?t };
    return null;
  };
}