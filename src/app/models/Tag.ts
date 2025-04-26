export class Tag{
static readonly TypeScript= new Tag('TypeScript','darkred');
static readonly JavaScript= new Tag('JavaScript','orange');
static readonly Python= new Tag('Python','pink');
static readonly Csharp= new Tag('C#','green');
static readonly Java= new Tag('Java','orange');
static readonly Php= new Tag('PHP','pink');




static readonly HTML= new Tag('HTML','darkorange');

static readonly Angular= new Tag('Angular','red');
static readonly React= new Tag('React','blue');
static readonly Nodejs= new Tag('Nodejs','brown');
static readonly AspNet= new Tag('Asp.Net','purple');

private constructor (private readonly key:string, public readonly color:string){

}
toString(){
    return this.key;
}
}