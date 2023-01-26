// Згенерувати теги теги через javascript. Додати на сторінку семантичні теги та метагеги опису сторінки.
//  прописати стилі для для елементів використовуючи css id та класи
//  при натиску на тег ми можемо доти будь-який контент і він зберігається в тегу


const createETag = (tagName, className, text) => {
    const tag = document.createElement (tagName);
    tag.classList.add(className);
    tag.textContent = text;
    // tag.setAttribute('contenteditable', "true");
    return tag;
}

function newPage () {

const div = createETag('body', "body-title", 'body');
header = createETag('header', "header-box", 'header');
nav =  createETag('nav', "navigation", 'nav');

div1 = createETag ('div', 'main', '' );
section1 = createETag('section', 'section-box1', 'section');
header1 = createETag('header','section-header1', 'header'),

article1 = createETag('article', 'section-article1','article');
header2 = createETag('header',"article-header2",'header' );
p1 = createETag('p', "article-p1", 'p');
div2 = createETag('div2', 'article-div2', '');
p2 = createETag('p', "article-p2", 'p');
aside = createETag('aside', "article-aside", 'aside', '');
footer1 = createETag('footer', "article-footer1", 'footer', '');

article2 = createETag('article', "section-article2", 'article', '');
header3 = createETag('header', "article-header3", 'header', '' );
p3 = createETag('p', "article-p3", 'p', '');
p4 = createETag('p', "article-p4", 'p', '');
footer2 = createETag('footer', "article-footer2", 'footer', '');
footer3 = createETag('footer', "section-footer", 'footer', '');

section2 = createETag('section',"section-box2", 'section', '' );
header4 = createETag('header', "section-header4", 'header', '');

footer4 = createETag('footer',"section-footer4", 'footer', '' );
footerBody = createETag('footer', "body-footer", 'footer', '');




document.body.prepend(div),
document.body.appendChild(header);
header.appendChild(nav);

document.body.append(div1);
div1.appendChild(section1);
section1.appendChild(header1);

section1.appendChild(article1);
article1.appendChild(header2);
article1.appendChild(p1);

article1.appendChild(div2);
div2.appendChild(p2);
div2.appendChild(aside);
article1.appendChild(footer1);
section1.appendChild(article2);

article2.appendChild(header3);
article2.appendChild(p3);
article2.appendChild(p4);

article2.appendChild(footer2);
section1.appendChild(footer3);

div1.appendChild(section2);
section2.appendChild(header4);
section2.appendChild(footer4);

document.body.appendChild(footerBody);


}

newPage ();




