const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("blog", "root", "password", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()
    .then(() => {
        //sequelize.sync({ force: true });
        console.log("Database bağlantısı başarılı.");
    })
    .catch((err) => {
        console.log("Database bağlantısı başarısız.", err);
    });

module.exports = sequelize;