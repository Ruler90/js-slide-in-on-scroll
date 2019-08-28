# JS Slide In On Scroll

1. All elements that will slide in have elementHidden classes which are removed when scrollY reaches certain points. In the same time that elements gets specific animation classes and styles that stick element to the position where animation ends.
2. Image with text has media queries that changes font-size and image height when screen width is smaller. It's not 100% RWD but I wanted to show the main idea.
3. Images 5 and 6 have media queries that will stick them to the right border when screen width reaches certain point. Without this they can be cropped when you resize the screen.
4. I didn't write media queries for every element because elements sizes depend on project that you working on. E.g. you can give smaller height to entire section (as in my example with text and image) when screen width reaches certain point and much more.