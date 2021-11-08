type ParamsTypes = {
    id: number,
    email: string,
}
type HeadersTypes = {
    method: string,
    "content-type": string,
    authorization: string,
}

type Path = string

interface Ftype {
    path: Path
    params: ParamsTypes
    headers: HeadersTypes
}

function get<Path, ParamsTypes, HeadersTypes> (path: Path, params: ParamsTypes, headers?: HeadersTypes): Promise<Ftype> {
    return this.request("GET", path, params, headers);
}

const params: ParamsTypes = {
    id: 3,
    email: "steveyerigandev@gmail.com",
}

const headers: HeadersTypes = {
    method: "POST",
    "content-type": "application/json",
    authorization: "authtoken",
}
const path: string = "path"

const output = get<Path, ParamsTypes, HeadersTypes>(path, params, headers);








