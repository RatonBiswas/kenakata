import bcrypt from 'bcryptjs';

const users =[
    {
        name: 'Admin User',
        email:'admin@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin : true
    },
    {
        name: 'Raton Biswas',
        email:'ratonbiswas@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin : false
    },
    {
        name: 'Raton Nana',
        email:'raton@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin : false
    },
]