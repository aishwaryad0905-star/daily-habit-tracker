function addHabit() {
    let input = document.getElementById("habitInput");
    let habit = input.value;

    if (habit === "") {
        alert("Please enter a habit!");
        return;
    }

    let list = document.getElementById("habitList");

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onchange = updateProgress;

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + habit));
    let deleteBtn = document.createElement("button");

deleteBtn.innerText = "Delete";

deleteBtn.onclick = function() {
    li.remove();
    updateProgress();
};

li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";

    updateProgress();
}

function updateProgress() {
    let boxes = document.querySelectorAll("#habitList input");
    let completed = document.querySelectorAll("#habitList input:checked");

    let total = boxes.length;

    let percentage = total === 0 ? 0 :
        Math.round((completed.length / total) * 100);

    document.getElementById("progress").innerText =
        percentage + "% Completed";
    document.getElementById("progressBar").style.width=percentage+"%";    
}