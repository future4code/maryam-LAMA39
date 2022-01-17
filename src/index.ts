import app from "./app"
import { bandRouter } from "./routes/bandRouter"
import { presentationRouter } from "./routes/presentationRouter"
import { useRouter } from "./routes/userRouter"



app.use("/users", useRouter)

app.use("/bands", bandRouter)

app.use("/presentations", presentationRouter)

