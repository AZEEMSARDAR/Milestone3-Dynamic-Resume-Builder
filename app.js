var resumeForm = document.querySelector("#cv-form");
var resumeOutput = document.querySelector("#resume-output");
resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    resumeOutput.style.display = "block";
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var education = document.getElementById("education");
    var experience = document.getElementById("experience");
    var skills = document.getElementById("skills");
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("please fill all field");
        return;
    }
    document.getElementById("resumeName").innerText = "Name: ".concat(name.value);
    document.getElementById("resumeEmail").innerText = "Email: ".concat(email.value);
    document.getElementById("resumePhone").innerText = "Phone: ".concat(phone.value);
    document.getElementById("resumeEducation").innerText = "Education: ".concat(education.value);
    document.getElementById("resumeExperience").innerText = "Experience: ".concat(experience.value);
    document.getElementById("resumeSkils").innerText = "Skills: ".concat(skills.value);
});
