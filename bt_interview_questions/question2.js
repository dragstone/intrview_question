/**
 * BT Que: Create a function that returns which chapter is
 * nearest to the page you're on.
 * If two chapters are equidistant,
 * return the chapter with the higher page number.
 * nearestChapter({ "Chapter 1" : 1, "Chapter 2" : 15, "Chapter 3" : 37 }, 10) ➞
 * "Chapter 2" nearestChapter({ "New Beginnings" : 1, "Strange Developments" : 62, "The End?" : 194, "The True Ending" : 460 }, 200) ➞
 * "The End?" nearestChapter({ "Chapter 1a" : 1, "Chapter 1b" : 5 }, 3) ➞ "Chapter 1b"
 */

function nearestChapter(chapters, page) {
  let nearestChapter = null;
  let minDistance = Infinity;

  for (const chapter in chapters) {
    const chapterPage = chapters[chapter];
    const distance = Math.abs(chapterPage - page);

    if (
      distance < minDistance ||
      (distance === minDistance && chapterPage > chapters[nearestChapter])
    ) {
      nearestChapter = chapter;
      minDistance = distance;
    }
  }

  return nearestChapter;
}

// Test cases
console.log(
  nearestChapter({ "Chapter 1": 1, "Chapter 2": 15, "Chapter 3": 37 }, 10)
); // Output: "Chapter 2"
console.log(
  nearestChapter(
    {
      "New Beginnings": 1,
      "Strange Developments": 62,
      "The End?": 194,
      "The True Ending": 460,
    },
    200
  )
); // Output: "The End?"
console.log(nearestChapter({ "Chapter 1a": 1, "Chapter 1b": 5 }, 3)); // Output: "Chapter 1b"
