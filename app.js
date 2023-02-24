var content = document.querySelector('.content')
var inputElement = document.querySelector('.content input')
var removeBtn = document.querySelector('.remove-btn')

var tags = ['Node.js', 'React.js']

function renderTags () {
    content.innerHTML = ''
    tags.forEach((tag, index) => {
        content.innerHTML += `
            <div class="content-item">
                <span>${tag}</span>
                <div class="close-btn">
                    <i class="fas fa-times" onclick="removeTag(${index})"></i>
                </div>
            </div>
        `
    })
    // for (let i = 0; i < tags.length; i++) {
    //     const tag = tags[i]
    //     content.innerHTML += `
    //         <div class="content-item">
    //             <span>${tag}</span>
    //             <div class="close-btn">
    //                 <i class="fas fa-times"></i>
    //             </div>
    //         </div>
    //     `
    // }
    content.appendChild(inputElement)
    inputElement.focus()
}

renderTags()

// Add tags
inputElement.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        tags.push(inputElement.value)
        inputElement.value = ''
        renderTags()
    }
})

// Remove tag
function removeTag (index) {
    tags.splice(index, 1)
    renderTags()
}

//Remove All tags
removeBtn.addEventListener('click', () => {
    tags = []
    renderTags()
})



