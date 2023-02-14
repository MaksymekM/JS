document.getElementById("skill-type").addEventListener("change", function() {
    var selectedOption = this.value;
    var hardSkills = document.getElementById("hard-skills");
    var softSkills = document.getElementById("soft-skills");
    if (selectedOption === "hard-skills") {
        hardSkills.classList.remove("hidden");
        softSkills.classList.add("hidden");
    } else {
        hardSkills.classList.add("hidden");
        softSkills.classList.remove("hidden");
    }
});