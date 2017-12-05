
var MyMam={
    name:'',
    get_name:function(){
        return this.name;
    },
    says:function () {
        return this.saying ||'';
    }
}
var MyCat=Object.assign(MyMam);
MyCat.name="Herietta";
MyCat.saying="meow";
console.log(MyCat.get_name());
