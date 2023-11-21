// wrapper section
var wrapper = document.querySelector(".wrapper");
console.log(wrapper)

// header section
var Header = document.createElement("header");
wrapper.appendChild(Header);

// header h2 section
var h2 = document.createElement("h2");
h2.setAttribute("id", "heading",);
h2.textContent = "Note Manager";
Header.appendChild(h2);

// form section
var form = document.createElement("form");
form.setAttribute("id", "search-note");
Header.appendChild(form);

// form input section
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "search note...");
form.appendChild(input);

// note-list div
var div1 = document.createElement("div");
div1.setAttribute("class", "note-list");
wrapper.appendChild(div1);

//note-list ul
var ul = document.createElement("ul");
ul.setAttribute("id", "list");
div1.appendChild(ul);

// **************************************************//

// note-list ul -li_1
var li_1 = document.createElement("li");
ul.appendChild(li_1);

// note-list  li-1 p-1
var li_1_p_1 = document.createElement('p');
li_1_p_1.textContent = "first note";
li_1.appendChild(li_1_p_1);

// note-list  li-1 p-2
var li_1_p_2 = document.createElement('p');
li_1.appendChild(li_1_p_2);

//note-list li-1 p-2 i-1
var li_1_p_2_i_1 = document.createElement("i");
li_1_p_2_i_1.setAttribute("class", "fa fa-pencil-square-o");
li_1_p_2.appendChild(li_1_p_2_i_1);

//note-list li-1 p-2 i-2
var li_1_p_2_i_2 = document.createElement("i");
li_1_p_2_i_2.setAttribute("class", "fa fa-times");
li_1_p_2.appendChild(li_1_p_2_i_2);


// **************************************************//

// note-list ul-li_2
var li_2 = document.createElement("li");
ul.appendChild(li_2);

// note-list  li-2 p-1
var li_2_p_1 = document.createElement('p');
li_2_p_1.textContent = "second note";
li_2.appendChild(li_2_p_1);

// note-list  li-2 p-2
var li_2_p_2 = document.createElement('p');
li_2.appendChild(li_2_p_2);

//note-list li-2 p-2 i-1
var li_2_p_2_i_1 = document.createElement("i")
li_2_p_2_i_1.setAttribute("class", "fa fa-pencil-square-o");
li_2_p_2.appendChild(li_2_p_2_i_1);

//note-list li-2 p-2 i-2
var li_2_p_2_i_2 = document.createElement("i")
li_2_p_2_i_2.setAttribute("class", "fa fa-times");
li_2_p_2.appendChild(li_2_p_2_i_2);

// **************************************************//

// note-list ul-li_3
var li_3 = document.createElement("li");
ul.appendChild(li_3);

// note-list  li-3 p-1
var li_3_p_1 = document.createElement('p');
li_3_p_1.textContent = "third note";
li_3.appendChild(li_3_p_1);

// note-list  li-3 p-2
var li_3_p_2 = document.createElement('p');
li_3.appendChild(li_3_p_2);

//note-list li-3 p-2 i-1
var li_3_p_2_i_1 = document.createElement("i");
li_3_p_2_i_1.setAttribute("class", "fa fa-pencil-square-o");
li_3_p_2.appendChild(li_3_p_2_i_1);

//note-list li-3 p-2 i-2
var li_3_p_2_i_2 = document.createElement("i");
li_3_p_2_i_2.setAttribute("class", "fa fa-times");
li_3_p_2.appendChild(li_3_p_2_i_2);

// **************************************************//

// div hide-list 
var div2 = document.createElement("div");
div2.setAttribute("id", "hide-list");
wrapper.appendChild(div2);

// div label hide-list 
var label = document.createElement("label");
label.setAttribute("for", "hide");
label.textContent = "Hide notes";
div2.appendChild(label);

// div input hide-list 
var input2 = document.createElement("input");
input2.setAttribute("type", "checkbox");
input2.setAttribute("id", "hide");
div2.appendChild(input2);

// div add-notes
var div3 = document.createElement("div");
wrapper.appendChild(div3);

// div_div1 add-notes 
var div3_div1 = document.createElement("div");
div3_div1.setAttribute("id", "add-notes")
div3.appendChild(div3_div1)

// div_div1 form add-notes 
var form1 = document.createElement("form");
form1.setAttribute("id", "add");
div3_div1.appendChild(form1)

// div_div1 form input1 add-notes
var input3 = document.createElement("input");
input3.setAttribute("type", "text");
input3.setAttribute("placeholder", "Add a note...");
input3.setAttribute("id", "add-input")
form1.appendChild(input3);

// div_div1 form input2 add-notes
var input4 = document.createElement("input");
input4.setAttribute("type", "submit");
input4.setAttribute("value", "Add");
input4.setAttribute("id", "add-btn")
form1.appendChild(input4);


