// Student can enter exam only if age >= 18 AND fee is paid
let age = 20;
let feePaid = true;

if (age >= 18 && feePaid) {
  console.log("Allowed to enter the exam");
} else {
  console.log("Not Allowed to enter the exam");
}


// User can login if email is correct OR phone is correct
let emailCorrect = true;
let phoneCorrect = false;

if (emailCorrect || phoneCorrect) {
  console.log("Login successful");
} else {
  console.log("Login failed");
}


// If user is NOT blocked, they can access the website
let isBlocked = false;

if (!isBlocked) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}


// Special discount if: logged in AND (premium OR has coupon)
let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;

if (isLoggedIn && (isPremium || hasCoupon)) {
  console.log("Special discount applied");
} else {
  console.log("No discount");
}