# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - FAQ accordion solution](#frontend-mentor---faq-accordion-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Instead of repeating HTML structure for each FAQ item, I stored the data in an array of objects. This makes the code cleaner and easier to maintain.](#instead-of-repeating-html-structure-for-each-faq-item-i-stored-the-data-in-an-array-of-objects-this-makes-the-code-cleaner-and-easier-to-maintain)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Github repository](https://github.com/Saliva-sys/Faq-Accordion.git)
- Live Site URL: [RLive URL](http://localhost:5174/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool


### What I learned

In this component, I focused on making the FAQ interactive using React state management. Here are the key takeaways:

*Dynamic Rendering with .map()*
Instead of repeating HTML structure for each FAQ item, I stored the data in an array of objects. This makes the code cleaner and easier to maintain.
  - 
```js
{faqData.map((item) => (
  <article key={item.id} className="faq_area">
    {/* ... */}
  </article>
))}
```

*Stateful Accordion Logic*
I learned how to use the useState hook to track which item is currently open. By storing the id of the active item (or null when all are closed), I ensured that only one question is expanded at a time.

*Conditional Rendering for Assets*
I practiced using the ternary operator to switch between plus and minus icons dynamically. I also learned that in a React environment (using Vite), images in the src folder should be imported as modules for proper bundling.

```js
<span className="faq_icon">
  {openId === item.id ? <img src={iconMinus} alt="" /> : <img src={iconPlus} alt="" />}
</span>
```

*Semantic HTML with <article>*
I used the <article> tag to wrap each question and answer pair, which improves the document structure and accessibility for screen readers.

```js
<article key={item.id} className="faq_area">
    <button type='button' className="faq_button"
    onClick={() => handleToggle(item.id)}>
        <h2 className="faq_title">{item.title}</h2>
        <span className="faq_icon">
            {openId === item.id 
                ? <img src={iconPlus} alt="plus" /> 
                : <img src={iconMinus} alt="minus"/>
            }
        </span>
    </button>

    {openId === item.id && (
        <p className="faq_answer">{item.answer}</p>
    )}
</article>
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
