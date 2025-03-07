const roles = ['Top', 'Jungle', 'Middle', 'Bottom', 'Support']

const types = {
    1: 'Marksman',
    2: 'Bruiser',
    3: 'Tank',
    4: 'Assassin',
    5: 'Control Mage',
    6: 'Burst Mage',
    7: 'Enchantress',
    8: 'Catcher',
    randomType () {
        let i = Math.floor(Math.random()*8)+1;
        //console.log(this[i]);
        return this[i];
    }
}

const buildPath = ['AD', 'AP']

// Gets what role to play for the message
const role = arr => {
    let index = Math.floor(Math.random()*5);
     //console.log(index);
     //console.log(arr[index]);
    return arr[index]
}

const build = arr => {
    let index = Math.floor(Math.random()*2);
    return arr[index]
}



const mixedMessage = (role, type, build) => {
    console.log(`You should go ${role} playing as a ${type} and build ${build}.`)
}


mixedMessage(role(roles), types.randomType(), build(buildPath));