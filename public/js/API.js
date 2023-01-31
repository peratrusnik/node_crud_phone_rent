class API {
    static addPhone = async(data) => {
        return await fetch("/add", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
    }
    static deletePhone = async(id) => {
        return await fetch("/editDelete/"+id, {
            method: "DELETE"
        })
    }
    static updatePhone = async(data) => {
        return await fetch("/edit", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
    }
}