const dataBuku = [];


const newevent = 'NEWEVENT'
const eventcheckbox = "Custom_Event_For_Chekbox"

function createIdRandom(){
    return +new Date()
} 

function createObjek(id,judulBuku,PenulisBuku,tahunBuku,progres){
    return{
        id,
        judulBuku,
        PenulisBuku,
        tahunBuku,
        progres
    }
}


function tambahBuku(){
    const inputJudulBuku = document.getElementById('bookFormTitle').value;
    const inputPenulisBuku = document.getElementById('bookFormAuthor').value;
    const inputTahunBuku = document.getElementById('bookFormYear').value;
    const isbaca = document.getElementById('bookFormIsComplete').checked;

    const randomid = createIdRandom()
    const convertToObjk = createObjek(randomid,inputJudulBuku,inputPenulisBuku,inputTahunBuku,isbaca)  
    dataBuku.unshift(convertToObjk)

    document.dispatchEvent(new Event(newevent))

}


function createElementBook(){
    const parent = document.querySelector('#completeBookList'); 
    const children = parent.children
    


    for (let index of children){
        const chillFromParent = index.children
        
        const selectParentList = document.querySelector('[data-bookid= ""]')
        console.log(selectParentList)
        
        console.log(chillFromParent)
        // console.log(chillFromParent[0])
    }

}



document.addEventListener('DOMContentLoaded', function(){
    console.log('event Berhashil diload')

    const elementForm= document.getElementById('bookForm'); 
    createElementBook()
    
    elementForm.addEventListener('submit', function(ev){
        console.log('Submit Form....')
        tambahBuku()
        ev.preventDefault();
    })
    
    
})


