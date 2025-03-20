document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("timeInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const taskTime = timeInput.value;

        if (taskText === "" || taskTime === "") {
            alert("Please enter both task and time.");
            return;
        }

        const formattedTime = formatTime(taskTime);

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <div class="task-details">
                <span><b>${formattedTime} - </b></span>
                <span>${taskText}</span>
            </div>
            <button class="delete">x</button>
        `;

        taskList.appendChild(taskItem);

        taskInput.value = "";
        timeInput.value = "";
        
        taskItem.querySelector(".delete").addEventListener("click", function () {
            taskItem.remove();
        });
    });

    function formatTime(time) {
        let [hours, minutes] = time.split(":");
        hours = parseInt(hours, 10);
        let period = hours >= 12 ? "PM" : "AM"; 
        
        if (hours === 0) {
            hours = 12; 
        } else if (hours === 12) {
            hours = 12; 
        } else {
            hours = hours % 12 || 12;
        }
    
        return `${hours}:${minutes} ${period}`;
    }
    
});