const server = require('./api/server.js');

const PORT = process.env.PORT || 4010 ;

server.listen(PORT, () => {
    console.log(`
        \n ***** running 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️ on PORT ${PORT}****** \n
    `);
})