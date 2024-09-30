const dataBuku = [];


const newevent = 'NEWEVENT';
const eventedit = "EventEdit";



function fungsibuttonedit(bookid){
    const Judul = prompt("Masukkan Judul Buku Terbaru\t: ")
    const Penulis = prompt("Masukkan Penulis Buku\t\t: ")
    const Tahun = prompt("Masukkan Tahun BUku\t\t\t: ")
    const Progres = prompt("Masukkan Progres Buku\t\t: ")

    for (let data in dataBuku){
        if (dataBuku[data].id === bookid.id){
            console.log('Id sama')
            dataBuku[data].judulBuku = Judul
            dataBuku[data].PenulisBuku = Penulis 
            dataBuku[data].tahunBuku = Tahun
            dataBuku[data].progres = Progres
        }
    }
    
    document.dispatchEvent(new Event(newevent))
    
    console.log(bookid)
}


function findBookItem(book){
    for (const item of dataBuku){
        if (item.id === book){
            return item;
        }
    }
    
    return null;
}


function fungsiButtonHapus(){
    dataBuku.splice(-1, 1)
    document.dispatchEvent(new Event(newevent))
};


function fungsiButtonprogresTrue(book){
    const bookTarget = findBookItem(book)

    if (bookTarget == null){
        book.progres = false;
        document.dispatchEvent(new Event(newevent))
    };
}

function fungsiButtonprogresFalse(book){
    const bookTarget = findBookItem(book)

    if (bookTarget == null){
        book.progres = true;
        document.dispatchEvent(new Event(newevent))
    };
}


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
    dataBuku.push(convertToObjk)

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
    
    const buttonHapus = document.createElement('button');
    buttonHapus.setAttribute('data-testid', "bookItemDeleteButton");
    buttonHapus.setAttribute('id','buttonHapus');
    buttonHapus.innerText = "Hapus Buku";


    const buttonEdit = document.createElement('button');
    buttonEdit.setAttribute('data-testid','bookItemEditButton');
    buttonEdit.innerText = "Edit Buku";

    const buttonisprogres = document.createElement('button');
    buttonHapus.setAttribute('data-testid', "bookItemEditButton");
    buttonisprogres.setAttribute('id','isprogres')
    buttonisprogres.innerText = 'Sudah Baca';

    if (bookid.progres){
        console.log('Buku Selesai Dibaca');
        containerListBook.append(buttonEdit,buttonHapus,buttonisprogres);

        buttonisprogres.addEventListener('click', function(){
            console.log('Button Is progres diclik')
            fungsiButtonprogresTrue(bookid);
        });

        buttonEdit.addEventListener('click', function(){
            console.log('Button Is Edit On')
            fungsibuttonedit(bookid);
        });

        buttonHapus.addEventListener('click', function(){
            console.log('Button Hapus Diclik')
            fungsiButtonHapus(bookid)
        })
        
        
    }else{
        console.log('Buku Belum Selesai Dibaca')
        containerListBook.append(buttonEdit,buttonHapus,buttonisprogres);
        
        buttonisprogres.addEventListener('click', function(){
            console.log('Button Is progres diclik')
            fungsiButtonprogresFalse(bookid);

        });

        buttonEdit.addEventListener('click', function(){
            console.log('Button Is Edit On')
            fungsibuttonedit(bookid);
        });

        buttonHapus.addEventListener('click', function(){
            console.log('Button Hapus Diclik')
            fungsiButtonHapus(bookid)
        })
    }
    return containerListBook;
};


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
    };

});


document.addEventListener(eventedit, function(event){
    console.log(event.type)
})


document.addEventListener('DOMContentLoaded', function(){
    console.log('event Berhashil diload')

    const elementForm = document.getElementById('bookForm'); 
    // createElementBook()
    console.log(dataBuku)
    elementForm.addEventListener('submit', function(ev){
        console.log('Submit Form....')
        tambahBuku()
        ev.preventDefault();
    })



});