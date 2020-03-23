module.exports = function createDreamTeam(members) {
  // throw 'Not implemented';
  // remove line with error and write your code here

  let tempArr = [];

  if (members === null ||
      members === undefined) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if ( typeof members[i] === "string") {
      tempArr.push(members[i].trim());
    }
  }

  let finalArr = [];

  for (let i = 0; i < tempArr.length; i++) {
    finalArr.push(tempArr[i][0].toUpperCase())
  }

  if (finalArr.length === 0) {
    return false
  } else {
    return (finalArr.sort().join(''));
  }

};