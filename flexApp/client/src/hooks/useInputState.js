import { useState } from "react";

export default initialVal => {
  console.log("Rows from UseinputState@@@")
  console.log(initialVal);
  const [filterList, setFilterList] = useState(initialVal);
  console.log("Rows from UseinputState@@@" + filterList);
  console.log(filterList)
  let currentList = [];
  let newList = [];
  const handleChange = e => {
    if (e.target.value !== "") {
     currentList = filterList;
     newList = currentList.filter(item => {
       const lc = item.toLowerCase();
       const filter = e.target.value.toLowerCase();
       return lc.includes(filter);
     })
    } else {
     newList = filterList;
    }
    setFilterList(newList);
 }
  return [newList, handleChange];
};
