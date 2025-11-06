"use strict";

let bannedUsers = [];

class User {
    constructor(username, email, role) {
        this.username = username;
        this.email = email;
        this.role = role;
    }

    showInfo() {
        return `Ім'я: ${this.username}\nІмейл: ${this.email}\nРоль: ${this.role}`;
    }
}

class Admin extends User {
    constructor(username, email) {
        super(username, email, "admin");
    }

    static banUser(user) {
        if (!(user instanceof Admin)) {
            if (!(bannedUsers.includes(user.username)))
                bannedUsers.push(user.username);
        }
    }
}


function showUserInfo() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const role = document.getElementById("role").value.trim().toLowerCase();

    if (!username || !email || !role) {
    document.getElementById("result").innerText = "Будь ласка, заповніть усі поля.";
        return;
    }

    let user;

    if (role === "admin") {
        user = new Admin(username, email);
    } else {
        user = new User(username, email, role);
    }

    const user2 = new User("Petro", "petro@example.com", "user");
    const admin1 = new Admin("Oksana", "oksana@admin.com");

    if (user instanceof Admin) {
        Admin.banUser(user2);
    }

    document.getElementById("result").innerText = user.showInfo() + `\n\nЗаблоковані користувачі: ${bannedUsers.length ? bannedUsers.join(", ") : "немає"}`;
}

function clearFields() {
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("role").value = "";
    document.getElementById("result").innerText = "";
}