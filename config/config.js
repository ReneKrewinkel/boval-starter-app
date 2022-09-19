const env = "dev"

const loginUrl = env === "dev" ? "https://dummyjson.com/users/1" : "productie-url"
const dashboardUrl = env === "dev" ? "https://dummyjson.com/users/" : "productie-url"

const config = {
     loginUrl: loginUrl,
     dashboardUrl: dashboardUrl
}

export default config