const User = {
  _email: "sh@gmail.com",
  password: "abc",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const siraj = Object.create(User);
console.log(siraj.email);
