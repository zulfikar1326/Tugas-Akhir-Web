const data = [{
    id:10,
    nama:'zulfikar',
},{
    id : 12,
    nama :'lekno'
},
{
    id :11,
    nama : 'Paiment'
}
]


for (let key in data){
    if (data[key].id == 12){
        data[key].nama = 'Alfia';
    } 
}
console.log(data)