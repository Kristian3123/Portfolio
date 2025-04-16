export class Tag{
static readonly Angular= new Tag('Angular','red');
static readonly TypeScript= new Tag('TypeScript','darkred');
static readonly React= new Tag('React','blue');

static readonly Pyton= new Tag('Pyton','pink');
static readonly Csharp= new Tag('C#','green');
static readonly Java= new Tag('Java','orange');
static readonly Nodejs= new Tag('Nodejs','brown');
static readonly AspNet= new Tag('Asp.Net','purple');

static readonly HTMl= new Tag('HTMl','darkorange');
static readonly JavaScript= new Tag('JavaScript','orange');




private constructor (private readonly key:string, public readonly color:string){

}
toString(){
    return this.key;
}
}