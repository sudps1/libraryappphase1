const express= require('express');
const authorsRouter = express.Router();
var authors = [
    {
        titile: 'Balyakalasakhi, Pathummayude Aadu, Mathilukal, Premalekhanam',
        author: 'Vaikom Muhammad Basheer',
        genre: 'Short Story writer, Novelist, Humanist and also as a Freedom fighter',
        img:"img7.jpg",
        discription: 'In the Malayalam Literary arena, the legend Vaikom Muhammad Basheer owns a remarkable position. With his profound and simple writing, touch of satire, sarcasm and black humour, Basheer had woven a style of his own and marked his presence as a short story writer, novelist, humanist and also as a freedom fighter.'
    },
    {
        titile: 'Nile Diary, Vallikadevi, Moodupadam, Vishakanyaka',
        author: 'S K Pottakkadu',
        genre: 'Teacher, Writer, Politician',
        img:"img8.jpg",
        discription:'At a time when the world was not appeared on maps, a time when you could hardly imagine of the world outside and that was before the television entered our living rooms. A man from the land of the Malayalis, Kerala, embarked on a journey, that too in a ship to see the world, to have a glimpse of the diverse humanity. He detailed the places he visited and the unity he found among the people. And that Malayali was none other than the great litterateur and travel writer, Mr. S.K. Pottekkatt.'
    },
    {
        titile: 'Ente Kadha, Pakshiyude Manam, Naricheerukal Parakkumbol, The Sirens',
        author: 'Kamala Surayya',
        genre: 'Poet, Novelist, Short story writer ',
        img:"img5.jpg",
        discription:'Kamala Das was one of the most prominent feminist voices in the postcolonial era. She wrote in her mother tongue Malayalam as well as in English. To her Malayalam readers she was Madhavi Kutty and to her English patrons she was Kamala Das.' 

    },
    {
        titile: 'The God of Small Things, In Which Annie Gives It Those Ones',
        author: 'Suzanna Arundhati Roy ',
        genre: 'Writer, Essayist, Activist',
        img:"img6.jpg",
        discription:'Arundhati Roy was born in 1960 in Kerala, India. She studied architecture at the Delhi School of Architecture and worked as a production designer. She has written two screenplays, including Electric Moon (1992), commissioned by Channel 4 television. She lives in Delhi with her husband, the film-maker Pradip Krishen.'
        
    }
]
authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav:[{link:'/authors/createauthor',name:'Add New Author'},{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Authors',
        authors

    });
});
authorsRouter.get('/createauthor',function(req,res){
    res.render("createNewAuthor",
    {
        nav:[{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Add New Author'
    });
});
authorsRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render("author",
    {
        nav:[{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Book',
        author:authors[id]
    });
});
 module.exports = authorsRouter; 