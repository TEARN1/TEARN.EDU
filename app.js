function MenuBtn() {
    document.getElementById("NavSettingStyle").style.display = "block";
}

function closeMenuBtn() {
    document.getElementById("NavSettingStyle").style.display = "none";
}


//------------- Theme applying ---------------------- 




let Grade12 = document.getElementById("Grade-12");
let Grade11 = document.getElementById("Grade-11");
let Grade10 = document.getElementById("Grade-10");
let Grade9 = document.getElementById("Grade-9");
let Grade8 = document.getElementById("Grade-8");
let Grade7 = document.getElementById("Grade-7");
let Grade6 = document.getElementById("Grade-6");
let Grade5 = document.getElementById("Grade-5");
let Grade4 = document.getElementById("Grade-4");
let Grade3 = document.getElementById("Grade-3");
let Grade2 = document.getElementById("Grade-2");
let Grade1 = document.getElementById("Grade-1");


// Displaying the subjects event listener
Grade12.addEventListener("click", () => {
    let GradeSubjectBox = document.getElementById("GradeSubjectBox").style.display = "block";
});


// Term selection code section code


// Grade 12 display code subjects code
var SubjectBoxFal = document.getElementById("SubjectBoxFal");

SubjectBoxFal.addEventListener("click", () => {
    Grade_12_2023_Papers = document.getElementById("Grade_12_2023_Papers").style.display = "block";
})



// Term selection code section

var Fal_Paper1_2023_Grade12 = document.getElementById("Fal_Paper1_2023_Grade12");

Fal_Paper1_2023_Grade12.addEventListener("click", () =>{
    const Term4FirstAdditionaLanguagePaper12023 = document.getElementById("Term4FirstAdditionaLanguagePaper12023").style.display = "block";
    alert("done");
});


Grade11.addEventListener("click", () => {
    let Grade_11_2023_Papers = document.getElementById("Grade_11_2023_Papers").style.display = "block";
});

Grade10.addEventListener("click", () => {
    let Grade_10_2023_Papers = document.getElementById("Grade_10_2023_Papers").style.display = "block";
});

Grade9.addEventListener("click", () => {
    let Grade_9_2023_Papers = document.getElementById("Grade_9_2023_Papers").style.display = "block";
});

Grade8.addEventListener("click", () => {
    let Grade_8_2023_Papers = document.getElementById("Grade_8_2023_Papers").style.display = "block";
});

Grade7.addEventListener("click", () => {
    let Grade_7_2023_Papers = document.getElementById("Grade_7_2023_Papers").style.display = "block";
});

Grade6.addEventListener("click", () => {
    let Grade_6_2023_Papers = document.getElementById("Grade_6_2023_Papers").style.display = "block";
});

Grade5.addEventListener("click", () => {
    let Grade_5_2023_Papers = document.getElementById("Grade_5_2023_Papers").style.display = "block";
});

Grade4.addEventListener("click", () => {
    let Grade_4_2023_Papers = document.getElementById("Grade_4_2023_Papers").style.display = "block";
});

Grade3.addEventListener("click", () => {
    let Grade_3_2023_Papers = document.getElementById("Grade_3_2023_Papers").style.display = "block";
});

Grade2.addEventListener("click", () => {
    let Grade_2_2023_Papers = document.getElementById("Grade_2_2023_Papers").style.display = "block";
});

Grade1.addEventListener("click", () => {
    let Grade_1_2023_Papers = document.getElementById("Grade_1_2023_Papers").style.display = "block";
});


// Terms under grade 12


// Grade11.addEventListener("click", () => {
//     const gradeSubjectBox = document.getElementById("GradeSubjectBox");
//     gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
// });


// Grade10.addEventListener("click", () => {
//     const gradeSubjectBox = document.getElementById("GradeSubjectBox");
//     gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
// });


// Grade9.addEventListener("click", () => {
//     const gradeSubjectBox = document.getElementById("GradeSubjectBox");
//     gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
// });


// Grade8.addEventListener("click", () => {
//     const gradeSubjectBox = document.getElementById("GradeSubjectBox");
//     gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
// });


// Grade7.addEventListener("click", () => {
//     const gradeSubjectBox = document.getElementById("GradeSubjectBox");
//     gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
// });


// Grade6.addEventListener("click", () => {
//     const gradeSubjectBox = document.getElementById("GradeSubjectBox");
//     gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
// });


// Grade5.addEventListener("click", () => {
//     const gradeSubjectBox = document.getElementById("GradeSubjectBox");
//     gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
// });


// Grade4.addEventListener("click", () => {
//     const gradeSubjectBox = document.getElementById("GradeSubjectBox");
//     gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
// });


// Grade3.addEventListener("click", () => {
//     const gradeSubjectBox = document.getElementById("GradeSubjectBox");
//     gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
// });


// Grade2.addEventListener("click", () => {
//     const gradeSubjectBox = document.getElementById("GradeSubjectBox");
//     gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
// });


// Grade1.addEventListener("click", () => {
//     const gradeSubjectBox = document.getElementById("GradeSubjectBox");
//     gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
// });


// const gradeElements = document.querySelectorAll(".Grade"); // Assuming all grades have the class "Grade"

// gradeElements.forEach(gradeElement => {
//   gradeElement.addEventListener("click", () => {
//     const gradeSubjectBox = document.getElementById("GradeSubjectBox");
//     gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
//   });
// });


// Question section ............................

function Term4FirstAdditionaLanguage2023Paper2Totalscore() {
    const checkedInputs = document.querySelectorAll(
        "input[type='radio']:checked"
    );
    const score = checkedInputs.length;
    alert("Your score is: " + score);
}


// sectionClosingDiv

function StartAllSectionsHideEverything() {
    const Term4FirstAdditionaLanguagePaper1DisplayDiv2023 = document.getElementById("Term4FirstAdditionaLanguagePaper12023DisplayDiv");
    const GradeSubjectBox = document.getElementById("GradeSubjectBox");
    const StartPracticeHideEverything = document.getElementById("StartPracticeHideEverything")

    Term4FirstAdditionaLanguagePaper1DisplayDiv2023.style.display = "block";
    GradeSubjectBox.style.display = "none";
    StartPracticeHideEverything.style.display = "none";
}


// Close buttons section 

function sectionExplanationSeparatorClose() {
    const sectionExplanationDiv = document.getElementById("sectionExplanationDiv");

    sectionExplanationDiv.style.display = "none";
}


// New line of code


const GradeBoxCorner = document.getElementById("GradeBoxCorner");
GradeBoxCorner.addEventListener("mouseover", () => {
    GradeBoxCorner.style.overflow = "flow";
    GradeBoxCorner.style.position = "absolute";
});

GradeBoxCorner.addEventListener("mouseout", () => {
    GradeBoxCorner.style.overflow = "hidden";
    GradeBoxCorner.style.position = "fixed";
});

