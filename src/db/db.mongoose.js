import dotenv from 'dotenv';

dotenv.config();

import  mongoose  from 'mongoose';

export const connection =  () => {
    const url = process.env.MONGODB_URI;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log('Database is connected'))
.catch(() => console.log('Error when I trying to connect to Database'));
}


export default mongoose;