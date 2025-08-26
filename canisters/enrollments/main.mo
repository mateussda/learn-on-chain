import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Principal "mo:base/Principal";
import Array "mo:base/Array";

actor {
  public type Enrollment = {
    id : Nat;
    courseId : Nat;
    user : Principal;
    ts : Time.Time;
  };
  stable var nextId : Nat = 0;
  stable var store : [Enrollment] = [];

  public func enroll(courseId : Nat) : async Enrollment {
    let e : Enrollment = { id = nextId; courseId; user = Principal.fromActor(this); ts = Time.now() };
    nextId += 1;
    store := Array.append(store, [e]);
    return e;
  };

  public query func listByUser(p : Principal) : async [Enrollment] {
    var out : [Enrollment] = [];
    for (e in store.vals()) { if (e.user == p) { out := Array.append(out, [e]) } };
    out
  };
}