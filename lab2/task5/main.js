"use strict"
console.time("Task5");
console.info("Це інформаційне повідомлення консолі");
console.warn("Увага! Це console.warning");
console.error("Ой, халепа!");
console.log("Властивості об'єкт window: ");
console.profile("Profile1");
console.dir(window);
console.dirxml(document);
console.profileEnd("Profile1");
console.timeEnd("Task5");
console.assert(2 === 1, "Хибне твердження!");