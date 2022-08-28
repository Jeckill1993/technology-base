const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const users = require('./mockDatabase');  //imitate database, connect to database later

const app = express();
app.use(cors());


const root = {
    getAllUsers: () => {
        return users;
    },

    getUser: ({ id }) => {
        return users.find((user) => {
            user.id === id;
        })
    },

    createUser: ({ input }) => {
        const id = Date.now;
        const user = {
            id,
            ...input
        }

        users.push(user);

        return user;
    }
}


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => {
    console.log('server started on port 5000');
})