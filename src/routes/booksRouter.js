const express= require('express');
const booksRouter = express.Router();
var books = [
    {
        titile: 'Balyakalasakhi',
        author: 'Basheer',
        genre: 'Novel',
        img:"img3.jpg",
        discription: 'Balyakalasakhi, is a Malayalam romantic tragedy novel written by Vaikom Muhammad Basheer. Published in 1944, it is considered by many as his best work. The story revolves around Majeed and Suhra, who are in love with each other from childhood. By his own admission, the story is largely autobiographical.'

    },
    {
        titile: 'Nile Diary',
        author: 'S K Pottakkadu',
        genre: 'Travelogue',
        img:"img4.jpg",
        discription:'Nile Diary and Pathira Sooryante Nattil as well as memoirs like Ponthakkadukal and Samsarikkunna Diarykurippukal are some of his other major works'
    },
    {
        titile: 'Ente Kadha',
        author: 'Kamala Surayya',
        genre: 'autobiography ',
        img:"img5.jpg",
        discription:'Ente Kadha (My Story) is an autobiography written by Kamala Surayya (Madhavikutty) in the year 1973. She was motivated to write this as she became ill and thought will not survive. The book was controversial and outspoken and had her critics gunning her after it was published in 1973; often shocking her readers with her for conventions and expression of her opinions on subjects in society- more often on the hypocrisy of it.'
    },
    {
        titile: 'The God of Small Things',
        author: 'Arundhati Roy',
        genre: 'Novel',
        img:"img6.jpg",
        discription:'It is a story about the childhood experiences of fraternal twins whose lives are destroyed by the "Love Laws" that lay down "who should be loved, and how. And how much." The book explores how the small things affect peoples behavior and their lives. The book also reflects its irony against casteism, which is a major discrimination that prevails in India.'
    }
]
booksRouter.get('/',function(req,res){
    res.render("books",
    {
        nav:[{link:'/books/createbook',name:'Add New Book'},{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Books',
        books
    });
});
booksRouter.get('/createbook',function(req,res){
    res.render("createNewBook",
    {
        nav:[{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Books'
    });
});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render("book",
    {
        nav:[{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Book',
        book:books[id]
    });
});
 module.exports = booksRouter; 