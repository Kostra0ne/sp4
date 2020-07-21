/**
 * BOOLEAN - TABLE OF TRUTH :)
 *
 * true  && true   => true
 * false && false  => false
 * true  && false  => false
 * false && true   => false
 *
 * true  || true   => true
 * false || false  => false
 * true  || false  => true
 * false || true   => true
 *
 */

const r1 = !!undefined || true;
const r2 = Boolean(undefined) || true;

// DEFAULTS
const r5 = "Jimmy Foo" || "Default Username";
const r6 = null || "Default Username";

// RESULTS
console.log(r1, r2, r3, r4, r5, r6);

// GUARDS
const r3 = "" && 42;
const r4 = "hey" && 42;


// NOTE => In React, we will frequently use the Guard Operator