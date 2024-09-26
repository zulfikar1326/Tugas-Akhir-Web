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


function createElementBook(bookid){

    const containerListBook = document.createElement('div');
    containerListBook.setAttribute('data-bookid',bookid.id);
    containerListBook.setAttribute('data-testid',bookid.progres);
    
    const createsubheading = document.createElement('h3');
    createsubheading.setAttribute('data-testid', 'bookItemTitle');
    createsubheading.innerHTML = bookid.judulBuku

    const createElementPenulis = document.createElement('p');
    createElementPenulis.setAttribute('data-testid', 'bookItemAuthor');
    createElementPenulis.innerHTML = bookid.PenulisBuku

    const createElementTahun = document.createElement('p');
    createElementTahun.setAttribute('data-testid', 'bookItemYear');
    createElementTahun.innerHTML = bookid.tahunBuku
    
    
        // for (let index of getchil){
        //     const chillFromParent = index.children;

        //     const id =   
        //     console.log(chillFromParent)
        //     console.log(chillFromParent[0])
        // };
    

    
};

// console.log(getchil)

//     for (let index of getchil){
//         const chillFromParent = index.children;

//         const id =   
//         console.log(chillFromParent)
//         console.log(chillFromParent[0])
//     };

document.dispatchEvent(,function(ev){
    console.log(ev.type)
    const parentElementComplete = document.getElementById('incompleteBookList');
    const parentElementNoComplete = document.getElementById('completeBookList');
    
    for (let itemBook of dataBuku){
        const outputCreateElement = createElementBook(itemBook)

        if(!itemBook.progres){
            console.log('progers False benar ')
            parentElementNoComplete.append(outputCreateElement)
        }else{
            console.log('progress is selesai')
            parentElementComplete.append(outputCreateElement)
        }
    }
})


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


