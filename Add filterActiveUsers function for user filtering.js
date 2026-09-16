function filterActiveUsers(users) {
  if(!Array.isArray(users)) {
    return"Invalid";
}

if(users.length === 0) {
  return "Invalid";
}

for(let i=0; i<users.length; i++) {
  const user = users[i];
  if(typeof user !== 'object' || user === null || Array.isArray(user) || !("isActive" in user)) {
    return "Invalid";
  }
}

const activeUsers = users.filter(function(user){
  return user.isActive === true;
});

return activeUsers;
}
console.log(filterActiveUsers([
  { name: "A", isActive: true },
  { name: "B", isActive: false }
]));

console.log(filterActiveUsers([]));
console.log(filterActiveUsers([]));
