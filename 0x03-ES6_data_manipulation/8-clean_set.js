export default function cleanSet(set, startString) {
  if (startString !== '') {
    const subArray = [];
    set.forEach((element) => {
      if (element.startsWith(startString)) {
        subArray.push(element.substring(startString.length));
      }
    });
    return subArray.join('-');
  }
  return '';
}
