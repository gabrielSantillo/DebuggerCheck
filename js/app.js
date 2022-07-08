let username = "Gabriel";
let user_age = 26;
let is_member = true;

if (username === "admin") {
    console.log("You are very welcome here.");
} else if (user_age >= 30 && is_member === true) {
    console.log("You are very welcome here.");
} else {
    console.log("Welcome");
}

console.log(`Hello ${username}`);
console.log(`You are: ${user_age}`);

let max_volume = 1523;
let current_volume = 426.57896;

console.log(max_volume / current_volume);
console.log((max_volume / current_volume) * 100);

let usernames = [`user1`, `user2`, `user3`, `user4`, `user5`];
let userages = [`25`, `26`, `27`, `28`, `29`];

let first_user_name = usernames[0];
let last_user_name = usernames[4];
let middle_user_age = user_age[2];
