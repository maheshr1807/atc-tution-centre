const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets');

const renames = {
  'gallery_achievement.jpg': 'atc-tuition-centre-student-achievements.jpg',
  'gallery_exam.jpg': 'atc-tuition-centre-exam-preparation.jpg',
  'gallery_students.jpg': 'atc-tuition-centre-madurai-students-studying.jpg',
  'gallery_teacher.jpg': 'atc-tuition-centre-expert-teaching.jpg',
  'hero_classroom.jpg': 'atc-tuition-centre-madurai-classroom.jpg',
  'kathiresan.jpeg': 'atc-tuition-centre-founder-kathiresan.jpeg',
  'logo.png': 'atc-tuition-centre-madurai-logo.png',
  'tecahing img.jpeg': 'atc-tuition-centre-teaching-session.jpeg',
  'tumbnail.jpeg': 'atc-tuition-centre-video-thumbnail.jpeg',
  'tution intro video.mp4': 'atc-tuition-centre-madurai-intro-video.mp4'
};

for (const [oldName, newName] of Object.entries(renames)) {
  const oldPath = path.join(dir, oldName);
  const newPath = path.join(dir, newName);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${oldName} -> ${newName}`);
  } else {
    console.log(`Skipped: ${oldName} (not found)`);
  }
}
