function get(path, params, headers) {
    return this.request("GET", path, params, headers);
}
var params = {
    id: 3,
    email: "steveyerigandev@gmail.com"
};
var headers = {
    method: "POST",
    "content-type": "application/json",
    authorization: "authtoken"
};
var path = "path";
var output = get(path, params, headers);
