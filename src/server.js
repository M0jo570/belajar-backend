const app = require("./app");
const { PORT } = require("./config");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${PORT}`));