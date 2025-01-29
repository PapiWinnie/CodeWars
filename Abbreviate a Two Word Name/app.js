function abbrevName(name){

    // code away
    let nameArray = name.split(' ');
  
    let initials = nameArray[0][0].toUpperCase() + '.' + nameArray[1][0].toUpperCase();
  
    return initials;
}