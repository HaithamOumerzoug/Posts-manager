import { Like } from "./like.model";

export class Post {
    public id:number | any;
    public title:string | any;
    public body:string | any;
    public urlImage?:string | any;
    public user_id:number |any;
    public comments:Array<Comment> | any;
    public likes:Array<Like> | any;
}
