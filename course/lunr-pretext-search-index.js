var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus   Course Information   Course: MA 123 – Intro to Functions, Section 006   Meeting Time: Monday & Wednesday, 2:30–4:20   Location: HH 407, Hemenway Hall    Instructor Information   Instructor: Mark Morabito   Email: mmorabito1@framingham.edu   Office Hours: Thursdays, 3:00–3:50pm (Virtual via Zoom)    Texts   College Algebra 2e (OpenStax)  Atchison & Morabito with Stitz & Zeager and Wallace, College Algebra: Framingham State University      Course Goals  Students will develop an understanding of mathematical modeling using functions, appreciate the historical development of algebra, and use mathematical theorems as tools for problem solving.    Assessments  There will be four major tests. The three highest scores count for 100 points each. The lowest test score will be replaced by the final exam. There are no make-up tests. Plan accordingly.  There will be at least ten quizzes. The ten highest quiz scores will count for 100 points total. No make-up quizzes will be given.  Homework is completed through DeltaMath . Students are expected to log in early and often.    Final Exam  The final exam is comprehensive and worth 200 points. It will take place during the official final exam period (May 6, 2026). The exam will not be rescheduled.    Attendance & Participation  Students are allowed two absences without penalty. Each additional absence results in a one-point deduction. Participation includes attendance, preparation, discussion, and group work.    Grading Breakdown    Top Four Exams 400  Top Quizzes 100  Online Homework ~100  Additional Assignments ~50  Participation & Attendance 25  Final Exam 200  Total ~875      Academic Honesty  Academic dishonesty will not be tolerated and will be handled according to Framingham State University policy. This includes plagiarism, cheating, unauthorized collaboration, falsification, and misuse of university resources.    Important Notice  This syllabus is subject to change at any time.   "
},
{
  "id": "syllabus-9-2",
  "level": "2",
  "url": "syllabus.html#syllabus-9-2",
  "type": "Table",
  "number": "1",
  "title": "",
  "body": "  Top Four Exams 400  Top Quizzes 100  Online Homework ~100  Additional Assignments ~50  Participation & Attendance 25  Final Exam 200  Total ~875   "
},
{
  "id": "syllabus-quiz",
  "level": "1",
  "url": "syllabus-quiz.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus Quiz",
  "body": " Syllabus Quiz   Name: _________________________________________   Score: ____________\/10 points   How many quizzes will be counted toward your final grade?  10   What is the total number of points that homework will count toward your final grade?  200   How many exams will be administered in total (not including the final)?  4   What happens to your lowest exam?  dropped   How many points is your final exam worth?  200   You get to make up quizzes and\/or exams:  false   How many attendance points do you earn if you’re never absent?  50   How many points is each exam (not including the final) worth?  100   What is the minimum letter grade for Precalculus? (No plus or minus.)  C    "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts  "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
