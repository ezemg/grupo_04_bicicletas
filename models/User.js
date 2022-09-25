const fs = require ('fs');

const User ={
    fileName: './data/usersDataBase.JSON',

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));

    },

    generateId: function (){
        let allUsers = this.findALL();
        let lastUser = allUsers.pop();
        if (lastUser){
            return lastUser.id+1;
        }else{
            return 1;
        }
        
    },

    findALL: function (){
        return this.getData();
    },

    findByPk: function(id){
        let allUsers = this.findALL();
        let userFound = allUsers.find(oneUser => oneUser.id === id );
        return userFound;

    },

    findByField: function(field, text){
        let allUsers = this.findALL();
        let userFound = allUsers.find(oneUser => oneUser[field] === text );
        return userFound;

    },

    create: function(userData){
        let allUsers = this.findALL();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName,JSON.stringify(allUsers, null,' '));
        return newUser;
    },
    delete: function(id){
        let allUsers = this.findALL();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id );
        fs.writeFileSync(this.fileName,JSON.stringify(finalUsers, null,' '));
        return true;

    }
}

module.exports= User;