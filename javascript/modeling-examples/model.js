/**
 * 
 *  User Entity example in unit-02.2
 * 
 */
class User {

    constructor(name, password, userId){
        this.name = name;
        this.password = password;
        this.userId = userId;
    }

    getName(){
        return this.name;
    }

    getPassword(){
        return this.password;
    }

    getUserId(){
        return this.userId;
    }

    updatePassword(newPassword){
        this.password = newPassword;
    }
}

class Counter {

    Counter(initialValue){
        this.count = 0;
    }

    inc(){
        this.count++;
    }

    dec(){
        this.count--;
    }

    getValue(){
        return this.count; 
    }
}

class Users {
	
	constructor() {
      this.users = new Map()
	}

	registerNewUser(userId, name, password){
		console.log("Registering new user: " + name)
		if (!this.isUserAlreadyRegistered(userId)){
			console.log("GOOD: not present")
			this.users.set(userId, new User(name, password, userId))
		} else {
			console.log("BAD: user already here")
			throw 'Duplicate id'
		}
	}

	isUserAlreadyRegistered(id){
		return this.users.get(id) != undefined
	}

	getUserById(id){
		return this.users.get(id)
	}

	getAllUsersId(){
		return Array.from(this.users.keys())
	}
}


let user = new User("Paula","secret","User-001");
console.log(user.getPassword());
user.updatePassword("secret2");
console.log(user.getPassword());

let users = new Users();

users.registerNewUser("User-001","Paula","MySecret");
users.registerNewUser("User-002","John","MySecret2");
users.registerNewUser("User-003","Linda","MySecret4");

console.log(users.getUserById("User-002"));
