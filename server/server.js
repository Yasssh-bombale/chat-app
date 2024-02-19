import { app } from "./app.js";
import connectToMongoDB from "./database/mongoose.js";

app.listen(process.env.PORT, () => {
  connectToMongoDB();
  console.log(`server running on PORT:${process.env.PORT}`);
});
