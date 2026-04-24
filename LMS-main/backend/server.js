const express = require('express');
const app = express();
const connectDB = require('./Config/db');
const coursesRoute = require('./Routes/CoursesRoute');
const userRoute = require('./Routes/UserRoute');
const teacherRoute = require('./Routes/TeacherRoute');
const adminRoute = require('./Routes/AdminRoute');
const batchRoute = require('./Routes/BatchRoute');
require('dotenv').config()
app.use(express.json());
connectDB();
app.get('/', (req, res) => {
  res.send('Welcome to MyLMS API');
});
app.use("/courses", coursesRoute);
app.use("/users", userRoute);
app.use("/teacher", teacherRoute);
app.use("/admin", adminRoute);
app.use("/batches", batchRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});