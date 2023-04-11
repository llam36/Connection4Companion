import checkMethod from "../server/utils/checkReq"

export function middleware(req){
    return checkMethod(['GET', 'POST', 'DELETE'], req.method);
}
