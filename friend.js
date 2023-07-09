let friends = (obj, obj2) => {
    if (obj.name == obj2.friend && obj.friend == obj2.name) {
        return true;
    }
    else{
        return false;
    }
    // console.log(obj.name, obj2.friend);
}

let best = friends({name: 'rock', friend: 'john'}, {name: 'john', friend: 'rocky'});
console.log(best);