// Add button on click function
input4.addEventListener("click", function (e) {
    e.preventDefault()
    var lis = document.createElement("li");

    var lis_p_1 = document.createElement('p');
    lis_p_1.textContent = input3.value;
    lis.appendChild(lis_p_1);

    var lis_p_2 = document.createElement('p');
    lis.appendChild(lis_p_2);

    var lis_p_2_i_1 = document.createElement("i");
    lis_p_2_i_1.setAttribute("class", "fa fa-pencil-square-o");
    lis_p_2.appendChild(lis_p_2_i_1);

    var lis_p_2_i_2 = document.createElement("i");
    lis_p_2_i_2.setAttribute("class", "fa fa-times");
    lis_p_2.appendChild(lis_p_2_i_2);

    lis_p_2_i_2.addEventListener("click", function (e) {
        e.preventDefault()
        ul.removeChild(lis)
    })


    // edit text element using edit icon from ul for li_1
    lis_p_2_i_1.addEventListener("click", function (e) {
        e.preventDefault();
        var inputboxe = document.createElement("input");
        inputboxe.setAttribute("style", "display:block");
        lis.appendChild(inputboxe);

        inputboxe.addEventListener("keypress", function () {
            lis_p_1.textContent = inputboxe.value;
            lis.removeChild(inputboxe);
        })

    })

    ul.appendChild(lis)
})

// remove elements using cross icons form ul for li_1
li_1_p_2_i_2.addEventListener("click", function (e) {
    e.preventDefault()
    ul.removeChild(li_1)
})

// remove elements using cross icons form ul for li_2
li_2_p_2_i_2.addEventListener("click", function (e) {
    e.preventDefault()
    ul.removeChild(li_2)
})

// remove elements using cross icons form ul for li_3
li_3_p_2_i_2.addEventListener("click", function (e) {
    e.preventDefault()
    ul.removeChild(li_3)
})


// edit text element using edit icon from ul for li_1
li_1_p_2_i_1.addEventListener("click", function (e) {
    e.preventDefault();
    var inputbox1 = document.createElement("input");
    inputbox1.setAttribute("style", "display:block");
    li_1.appendChild(inputbox1);

    inputbox1.addEventListener("keypress", function () {
        if (e.keyCode === 13) {
            if (input.value !== '') {
                li_1_p_1.textContent = inputbox1.value;
            }
            else {
                li_1.removeChild(inputbox1);
            }
        }
    })
}
);


//     //show input
//     input.style.display = 'block';
//     input.value = note.textContent;

//     input.addEventListener('keypress', function(e) {
//         //code enter key
//         if(e.keyCode === 13) {
//             if(input.value !== '') {
//                 note.textContent = input.value;
//                 parentPar.style.display = 'block';
//                 input.style.display = 'none';
//             } else {
//                 var li = input.parentNode;
//                 li.parentNode.removeChild(li);
//             }
//         }
//     });
// } else if (e.target.classList[1] === 'fa-times') {
//     var list = e.target.parentNode.parentNode;
//     list.parentNode.removeChild(list);
// }



// edit text element using edit icon from ul for li_2
li_2_p_2_i_1.addEventListener("click", function (e) {
    e.preventDefault();
    var inputbox2 = document.createElement("input");
    inputbox2.setAttribute("style", "display:block");
    li_2.appendChild(inputbox2);

    inputbox2.addEventListener("keypress", function () {
        li_2_p_1.textContent = inputbox2.value;
        li_2.removeChild(inputbox2);
    })

})


// edit text element using edit icon from ul for li_3
li_3_p_2_i_1.addEventListener("click", function (e) {
    e.preventDefault();
    var inputbox3 = document.createElement("input");
    inputbox3.setAttribute("style", "display:block");
    li_3.appendChild(inputbox3);

    inputbox3.addEventListener("keypress", function () {
        li_3_p_1.textContent = inputbox3.value;
        li_3.removeChild(inputbox3);
    })

})

//Hide elements
var hideItem = document.getElementById('hide');

hideItem.addEventListener('click', function () {
    var label = document.querySelector('label');

    if (hideItem.checked) {
        label.textContent = 'Unhide notes';
        list.style.display = 'none';
    } else {
        label.textContent = 'Hide notes';
        list.style.display = 'block';
    }
});


//Search filter
var searchInput = document.querySelector('#search-note input');

searchInput.addEventListener('keyup', function(e) {
    var searchChar = e.target.value.toUpperCase();
    var notes = list.getElementsByTagName('li');

    Array.from(notes).forEach(function(note) {
        var parText = note.firstElementChild.textContent;

        if (parText.toUpperCase().indexOf(searchChar) !== -1) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
    });
});
