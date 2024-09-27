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
    console.log('menambahkan Buku ke Dalam Array')
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
    
    console.log('Membuat element Html')

    const containerListBook = document.createElement('div');
    containerListBook.setAttribute('data-bookid',bookid.id);
    containerListBook.setAttribute('data-testid',bookid.progres);
    containerListBook.setAttribute('class','listbook')
    
    const createsubheading = document.createElement('h3');
    createsubheading.setAttribute('data-testid', 'bookItemTitle');
    createsubheading.innerHTML = bookid.judulBuku
    containerListBook.append(createsubheading)

    const createElementPenulis = document.createElement('p');
    createElementPenulis.setAttribute('data-testid', 'bookItemAuthor');
    createElementPenulis.innerHTML = bookid.PenulisBuku
    containerListBook.append(createElementPenulis)

    const createElementTahun = document.createElement('p');
    createElementTahun.setAttribute('data-testid', 'bookItemYear');
    createElementTahun.innerHTML = bookid.tahunBuku
    containerListBook.append(createElementTahun)

    const createcontainerButton = document.createElement('div')
    containerListBook.append(createcontainerButton)

    const buttonDone = document.createElement('button');
    buttonDone.setAttribute('data-testid','bookItemIsCompleteButton');
    buttonDone.innerText = "Selesai dibaca";
    createcontainerButton.append(buttonDone)

    const buttonHapus = document.createElement('button');
    buttonHapus.setAttribute('data-testid', "bookItemDeleteButton");
    buttonHapus.innerText = "Hapus Buku";
    createcontainerButton.append(buttonHapus)

    const buttonEdit = document.createElement('button');
    buttonEdit.setAttribute('data-testid','bookItemEditButton')
    buttonEdit.innerText = "Edit Buku";
    createcontainerButton.append(buttonEdit)

        // for (let index of getchil){
        //     const chillFromParent = index.children;

        //     const id =   
        //     console.log(chillFromParent)
        //     console.log(chillFromParent[0])
        // };
    

    return containerListBook
};

// console.log(getchil)

//     for (let index of getchil){
//         const chillFromParent = index.children;

//         const id =   
//         console.log(chillFromParent)
//         console.log(chillFromParent[0])
//     };

document.addEventListener(newevent,function(){
    console.log('Memicu Event Custom')
    const parentElementComplete = document.getElementById('incompleteBookList');
    parentElementComplete.innerHTML = '';

    const parentElementNoComplete = document.getElementById('completeBookList');
    parentElementNoComplete.innerHTML = '';
    

    for (let itemBook of dataBuku){
        const outputCreateElement = createElementBook(itemBook)

        if(!itemBook.progres){
            // Jika Selesai 
            parentElementComplete.append(outputCreateElement)
        }else{
            //Jika belum Selsai
            parentElementNoComplete.append(outputCreateElement)
        }
    }
})




document.addEventListener('DOMContentLoaded', function(event){
    console.log('event Berhashil diload')

    const elementForm= document.getElementById('bookForm'); 
    // createElementBook()
    
    elementForm.addEventListener('submit', function(ev){
        console.log('Submit Form....')
        tambahBuku()
        ev.preventDefault();
    })
    
    
})


