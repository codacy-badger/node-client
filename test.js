process.env.TESTER = "1110"

const Doppler = require("./index")
const doppler = new Doppler({
  api_key: "RbZ7vIrfbOkZF6hDMKDDdhVoYA0AzBqL8An9OAOL",
  pipeline: 31,
  environment: "development_node"
})

console.log(process.env)
console.log(doppler.get("abc"))
console.log(doppler.get("TESTER"))
