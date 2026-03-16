import './FaqAccordion.css';
import { useState, useEffect } from 'react';

// 2. KÓD KOMPONENTU (telo funkcie)
const FaqAccordion = () => {
  useEffect(() => {
    document.title = "Saliva-sys | FAQ accordion";
  }, []); // [] znamená, že sa to zmení len pri otvorení tohto komponentu

  const faqData = [
    {id: 1, title: "What is Frontend Mentor, and how will it help me?", answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It&#39;s suitable for all levels and ideal for portfolio building."},
    {id: 2, title: "Is Frontend Mentor free?", answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."},
    {id: 3, title: "Can I use Frontend Mentor projects in my portfolio?", answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It&#39;s an excellent way to showcase your skills to potential employers!"},
    {id: 4, title: "How can I get help if I&#39;m stuck on a Frontend Mentor challenge?", answer: "The best place to get help is inside Frontend Mentor&#39;s Discord community. There&#39;s a help channel where you can ask questions and seek support from other community members."}
  ]

  const [openId, setOpenId] =useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  }

  return (
    <main>
        <div className="main__space">
            <h1 className="faq__main-title">
                <img src="./icon-star.svg" alt="star"/>
                FAQs</h1>

            <section className="faq__space">
                {faqData.map((item) => (
                    <article key={item.id} className="faq__area">
                        <button type='button' className="faq__button"
                        onClick={() => handleToggle(item.id)}>
                            <h2 className="faq__title">{item.title}</h2>
                            <span className="faq__icon">
                                {openId === item.id 
                                    ? <img src="./icon-plus.svg" alt="plus" /> 
                                    : <img src="./icon-minus.svg" alt="minus"/>
                                }
                            </span>
                        </button>

                        {openId === item.id && (
                            <p className="faq__answer">{item.answer}</p>
                        )}
                    </article>
                ))}
            </section>
        </div>

        <footer className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className="attribution-link" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/Saliva-sys" className="attribution-link" target="_blank" rel="noopener noreferrer">Adriana Weidlichova</a>.
        </footer>
    </main>
  );
};

export default FaqAccordion;