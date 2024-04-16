import updateUniqueItems from './10-update_uniq_items';
import groceriesList from './9-groceries_list';

const map = groceriesList();
console.log(map);

const updatedMap = updateUniqueItems(map);
console.log(updatedMap);
