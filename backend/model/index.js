const posts = require("./postsModel");
const users = require("./usersModel");
console.log(users)

posts.belongsTo(users, { foreignKey: "userId" });


module.exports = { users, posts };