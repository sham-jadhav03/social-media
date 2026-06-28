import app from './src/app'
import { connectDB } from './src/config/db.ts'

connectDB();
const PORT = 3000





app.listen(PORT, ()=>{
    console.log(`Server is runnig on http://localhost:${PORT}`);
})