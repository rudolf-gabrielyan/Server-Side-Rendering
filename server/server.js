import express from "express";
import router from './routes/routes';
import  { PORT, OWNER }  from './config/constants';

const app = express();
app.use("/", router);

app.listen(PORT, () => {
  console.log(`App launched on ${PORT} by ${OWNER}`);
});