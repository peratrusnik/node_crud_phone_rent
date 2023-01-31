let addPhoneBtn = document.querySelector("#addPhone")
let saveChangesBtn = document.querySelector('#saveChanges')

if (addPhoneBtn) {
   addPhoneBtn.addEventListener('click', savePhone)
}
if (saveChangesBtn) {
    saveChangesBtn.addEventListener('click', saveChanges)
}

function saveChanges() {
    let inputId = document.querySelector("[name='id']")
    let inputModel = document.querySelector("[name='model']")
    let inputBrand = document.querySelector("[name='brand']")
    let inputPrice = document.querySelector("[name='price']")
    let inputCount = document.querySelector("[name='count']")
    API.updatePhone({
        id:inputId.value,
        brand:inputBrand.value,
        model:inputModel.value,
        price:inputPrice.value,
        count:inputCount.value
    }).then(res => {
        if (res.status === 200) {
            window.location.href = '/'
        }
    })
}

function savePhone() {
    let inputModel = document.querySelector("[name='model']")
    let inputBrand = document.querySelector("[name='brand']")
    let inputPrice = document.querySelector("[name='price']")
    let inputCount = document.querySelector("[name='count']")
    
    API.addPhone({
        brand:inputBrand.value,
        model:inputModel.value,
        price:inputPrice.value,
        count:inputCount.value
    }).then(res => {
        if (res.status === 200) {
            window.location.href = '/'
        }
    })
}
function deletePhone(id) {
    API.deletePhone(id).then((res) => {
        if (res.status === 205) {
            // window.location.reload()
            window.location.reload()
        }
    })
}