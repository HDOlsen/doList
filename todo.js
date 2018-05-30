
// Creating JQuery Variables
let task = $("#selectTask")
let addTask = $("#addTask")
let pendList = $("#pendingList")
let doneList = $("#completedList")
let bothLists = $("bothLists")


//Function to insert tasks into lists

addTask.click(function(){

let lItem = $("<li>").html(task)
let checkBox = $("<input>").attr("type","checkbox")
let deleteButton = $("<button>").attr("type","button").html("Remove")
lItem.prepend(checkBox) //checkbox
.append(deleteButton) //delete button
pendList.append(lItem)
})

checkbox.click(function(){

    if (lItem == pendList){
        doneList.append(lItem)
        pendList.remove(lItem);
    }
    else{
        pendList.append(lItem)
        doneList.remove(lItem);
    }
})

deleteButton.click(function(){
    bothLists.remove(lItem) //remove from parent, <div>
    })

