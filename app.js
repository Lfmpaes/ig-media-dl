const express = require('express');
const app = express();

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.send('IG');
});

app.listen(3000, () => {
    console.log('Server running...');
});
